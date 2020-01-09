<template>
  <div id="base-footer">
    <div class="py-16">
      <h1 class="text-white text-base text-center font-bold mb-4">
        Contact Us
      </h1>
      <p class="text-white text-base text-center font-bold">
        Phone: <a href="tel:+6222-6614726">(+62 22) 6614726</a>
      </p>
      <p class="text-white text-base text-center font-bold">
        Email: <a href="mailto:info@bts.id">info@bts.id</a>
      </p>
      <div class="my-8">
        <nuxt-link to="/" class="h-12 flex items-center justify-center">
          <img
            src="~/assets/images/logo-2.png"
            alt="Logo Application"
            class="h-8"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
#base-footer {
  background-size: cover;
  background-image: url('~assets/images/backgrounds/bg-2.png');
}
</style>
