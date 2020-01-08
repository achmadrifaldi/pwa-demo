<template>
  <div id="landing-page" class="relative">
    <div class="section-1 bg-white p-4">
      <h1 class="text-3xl font-bold leading-tight">
        <span class="text-primary">Bridge</span> <br />
        Technology Services
      </h1>
      <p class="text-sm text-gray my-2">PT. Intersolusi Teknologi Asia</p>

      <p class="my-8">
        <strong>
          Software House Indonesia Bridge Technology Services (BTS.id)
        </strong>
        is an Information & Communication Technology company by means of
        to-make-it-possible mindset. Using the most advance and suitable
        technology, we are able to develop and deploy a new vertical solution
        faster with the vast range of services for all industries. Established
        in 2008, we strive to develop and transform bricks-and-mortar business
        into the modern e-business with greater efficiency and effectiveness. As
        a software developer and publisher, we offer a solution to increase your
        company productivity using the latest technology.
      </p>
    </div>

    <div class="h-4"></div>

    <section-content
      title="Our Services"
      subtitle="We translate what is your needs in the real world into application"
    >
      <div class="my-4">
        <client-only>
          <carousel
            :perPageCustom="[
              [320, 2],
              [480, 3.5],
              [1024, 3.5]
            ]"
          >
            <slide v-for="(service, index) in services" :key="index">
              <card class="mx-2 h-64 md:h-56">
                <div class="flex justify-center">
                  <img :src="service.icon" alt="Icon" class="h-24 w-24" />
                </div>

                <h1 class="font-bold text-base text-gray-900 text-center my-4">
                  {{ service.name }}
                </h1>
              </card>
            </slide>
          </carousel>
        </client-only>
      </div>
    </section-content>

    <div class="h-4"></div>

    <section-content title="Tech Expertise">
      <div class="my-4">
        <client-only>
          <carousel
            :perPageCustom="[
              [320, 3],
              [480, 5],
              [1024, 6]
            ]"
          >
            <slide v-for="(tech, index) in techs" :key="index">
              <card class="mx-2">
                <div class="flex justify-center">
                  <img :src="tech.icon" alt="Icon" class="h-16 w-16" />
                </div>
              </card>
            </slide>
          </carousel>
        </client-only>
      </div>
    </section-content>

    <div class="h-24"></div>
  </div>
</template>

<script>
import Card from '~/components/base/Card.vue'
import SectionContent from '~/components/base/SectionContent.vue'

export default {
  name: 'LandingPage',

  components: {
    Card,
    SectionContent
  },

  data: () => ({
    services: [
      {
        icon: require('@/assets/images/service-icons/icon2.png'),
        name: 'Comprehensive IT Manage Service'
      },
      {
        icon: require('@/assets/images/service-icons/icon1.png'),
        name: 'Business Intelligence, Big Data'
      },
      {
        icon: require('@/assets/images/service-icons/icon3.png'),
        name: 'Web & Mobile Development'
      },
      {
        icon: require('@/assets/images/service-icons/icon4.png'),
        name: 'Cloud Integration'
      },
      {
        icon: require('@/assets/images/service-icons/icon5.png'),
        name: 'More Than What Listed'
      }
    ],

    techs: [
      {
        icon: require('@/assets/images/tech-icons/expertise-03.png')
      },
      {
        icon: require('@/assets/images/tech-icons/csharp_expertise.png')
      },
      {
        icon: require('@/assets/images/tech-icons/elixir_expertise.png')
      },
      {
        icon: require('@/assets/images/tech-icons/expertise-01.png')
      },
      {
        icon: require('@/assets/images/tech-icons/expertise-02.png')
      },
      {
        icon: require('@/assets/images/tech-icons/expertise-04.png')
      },
      {
        icon: require('@/assets/images/tech-icons/expertise-05.png')
      },
      {
        icon: require('@/assets/images/tech-icons/expertise-06.png')
      },
      {
        icon: require('@/assets/images/tech-icons/expertise-07.png')
      },
      {
        icon: require('@/assets/images/tech-icons/expertise-08.png')
      },
      {
        icon: require('@/assets/images/tech-icons/expertise-09.png')
      },
      {
        icon: require('@/assets/images/tech-icons/expertise-10.png')
      },
      {
        icon: require('@/assets/images/tech-icons/golang_expertise.png')
      },
      {
        icon: require('@/assets/images/tech-icons/java_expertise.png')
      },
      {
        icon: require('@/assets/images/tech-icons/javascript_expertise.png')
      },
      {
        icon: require('@/assets/images/tech-icons/kotlin_expertise.png')
      },
      {
        icon: require('@/assets/images/tech-icons/objc_expertise.png')
      },
      {
        icon: require('@/assets/images/tech-icons/oracle_expertise.png')
      },
      {
        icon: require('@/assets/images/tech-icons/php_expertise.png')
      },
      {
        icon: require('@/assets/images/tech-icons/python_expertise.png')
      },
      {
        icon: require('@/assets/images/tech-icons/ruby_expertise.png')
      },
      {
        icon: require('@/assets/images/tech-icons/swift_expertise.png')
      }
    ]
  })
}
</script>

<style>
.section-1 {
  background-size: contain;
  background-image: url('~assets/images/backgrounds/bg-1.png');
}
</style>
