<template>
  <div class="d-flex flex-column">
    <v-btn
      v-for="(btn, index) in btns"
      :key="index"
      @click="btn.action"
      class="placeAction rounded-lg mb-3"
      :loading="loading"
      :disabled="loading"
    >
      <v-icon class="mr-2" :color="btn.color">{{ btn.icon }}</v-icon>
      {{ btn.title }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import PlaceModel from "@/ts/models/placeClass";
import { useActions, useGetters } from "vuex-composition-helpers";
import UserModel from "@/ts/models/userClass";

export default defineComponent({
  name: "JoinButton",

  props: {
    entity: Object as () => PlaceModel | UserModel,
    type: String
  },

  setup(props, { root }) {
    const { SEND_LINK_REQUEST } = useActions({
      SEND_LINK_REQUEST: props.type + "/SEND_LINK_REQUEST"
    } as any);
    const { SEND_CANCEL_LINK_REQUEST } = useActions({
      SEND_CANCEL_LINK_REQUEST: props.type + "/SEND_CANCEL_LINK_REQUEST"
    } as any);
    const { SEND_DECLINE_LINK } = useActions({
      SEND_DECLINE_LINK: props.type + "/SEND_DECLINE_LINK"
    } as any);
    const { SEND_CONFIRM_LINK } = useActions({
      SEND_CONFIRM_LINK: props.type + "/SEND_CONFIRM_LINK"
    } as any);
    const { SEND_UNLINK_REQUEST } = useActions({
      SEND_UNLINK_REQUEST: props.type + "/SEND_UNLINK_REQUEST"
    } as any);

    const { user } = useGetters({ user: "auth/user" } as any);

    var loading = ref(false);

    const unlink = () => {
      loading.value = true;
      SEND_UNLINK_REQUEST(props.entity)
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          loading.value = false;
        });
    };

    const decline = () => {
      loading.value = true;
      SEND_DECLINE_LINK({requesting:props.entity, requested:user.value})
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          loading.value = false;
        });
    };

    const confirm = () => {
      loading.value = true;
      SEND_CONFIRM_LINK({requesting:props.entity, requested:user.value})
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          loading.value = false;
        });
    };

    const cancel = () => {
      loading.value = true;
      SEND_CANCEL_LINK_REQUEST(props.entity)
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          loading.value = false;
        });
    };

    const link = () => {
      loading.value = true;
      SEND_LINK_REQUEST(props.entity)
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          loading.value = false;
        });
    };

    const link_btn = {
      title: root.$i18n.t("connect"),
      icon: "link",
      color: "green",
      action: link
    };

    const decline_btn = {
      title: root.$i18n.t("decline"),
      icon: "link",
      color: "red",
      action: decline
    };

    const confirm_btn = {
      title: root.$i18n.t("accept"),
      icon: "link",
      color: "green",
      action: confirm
    };

    const cancel_btn = {
      title: root.$i18n.t("cancel"),
      icon: "link",
      color: "blue",
      action: cancel
    };

    const unlink_btn = {
      title: root.$i18n.t("disconnect"),
      icon: "link",
      color: "red",
      action: unlink
    };

    var btns = computed(() => {
      if (props.entity) {
        if (props.entity.link === "requesting") {
          return [cancel_btn];
        } else if (props.entity.link === "requested") {
          return [confirm_btn, decline_btn];
        } else if (props.entity.link === "confirmed") {
          return [unlink_btn];
        } else {
          return [link_btn];
        }
      }
    });

    return {
      loading,
      btns
    };
  }
});
</script>

<style scoped></style>
