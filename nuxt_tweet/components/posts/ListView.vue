<template>
  <section>
    <div>
      <ListItem v-for="post in posts" :post="post" :key="post.id"></ListItem>
    </div>
  </section>
</template>

<script>
  import ListItem from "./ListItem.vue"

  export default {
    name: "ListView",
    props: {
      posts: Array
    },
    components: {
      ListItem
    }
  }
</script>

<style>

</style>
