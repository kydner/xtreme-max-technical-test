<template>
  <div class="relative flex min-h-screen sm:pt-0 text-white">
    <div class="w-150">
      <LeftMenu />
    </div>
    <div class="w-submenu">
      <LeftSubMenu />
    </div>
    <div class="flex flex-col w-full">
      <TopMenu />
      <nuxt />
    </div>

  </div>
</template>
<script>
import LeftMenu from '~/components/app/LeftMenu.vue'
import LeftSubMenu from '~/components/app/LeftSubMenu.vue'
import TopMenu from '~/components/app/TopMenu.vue'
export default {
  components: {
    LeftMenu,
    LeftSubMenu,
    TopMenu
  }
}
</script>
