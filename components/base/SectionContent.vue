<template>
  <div class="bg-white p-6">
    <h1 class="font-bold text-xl text-gray-800">{{ title }}</h1>
    <p class="text-sm text-gray-700">{{ subtitle }}</p>
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
