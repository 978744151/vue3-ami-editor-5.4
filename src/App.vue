<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const includeList = []
const route = useRoute()
const router = useRouter()
watch(
  (): any => router.currentRoute.value,
  (newVal) => {
    if (newVal.meta.keepAlive && includeList.indexOf(newVal.name) === -1) {
      includeList.push(newVal.name)
      console.log(includeList)
    }
  },
  { deep: true }
)
</script>

<template>
  <RouterView v-slot="{ Component }">
    <keep-alive :include="includeList">
      <component :is="Component" />
    </keep-alive>
  </RouterView>
</template>

<style scoped></style>
