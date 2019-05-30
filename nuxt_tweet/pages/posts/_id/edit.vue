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
  import {mapGetters, mapActions} from "vuex"

  export default {
    name: "edit",
    async asyncData({route, store}) {
      const post = await store.dispatch("posts/fetchPost", route.params.id);
      return {
        editingPost: {...post},
        previousPost: {...post}
      }
    },
    computed: {
      ...mapGetters("posts", ["posts"])
    },
    methods: {
      async save() {
        if (this.isNotPostAlreadyChanged()) {
          try {
            let index;
            this.posts.forEach((p, i) => {
              if (p.id === this.editingPost.id) {
                index = i;
              }
            });
            await this.updatePost({payload: {index: index, post:{...this.editingPost}}});
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
        const presentPost = await this.fetchPost(postId);
        return presentPost.title === this.previousPost.title && presentPost.content === this.previousPost.content;
      },
      ...mapActions("posts", ["updatePost", "fetchPost"])
    }
  }
</script>

<style>

</style>
