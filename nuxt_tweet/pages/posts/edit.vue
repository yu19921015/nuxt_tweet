<template>
  <section>
    <form>
      <label>タイトル：<input type="text" v-model="editedPost.title"></label>
      <label>内容：<input type="text" v-model="editedPost.content"></label>
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
        editedPost: {
          id: route.params.id,
          title: route.params.title,
          content: route.params.content
        }
      }
    },
    methods: {
      async save() {
        const payload = {...this.editedPost};
        try {
          await this.modifyPost({payload});
          this.$router.push("/posts/");
        } catch (error) {
          console.log(error.message);
        }
      },
      ...mapActions("posts", ["modifyPost"])
    }
  }
</script>

<style>

</style>
