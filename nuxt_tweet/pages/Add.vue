<template>
  <section>
    <TheHeader></TheHeader>
    <div>
      <label for="title">タイトル：</label>
      <input id="title" type="text" v-model="formData.title">
      <label for="content">内容：</label>
      <input id="content" type="textarea" v-model="formData.content">
    </div>
    <button @click="publish">投稿</button>
  </section>
</template>

<script>
  import TheHeader from '~/components/TheHeader.vue'
  import {mapActions} from 'vuex'

  export default {
    name: "Add",
    components: {
      TheHeader
    },
    asyncData() {
      return {
        formData: {
          title: "",
          content: ""
        }
      }
    },
    methods: {
      async publish() {
        const payload = {...this.formData}
        await this.publishPost({payload})
        this.$router.push('/')
      },
      ...mapActions('posts', ['publishPost'])
    }
  }
</script>

<style>

</style>
