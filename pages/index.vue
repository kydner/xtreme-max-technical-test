<template>
  <div class="flex h-full w-fit">
    <div class="bg-white text-primary">
      <gmap-map
        ref="mainMap"
        :center="startLocation"
        :zoom="17"
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
        <gmap-marker
          v-for="(item, key) in coordinates"
          :key="key"
          :position="getPosition(item)"
          :clickable="true"
          :icon="getMarkers(key)"
          @click="toggleInfo(item, key)"
        ></gmap-marker>
      </gmap-map>
        <div
          v-if="infoOpened"
          class="map-info-window flex flex-col"
          :opened="infoOpened"
          :position="infoPosition"
        >
          <div class="h-36 bg-purple">
            image
          </div>
          <div class="flex items-center bg-secondary h-16 p-8 font-bold text-lg">
            {{ selectedMarker.full_name }}
          </div>
          <div>
            <div class="p-8 text-sm">{{ selectedMarker.description }}</div>
            <div class="city-phone">{{ selectedMarker.phone }}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
      const mapMarker =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyMyAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMyAxMS41QzIzIDIxLjUgMTEuNSAyOC41IDExLjUgMjguNUMxMS41IDI4LjUgMCAyMS41IDAgMTEuNUMwIDUuMTQ4NzMgNS4xNDg3MyAwIDExLjUgMEMxNy44NTEzIDAgMjMgNS4xNDg3MyAyMyAxMS41WiIgZmlsbD0iI0M3MDYyOSIvPg0KPGNpcmNsZSBjeD0iMTEuNSIgY3k9IjExLjUiIHI9IjUuNSIgZmlsbD0iIzgxMDAxNyIvPg0KPC9zdmc+DQo=";
    const mapMarkerActive =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyMyAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMyAxMS41QzIzIDIxLjUgMTEuNSAyOC41IDExLjUgMjguNUMxMS41IDI4LjUgMCAyMS41IDAgMTEuNUMwIDUuMTQ4NzMgNS4xNDg3MyAwIDExLjUgMEMxNy44NTEzIDAgMjMgNS4xNDg3MyAyMyAxMS41WiIgZmlsbD0iIzMzMzMzMyIvPg0KPGNpcmNsZSBjeD0iMTEuNSIgY3k9IjExLjUiIHI9IjUuNSIgZmlsbD0iYmxhY2siLz4NCjwvc3ZnPg0K";
    return {
      mapMarker,
      mapMarkerActive,
      startLocation: {
        lat: 1.286920,
        lng: 103.854570
      },
      coordinates: {},
      selectedKey: null,
      selectedMarker: null,
      infoOpened: false
    }
  },
  async mounted() {
    const coordinates = (await this.$axios.get('/map.json')).data
    this.coordinates = coordinates
  },
  methods: {
    getMarkers(key) {
      if (this.selectedKey === key) return this.mapMarkerActive;
      return this.mapMarker;
    },
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
    },
    closeInfoWindow() {
      this.infoOpened = false;
      this.markerOptions = this.mapMarker;
    }
  }
}
</script>
<style scoped>
.map-info-window {
position: fixed;
width: 250px;
/* height: 100vh; */
background-color: #282c37;
color: white;
top: 110px;
right: 0;
bottom: 0;
}
</style>
