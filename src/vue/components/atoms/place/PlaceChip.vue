<template>
  <v-btn
    outlined
    :to="'/place/' + place.id"
    height="32px"
    rounded
    text
    color="grey darken-2"
    small
    class="pl-0 pr-3"
  >
    <tiny-avatar class="d-inline mr-2" size="28" :image="image" />
    <div style="max-width:170px" class="text-truncate">
      <span>{{ place.name }}</span>
    </div>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import PlaceModel from "@/ts/models/placeClass";
import ImageModel from "@/ts/models/imageClass";
import TinyAvatar from "@c/atoms/user/TinyAvatar.vue";

export default defineComponent({
  name: "PlaceChip",

  components: {
    TinyAvatar
  },

  props: {
    place: {
      type: Object as () => PlaceModel
    }
  },

  setup(props) {
    var image;

    if (props.place && props.place.image) {
      image = props.place.image;
    } else {
      image = new ImageModel();
    }

    return { image };
  }
});
</script>

<style scoped></style>
