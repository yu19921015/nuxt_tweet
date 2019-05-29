<template>
  <section>
    <form>
      <label>タイトル：<input type="text" v-model="editingPost.title"></label>
      <label>内容：<input type="text" value="" v-model="editingPost.content"></label>
      <button @click.prevent="save">保存</button>
    </form>
  </section>
</template>

<script>
  import {mapActions} from "vuex"
  import axios from "axios"

  export default {
    name: "edit",
    async asyncData({route}) {
      const post = await axios.get(`https://nuxt-tweet-d26d6.firebaseio.com/posts/${route.params.id}.json`);
      return {
        editingPost: {...post.data},
        previousPost: {...post.data}
      }
    },
    methods: {
      async save() {
        if (this.isNotPostAlreadyChanged()) {
          try {
            const payload = {...this.editingPost};
            await this.updatePost({payload});
            this.$router.push("/posts/");
          } catch (error) {
            console.log(error.message);
          }
        } else {
          console.log("投稿がすでに編集されていたため、更新できませんでした。");
        }
      },
      async isNotPostAlreadyChanged() {
        const postId = this.editingPost.id;
        const presentPost = await this.$axios.$get(`/posts/${postId}.json`);
        return presentPost.title === this.previousPost.title && presentPost.content === this.previousPost.content;
      },
      ...mapActions("posts", ["updatePost", "fetchPost"])
    }
  }
</script>

<style>

</style>
