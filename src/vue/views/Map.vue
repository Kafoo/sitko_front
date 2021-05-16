<template>
  <primary-content-body>
    <page-title v-if="$vuetify.breakpoint.name !== 'xs'">{{
      $t("places map") | capitalize
    }}</page-title>
    <v-card class="ma-0" rounded="lg" elevation="8">
      <div v-if="loading" class="loading d-flex align-center justify-center">
        <v-progress-circular
          indeterminate
          :size="100"
          color="grey lighten-5"
        ></v-progress-circular>
      </div>
      <l-map
        id="map"
        ref="refMap"
        class="map"
        :zoom="5"
        :center="[46.70672236934442, 2.254394665360451]"
        :minZoom="2"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <v-marker-cluster>
          <l-marker
            v-for="place in displayed_places"
            :key="place.id"
            :ref="'marker_'+place.id"
            :lat-lng="[
              place.location.position.lat,
              place.location.position.lng
            ]"
          >
            <l-popup>
              <place-card :place="place" />
            </l-popup>
          </l-marker>
        </v-marker-cluster>
      </l-map>
    </v-card>
  </primary-content-body>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "@vue/composition-api";
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
import VMarkerCluster from "vue2-leaflet-markercluster";
import useFetcher from "@/ts/functions/composition/useFetcher";
import PlaceModel from "@/ts/models/placeClass";
import L from "leaflet";
import "leaflet.markercluster";
import PlaceCard from "@c/molecules/place/PlaceCard.vue";

interface Marker{
  mapObject:{
    getLatLng:()=>Array<number>, 
    openPopup:()=>void,

  }
}

interface Map{
  mapObject:{
    setView:(lgtLat:Array<number>, zoom?:number)=>void
  }
}

export default defineComponent({
  name: "Map",

  components: {
    PlaceCard,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
    VMarkerCluster
  },

  setup(props, {refs, root}) {
    var { entity: places, loading } = useFetcher("place/GET_ALL_PLACES");

    var displayed_places = computed(() => {
      var adresses: Array<PlaceModel> = [];
      if (places.value) {
        places.value.forEach((place: PlaceModel) => {
          if (place.location) {
            adresses.push(place);
          }
        });
      }
      return adresses;
    });

    watch(() => places.value, (newPlaces:any) => {

      if(root.$route.params.focusId &&
      root.$route.params.focusType){
        root.$nextTick(() => {
          const markerName = 'marker_'+root.$route.params.focusId
          if(newPlaces.length &&
          refs[markerName]){
            console.log(refs)
            console.log(refs['marker_11'])
            var marker = (refs[markerName] as Array<Vue & Marker>)[0].mapObject
            var map = (refs.refMap as Vue & Map).mapObject
            map.setView(marker.getLatLng(), 13)
            setTimeout(()=>{
              marker.openPopup()
            },300)
          }
        });
      }
    });

    return {
      places,
      loading,
      displayed_places
    };
  }
});
</script>

<style scoped>
>>> .leaflet-popup-content-wrapper {
  background: none !important;
  box-shadow: none !important;
  margin: 0 !important;
}

>>> .leaflet-popup {
  margin-bottom: 10px !important;
}

>>> .leaflet-popup-tip-container {
  display: none;
}

>>> .leaflet-pane {
  z-index: 1;
}

.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0000001f;
  z-index: 2;
}

.map {
  height: 60vh;
  width: 100%;
}

@media (max-width: 600px) {
  .map {
    height: calc(100vh - 60px);
  }
}

@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>
