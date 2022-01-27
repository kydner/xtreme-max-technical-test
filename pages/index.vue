<template>
  <div class="flex h-full w-fit">
    <div class="flex items-center justify-center h-full bg-primary w-60">
      search
    </div>
    <div class="bg-white w-fit text-primary">
      <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
      />
    </GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
