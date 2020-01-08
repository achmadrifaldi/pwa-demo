<template>
  <div class="bg-white p-6">
		<div class="flex">
			<div class="w-2/3">
				<h1 class="font-bold text-xl text-gray-800">{{ title }}</h1>
				<p class="text-sm text-gray-700">{{ subtitle }}</p>
			</div>
			<div class="w-1/3">
				<slot name="link"></slot>
			</div>
		</div>
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
