<template>
  <section class="list-item">
    <div class="list-item__post">
      <div><span>title</span>: <span>{{post.title}}</span></div>
      <div><span>content</span>: <span>{{post.content}}</span></div>
      <nuxt-link :to="`/posts/${this.post.id}/edit`">
        <button class="button is-primary is-small list-item__edit-button">編集</button>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ListItem",
    props: {
      post: Object
    }
  }
</script>

<style>
  .list-item__post {
    border: solid black 2px;
    margin-bottom: 2px;
  }

  .list-item__edit-button {
    display: none;
  }

  .list-item__post:hover .list-item__edit-button {
    display: block;
  }

  .is-primary.list-item__edit-button {
    color: #000;
  }
</style>
