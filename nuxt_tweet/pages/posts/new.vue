<template>
  <section>
    <form>
      <label>タイトル：<input type="text" v-model="newPost.title"></label>
      <label>内容：<input type="text" v-model="newPost.content"></label>
      <button type="submit" value="投稿">toukou</button>
    </form>
<!--    <button @click="submit">投稿</button>-->
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
      submit() {
        const payload = {...this.newPost};
        // console.log(payload)
        // debugger
        this.createPost({payload});
        this.$router.push("/posts/");
      },
      ...mapActions("posts", ["createPost"])
    }
  }
</script>

<style>

</style>
