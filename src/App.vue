<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | Chanti` : `Chanti` }}</template>
  </metainfo>
  <header />
  <div class=" bg-background h-full w-full" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <RouterView />
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

</script>
