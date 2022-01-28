<template>
  <div class="accourdion-main">
    <div v-for="(menu, index) of leftMenu" :key="index" class="accourdion border-t border-b border-tersiery">
      <span class="accourdion-header text-lg font-bold">{{ menu.title }}</span>
      <ul v-if="menu.children"  class="accourdion-menu">
        <li v-for="sub of menu.children" :key="sub.title" class="" >
          {{ sub.title}}
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftMenu: [
        {
          title: 'Mariana By Sands',
          children: [
            { title: 'ArtScience Museum' },
            { title: 'Mariana By Sand SkyPark'},
            { title: 'Double Helix Bridge'},
          ]
        },
        {
          title: 'Garden by the Bay',
        },
        {
          title: 'China Town',
        },
        {
          title: 'Asian Civiliations Museum',
        },
        {
          title: 'Clark Quay',
        },
        {
          title: 'Fort Clanning Park',
        },
        {
          title: 'Singapore Player',
        },
        {
          title: 'Orchard Road',
        },
      ]
    }
  }
}
</script>
<style scoped>
.accourdion-main {
  padding-top: 1em;
}
.accourdion {
  padding: 0.8em;
}
.accourdion-menu {
  padding-left: 1em;
}
.accourdion-menu li {
  padding: 0.5em 0;
  color: gray;
}
.active {
  display: none;
}
</style>
