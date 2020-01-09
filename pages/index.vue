<template>
  <div id="landing-page" class="relative">
    <div class="section-1 bg-white px-4 py-16">
      <h1 class="text-3xl font-bold leading-tight">
        <span class="text-primary">Bridge</span> <br />
        Technology Services
      </h1>
      <p class="text-sm text-gray my-2">PT. Intersolusi Teknologi Asia</p>
    </div>

    <section-content class="section-1" title="We Transform Ideas">
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
    </section-content>

    <div class="h-4"></div>

    <section-content
      class="section-1"
      title="Our Services"
      subtitle="We translate what is your needs in the real world into application. Best service, with best professional people."
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

    <section-content
      class="section-1"
      title="Tech Expertise"
      subtitle="We are the most reliable IT Company in Indonesia with our years of experience."
    >
      <p class="my-8 text-sm text-gray-700">
        Our vision and mission are to be better, tougher, and smarter. You can
        also develop your application software, IT service, or website with us.
        Bring your technology service to a different level, branding your
        product, boost your sales, and be a professional with us. Our services
        will make you satisfied.
      </p>
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

    <div class="h-4"></div>

    <section-content
      class="section-1"
      title="Clients"
      subtitle="Professional Service with Profesional Client. What makes us have integrity and credibility."
    >
      <div class="my-4 flex flex-wrap">
        <div v-for="(client, index) in clients" :key="index" class="w-1/2 md:w-1/3 lg:w-1/6">
          <card class="m-2">
            <div class="flex justify-center">
              <img :src="client.icon" alt="Icon" class="h-16 w-16" />
            </div>
          </card>
        </div>
      </div>
    </section-content>
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
    clients: [
      {
        icon: require('@/assets/images/client-icons/weblogoclients-04.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-01.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-02.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-03.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-05.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-06.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-07.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-08.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-09.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-10.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-11.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-12.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-13.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-14.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-15.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-16.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-17.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-18.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-19.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-20.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-21.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-23.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-24.png')
      },
      {
        icon: require('@/assets/images/client-icons/weblogoclients-26.png')
      }
    ],

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
