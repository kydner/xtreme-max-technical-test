<template>
  <div class="relative flex min-h-screen sm:pt-0 bg-primary text-white">
    <div>
      <LeftMenu />
    </div>
    <div>
      <TopMenu />
    </div>
    <nuxt />
  </div>
</template>
<script>
import LeftMenu from '~/components/app/LeftMenu.vue'
import TopMenu from '~/components/app/TopMenu.vue'
export default {
  components: {
    LeftMenu,
    TopMenu
  }
}
</script>
