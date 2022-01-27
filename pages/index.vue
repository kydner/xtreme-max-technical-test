<template>
  <div class="flex h-full w-fit">
    <div class="flex items-center justify-center h-full bg-primary w-60">
      search
    </div>
    <div class="bg-white w-fit text-primary">
      <gmap-map
        ref="mainMap"
        :center="startLocation"
        :zoom="6"
        map-type-id="roadmap"
        style="width: 80vw; height: 100%"
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
      <transition name="map-info-window-slide">
        <div
          v-if="infoOpened"
          class="map-info-window"
          :opened="infoOpened"
          :position="infoPosition"
        >
          <div v-if="selectedMarker" class="city-info">
            <div class="city-name">{{ selectedMarker.city }}</div>
            <div class="city-phone">{{ selectedMarker.phone }}</div>
            <div class="city-email">{{ selectedMarker.email }}</div>
            <div class="city-location">{{ selectedMarker.full_name }}</div>
            <button class="btn btn-full-width btn-main">Проложить маршрут</button>
            <div class="map-btn-close-holder">
              <button class="map-btn-close" @click="closeInfoWindow()">close</button>
            </div>
          </div>
        </div>
      </transition>
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
        lat: 49.0384,
        lng: 33.4513
      },
      coordinates: {
        0: {
          city: "Киев (сервисный центр)",
          phone: "0 (800) 40 7887",
          email: "superservice@nfm.com.ua",
          full_name: "Киев",
          lat: "50.4021702",
          lng: "30.3926088"
        },
        1: {
          city: "Харьков (сервисный центр)",
          phone: "0 (800) 40 7887",
          email: "superservice@nfm.com.ua",
          full_name:
            "Харьковская обл., Харьковский р-н, пгт. Песочин, ул. Надежды, 15",
          lat: "49.9543502",
          lng: "36.1241697"
        },
        2: {
          city: "Николаев",
          phone: "0 (800) 40 7887",
          email: "superservice@nfm.com.ua",
          full_name: "ул. Надежды, 15",
          lat: "46.9332135",
          lng: "31.8679149"
        },
        3: {
          city: "Дніпро́ (сервисный центр)",
          phone: "0 (800) 40 7887",
          email: "superservice@nfm.com.ua",
          full_name: "вулиця 20-річчя Перемоги, 12",
          lat: "48.4164999",
          lng: "35.1338916"
        }
      },
      selectedKey: null,
      selectedMarker: null,
      infoOpened: false
    }
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
