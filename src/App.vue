<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | Chanti` : `Chanti` }}</template>
  </metainfo>
  <header />
  <NavbarLO class=" px-0 w-full md:w-[97%]  " />
  <div class=" bg-background h-full w-full" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in"
       :name="transitionName">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <footer />
  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useMeta } from 'vue-meta'
import { useI18n } from 'vue-i18n'



const { locale } = useI18n()

onUpdated(() => {
  document.documentElement.lang = locale.value
})

useMeta({
  title: 'Chanti Platform',
  htmlAttrs: {
    lang: `${locale.value}`
    , amp: true
  }
})



const routeOrder = ['/', '/projects', '/inbox', '/profile'];
const currentRouteIndex = ref(routeOrder.indexOf(useRoute().path));
const previousRouteIndex = ref(currentRouteIndex.value);
const router = useRouter();

watch(() => router.currentRoute.value, (to, from) => {
  const newIndex = routeOrder.indexOf(to.path);
  const oldIndex = routeOrder.indexOf(from.path);
  previousRouteIndex.value = currentRouteIndex.value;
  currentRouteIndex.value = newIndex;

  // Determine the direction of the transition based on route index
  if (newIndex > oldIndex) {
    // Moving forward
    transitionName.value = 'slide-left';
  } else {
    // Moving backward
    transitionName.value = 'slide-right';
  }
});

const transitionName = ref('slide-left');

</script>




<style>
/* Define your transitions */
.slide-left-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s ease;
}

.slide-left-enter,
.slide-right-leave-to

/* .slide-right-leave-active in <2.1.8 */
  {
  transform: translateX(100%);
}

.slide-right-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s ease;
}

.slide-right-enter,
.slide-left-leave-to

/* .slide-left-leave-active in <2.1.8 */
  {
  transform: translateX(-100%);
}
</style>