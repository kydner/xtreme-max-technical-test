<template>
  <div class="flex h-full w-fit">
    <div class="bg-white text-primary">
      <!-- https://codesandbox.io/s/q67u0?file=/src/components/Map.vue -->
      <!-- documantation https://www.npmjs.com/package/vue2-google-maps -->
      <gmap-map
        ref="mainMap"
        :center="startLocation"
        :zoom="zoom"
        map-type-id="roadmap"
        style="width: 74vw; height: 100%"
        :options="{
            zoomControl: false,
            scaleControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            disableDefaultUi: false
          }"
      >
        <!-- https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions -->
          <!-- :icon="getMarkers(key)" -->
        <gmap-marker
          v-for="(item, key) in coordinates"
          :key="key"
          :position="getPosition(item)"
          :clickable="true"
          @click="toggleInfo(item, key)"
        ></gmap-marker>
      </gmap-map>
        <div
          v-if="infoOpened"
          class="map-info-window flex flex-col shadow-lg"
          :opened="infoOpened"
          :position="infoPosition"
        >
          <div class="relative h-48 bg-purple">
            <img src="/singapore.png" alt="" class="object-fill h-48 w-full" >
          </div>
          <div class="flex items-center bg-secondary h-16 p-8 font-bold text-lg">
            {{ selectedMarker.full_name }}
          </div>
          <div>
            <div class="p-8 text-sm">{{ selectedMarker.description }}</div>
            <div class="city-phone px-8">{{ selectedMarker.phone }}</div>
            <div class="city-website px-8">{{ selectedMarker.website }}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
      const mapMarker = "/marker.svg";
    const mapMarkerActive =
      "/marker-active.svg";
    return {
      mapMarker,
      mapMarkerActive,
      startLocation: {
        lat: 1.286920,
        lng: 103.854570
      },
      zoom: 15,
      coordinates: {},
      selectedKey: null,
      selectedMarker: null,
      infoOpened: false
    }
  },
  async mounted() {
    /// get coordinate from json
    const coordinates = (await this.$axios.get('/map.json')).data
    this.coordinates = coordinates
  },
  methods: {
    /// not used, because use default icon
    getMarkers(key) {
      if (this.selectedKey === key) return this.mapMarkerActive;
      return this.mapMarker;
    },

    /// get map position
    getPosition(marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      };
    },

    toggleInfo(marker, key) {
      this.infoPosition = this.getPosition(marker);
      this.selectedMarker = marker;
      this.selectedKey = key;
      this.infoOpened = !this.infoOpened;
      setTimeout(() => {
        /// zoom on click
        this.zoom = this.infoOpened ? 17: 15
        /// set position
        this.startLocation = {
          lat: parseFloat(marker.lat),
          lng: parseFloat(marker.lng),
        }
      }, 50);
    },
  }
}
</script>
<style scoped>
.map-info-window {
position: fixed;
width: 350px;
/* height: 100vh; */
background-color: #282c37;
color: white;
top: 110px;
right: 0;
bottom: 0;
}
</style>
