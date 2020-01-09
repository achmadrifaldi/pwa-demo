<template>
  <div id="news-page" class="flex items-center flex-col">
    <div
      v-for="(headline, index) in topHeadlines.articles"
      :key="index"
      class="w-full md:w-1/2"
    >
      <card class="my-4">
        <div class="h-64 overflow-hidden">
          <img :src="headline.urlToImage" :alt="headline.title" />
        </div>

        <h1 class="text-xl font-bold my-2">{{ headline.title }}</h1>

        <p class="my-2">
          {{ headline.description }}
        </p>

        <div class="flex">
          <span class="flex items-center text-sm text-gray-800">
            <em class="material-icons text-sm mr-1">
              access_time
            </em>
            {{ headline.publishedAt | moment('MMMM, DD YYYY') }}
          </span>

          <span class="flex items-center text-sm text-gray-800 ml-4">
            <em class="material-icons text-sm mr-1">
              label
            </em>
            {{ headline.source.name }}
          </span>
        </div>

        <span class="flex items-center text-sm text-gray-800 my-2">
          <em class="material-icons text-sm mr-2">
            person
          </em>
          {{ headline.author }}
        </span>
      </card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '~/components/base/Card.vue'

export default {
  components: {
    Card
  },

  computed: {
    ...mapGetters({
      topHeadlines: 'news/topHeadlines',
      isLoading: 'news/isLoading'
    })
  },

  methods: {
    fetchTopHeadlines() {
      this.$store.dispatch('news/fetchTopHeadlines')
    }
  },

  created() {
    this.fetchTopHeadlines()
  }
}
</script>

<style>
#news-page {
  min-height: 100vh;
}
</style>
