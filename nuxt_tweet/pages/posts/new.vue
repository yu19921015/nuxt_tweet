<template>
  <section>
    <form>
      <label>タイトル：<input type="text" v-model="newPost.title"></label>
      <label>内容：<input type="text" v-model="newPost.content"></label>
      <button type="submit" @click.prevent="submit">投稿</button>
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
        try {
          await this.createPost({payload});
          this.$router.push("/posts/");
        } catch (error) {
          console.log(error.message);
        }
      },
      ...mapActions("posts", ["createPost"])
    }
  };
</script>

<style>

</style>
