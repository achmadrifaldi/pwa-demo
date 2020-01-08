<template>
  <div class="bg-white rounded-lg border p-6">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SectionContent',

  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
