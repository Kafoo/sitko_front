<template>
  <notification :notification="notification">
    <div v-if="notification.state == 'pending'" class="ma-1 m-0">
      <v-btn
        small
        text
        color="green"
        @click.native.stop="confirm"
        :disabled="loading_choice"
      >
        <!-- TOTRANSLATE -->
        {{ $t("accept") }}
      </v-btn>
      <v-btn
        small
        text
        color="red darken-2"
        @click.native.stop="decline"
        :disabled="loading_choice"
      >
        <!-- TOTRANSLATE -->
        {{ $t("decline") }}
      </v-btn>
    </div>
    <div
      v-else
      class="mx-1 text-caption"
      :class="notification.state == 'confirmed' ? 'green--text' : 'red--text'"
    >
      {{ $t("notification.link_request.state." + notification.state) }}
    </div>
  </notification>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { useActions, useMutations } from "vuex-composition-helpers";
import LinkNotificationModel from "@/ts/models/linkNotificationClass";
import Notification from "./Notification.vue";

export default defineComponent({
  name: "LinkNotification",

  components: {
    Notification
  },

  props: {
    notification: Object as () => LinkNotificationModel
  },

  setup(props) {
    var loading_choice = ref(false);

    let namespace = props.notification!.requested_type;

    const { SEND_CONFIRM_LINK } = useActions({
      SEND_CONFIRM_LINK: namespace + "/SEND_CONFIRM_LINK"
    } as any);
    const { SEND_DECLINE_LINK } = useActions({
      SEND_DECLINE_LINK: namespace + "/SEND_DECLINE_LINK"
    } as any);
    const { SEND_NOTIFICATION_DELETION } = useActions({
      SEND_NOTIFICATION_DELETION: "notification/SEND_NOTIFICATION_DELETION"
    } as any);
    const { SEND_NOTIFICATION_READ } = useActions({
      SEND_NOTIFICATION_READ: "notification/SEND_NOTIFICATION_READ"
    } as any);

    const confirm = () => {
      read();
      loading_choice.value = true;
      SEND_CONFIRM_LINK({
        requesting: props.notification!.requesting,
        requested: props.notification!.requested
      })
        .then(() => {
          loading_choice.value = false;
        })
        .catch(() => {
          loading_choice.value = false;
        });
    };

    const decline = () => {
      read();
      loading_choice.value = true;
      SEND_DECLINE_LINK({
        requesting: props.notification!.requesting,
        requested: props.notification!.requested
      })
        .then(() => {
          loading_choice.value = false;
        })
        .catch(() => {
          loading_choice.value = false;
        });
    };

    const read = () => {
      if (!props.notification!.read) {
        SEND_NOTIFICATION_READ(props.notification!.id);
      }
    };

    return {
      confirm,
      decline,
      loading_choice,
      read
    };
  }
});
</script>

<style scoped></style>
