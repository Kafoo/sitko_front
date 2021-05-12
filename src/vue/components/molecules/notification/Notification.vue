<template>
  <v-hover v-slot="{ hover }">
    <div
      v-if="notification"
      class="p-relative d-flex align-center c-pointer"
      :class="`grey lighten-${hover ? '3' : '4'}`"
      @mouseover="read"
      @click="
        if (notification.link) {
          read();
          $router.push(notification.link).catch(() => {});
        }
      "
    >
      <v-btn
        v-if="notification.closable"
        class="close-btn"
        icon
        x-small
        @click.native.stop="deleteNotification"
      >
        <v-icon x-small>
          close
        </v-icon>
      </v-btn>
      <tiny-avatar
        size="50px"
        v-if="notification.image"
        class="ma-2"
        :image="notification.image"
      />

      <div class="d-flex flex-column text-body-2 pr-5 pb-2">
        <div class="text-caption mx-1 mt-1 font-italic grey--text">
          <v-icon v-if="!notification.read" size="10px" color="red darken-2">
            circle
          </v-icon>
          {{ notification.time }}
        </div>
        <span class="mx-1" v-html="notification.message" />

        <slot></slot>
      </div>
    </div>
  </v-hover>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useActions } from "vuex-composition-helpers";
import LinkNotificationModel from "@/ts/models/linkNotificationClass";
import NotificationModel from "@/ts/models/notificationClass";

export default defineComponent({
  name: "Notification",

  components: {},

  props: {
    notification: (Object as () => NotificationModel) || LinkNotificationModel
  },

  setup(props) {
    const { SEND_NOTIFICATION_DELETION } = useActions({
      SEND_NOTIFICATION_DELETION: "notification/SEND_NOTIFICATION_DELETION"
    } as any);
    const { SEND_NOTIFICATION_READ } = useActions({
      SEND_NOTIFICATION_READ: "notification/SEND_NOTIFICATION_READ"
    } as any);

    const read = () => {
      if (!props.notification!.read) {
        SEND_NOTIFICATION_READ(props.notification!.id);
      }
    };

    const deleteNotification = () => {
      SEND_NOTIFICATION_DELETION(props.notification!.id);
    };

    return {
      deleteNotification,
      read
    };
  }
});
</script>

<style scoped>
.close-btn {
  position: absolute;
  top: 3px;
  right: 3px;
}
</style>
