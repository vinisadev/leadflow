<script setup lang="ts">
const features = [
  {
    icon: 'i-tabler-shield-check',
    title: 'Security By Default',
    desc: 'Keep your business data safe with industry standard security algorithms and best practices.'
  },
  {
    icon: 'i-tabler-users-group',
    title: 'Team Accounts',
    desc: 'Accounts for each member of your team. Control what each person can see and what actions they can perform.'
  },
  {
    icon: 'i-tabler-device-mobile',
    title: 'Mobile Friendly',
    desc: 'A mobile-first development approach to ensure that you can access your data from anywhere.'
  },
  {
    icon: 'i-tabler-git-fork',
    title: 'Automation Friendly',
    desc: 'Set your business to work on auto-pilot with an integrated automation workflow.'
  },
  {
    icon: 'i-tabler-api',
    title: 'Developer Friendly API',
    desc: 'Need some custom functionality? No problem. We have a developer friendly API.'
  },
  {
    icon: 'i-tabler-recycle',
    title: 'Lead Lifecycle',
    desc: 'In a world that is speed to the lead, we give you a birds eye view of the entire lead lifecycle.'
  },
  {
    icon: 'i-tabler-bubble-text',
    title: 'Integrated SMS',
    desc: 'Send SMS messages from directly inside of LeadFlow.'
  },
  {
    icon: 'i-tabler-calendar',
    title: 'Scheduling Made Easy',
    desc: 'With our integrated calendar, all your appointments are visible at the click of a button.'
  },
  {
    icon: 'i-tabler-brand-mailgun',
    title: 'Email Campaigns',
    desc: 'With automated email campaigns, you can reach your entire audience at once.'
  }
]
</script>

<template>
  <section class="py-14">
    <div class="max-w-screen-xl mx-auto px-4 text-center md:px-8">
      <div class="max-w-2xl mx-auto">
        <h3 class="text-3xl font-semibold sm:text-4xl">
          Go from 0 to 100...
        </h3>
        <p class="mt-3">
          Batteries included. All the features you need to accelerate your business today!
        </p>
      </div>
      <div class="mt-12">
        <ul class="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="(item, index) in features" :key="index" class="space-y-3">
            <div class="w-12 h-12 mx-auto bg-primary/10 text-primary-600 rounded-full flex items-center justify-center">
              <UIcon :name="item.icon" class="h-6 w-6 text-primary" />
            </div>
            <h4 class="text-lg font-semibold">
              {{ item.title }}
            </h4>
            <p>
              {{ item.desc }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>