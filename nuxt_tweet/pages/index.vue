<template>
  <section>
    <TheHeader></TheHeader>
  </section>
</template>

<script>
  import TheHeader from "~/components/TheHeader.vue"

  export default {
    components: {
      TheHeader
    },
    async asyncData(context) {
      context.redirect("/posts/");
    }
  }
</script>

<style>
</style>
