<template>
  <section>
    <TheHeader></TheHeader>
    <ListView :tweets="showPosts"></ListView>
  </section>
</template>

<script>
  import TheHeader from '~/components/TheHeader.vue'
  import ListView from '~/components/ListView.vue'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: {
      TheHeader,
      ListView
    },
    name: "index",
    async asyncData(context) {
      await context.store.dispatch("posts/fetchPosts")
    },
    computed: {
      showPosts() {
        return this.posts
      },
      ...mapGetters('posts', ['posts'])
    },
    methods: {
      ...mapActions('posts', ['fetchPosts'])
    }
  }
</script>

<style>
</style>
