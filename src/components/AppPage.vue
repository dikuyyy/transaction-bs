<template>
  <div class="p-2">
    <div class="h2">{{title}}</div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "AppPage",
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>