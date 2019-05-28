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

  export default {
    name: "edit",
    asyncData({route}) {
      return {
        editingPost: {
          id: route.params.id,
          title: "",
          content: ""
        },
        previousPost: {
          title: "",
          content: ""
        }
      }
    },
    mounted: async function () {
      const post = await this.fetchPost(this.editingPost.id);
      this.editingPost.title = post.title;
      this.editingPost.content = post.content;
      this.previousPost.title = post.title;
      this.previousPost.content = post.content;
    },
    methods: {
      async save() {
        const payload = {editingPost: {...this.editingPost}, previousPost: {...this.previousPost}};
        try {
          await this.updatePost({payload});
          this.$router.push("/posts/");
        } catch (error) {
          console.log(error.message);
        }
      },
      ...mapActions("posts", ["updatePost", "fetchPost"])
    }
  }
</script>

<style>

</style>
