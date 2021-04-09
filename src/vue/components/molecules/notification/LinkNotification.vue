<template>
  <v-hover v-slot="{ hover }">
    <div
      v-if="notification"
      class="p-relative d-flex align-center c-pointer"
      :class="`grey lighten-${hover ? '3' : '4'}`"
      @click="
        if (notification) {
          read();
          $router.push(notification.link).catch(() => {});
        }
      "
    >
      <v-btn
        v-if="notification.state !== 'pending'"
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

      <div class="d-flex flex-column text-body-2 pr-5">
        <div class="text-caption mx-1 mt-1 font-italic grey--text">
          <v-icon 
          v-if="!notification.read" 
          size="10px" 
          color="red darken-2">
            circle
          </v-icon>
          {{ notification.requested_at }}
        </div>
        <span class="mx-1" v-html="notification.message" />
        <div v-if="notification.state == 'pending'" class="ma-1">
          <v-btn
            small
            text
            color="green"
            @click.native.stop="confirm"
            :disabled="loading_choice"
          >
            <!-- TOTRANSLATE -->
            {{$t('accept')}}
          </v-btn>
          <v-btn
            small
            text
            color="red darken-2"
            @click.native.stop="decline"
            :disabled="loading_choice"
          >
            <!-- TOTRANSLATE -->
            {{$t('decline')}}
          </v-btn>
        </div>
        <div
          v-else
          class="mx-1 mb-1 text-caption"
          :class="
            notification.state == 'confirmed' ? 'green--text' : 'red--text'
          "
        >
          {{ $t("notification.link.state." + notification.state) }}
        </div>
      </div>
    </div>
  </v-hover>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { useActions, useMutations } from "vuex-composition-helpers";
import NotificationModel from "@/ts/models/notificationClass";

export default defineComponent({
  name: "LinkNotification",

  components: {},

  props: {
    notification: Object as () => NotificationModel
  },

  setup(props) {
    var loading_choice = ref(false);
    var loading_delete = ref(false);

    let namespace = props.notification!.requested_type;

    const { SEND_CONFIRM_LINK } = useActions({
      SEND_CONFIRM_LINK: namespace + "/SEND_CONFIRM_LINK"
    } as any);
    const { SEND_DECLINE_LINK } = useActions({
      SEND_DECLINE_LINK: namespace + "/SEND_DECLINE_LINK"
    } as any);
    const { pushNotification } = useMutations({
      pushNotification: "notification/pushNotification"
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
      SEND_CONFIRM_LINK({requesting:props.notification!.requesting, requested:props.notification!.requested})
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
      SEND_DECLINE_LINK({requesting:props.notification!.requesting, requested:props.notification!.requested})
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

    const deleteNotification = () => {
      SEND_NOTIFICATION_DELETION(props.notification!.id);
    };

    return {
      confirm,
      decline,
      loading_choice,
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
