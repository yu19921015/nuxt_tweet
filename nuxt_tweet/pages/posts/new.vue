<template>
  <section>
    <form>
      <label>タイトル：<input type="text" v-model="newPost.title"></label>
      <label>内容：<input type="text" v-model="newPost.content"></label>
      <button type="submit" value="投稿" @click.prevent="submit">投稿</button>
    </form>
  </section>
</template>

<script>
  import {mapActions} from "vuex"

  export default {
    name: "new",
    asyncData() {
      return {
        newPost: {
          title: "",
          content: ""
        }
      }
    },
    methods: {
      async submit() {
        const payload = {...this.newPost};
        await this.createPost({payload});
        this.$router.push("/posts/");
      },
      ...mapActions("posts", ["createPost"])
    }
  }
</script>

<style>

</style>
