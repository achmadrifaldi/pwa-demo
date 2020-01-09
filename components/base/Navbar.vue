<template>
  <div id="base-navbar" class="relative">
    <div class="fixed z-10 inset-x-0">
      <div class="flex flex-wrap items-center bg-alternative py-2 lg:px-16">
        <div class="w-full lg:w-1/5 flex items-center px-2 lg:justify-center">
          <nuxt-link to="/" class="h-12 flex items-center justify-center">
            <img src="~/assets/images/logo-2.png" alt="Logo Application" class="h-8"/>
          </nuxt-link>
        </div>

        <div
          class="hidden w-full lg:w-4/5 lg:flex flex-col lg:flex-row justify-end items-center"
        >
          <ul
            class="flex flex-col lg:flex-row lg:items-center leading-none text-sm text-white font-bold p-0 m-0"
          >
            <li class="inline-block mx-2 mt-4 lg:mt-0">
              <nuxt-link to="/">Home</nuxt-link>
            </li>

            <li class="inline-block mx-2 mt-4 lg:mt-0">
              <nuxt-link to="/attendance">Attendance</nuxt-link>
            </li>

            <li class="inline-block mx-2 mt-4 lg:mt-0">
              <nuxt-link to="/blog">Blog</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="h-16"></div>
  </div>
</template>

<script>
export default {
	name: 'Navbar'
}
</script>
