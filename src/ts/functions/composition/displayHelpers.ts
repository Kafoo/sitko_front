import { computed } from "@vue/composition-api";

export const isMobile = (root: any) =>
  computed(() => {
    var breakpoint = root.$vuetify.breakpoint.name;
    return breakpoint === "xs" ? true : false;
  });

export const windowWidth = (root: any) =>
  computed(() => {
    return root.$vuetify.breakpoint.width;
  });
