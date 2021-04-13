<template>
  <div>
    <v-menu rounded="lg" bottom left>
      <template v-slot:activator="{ on, attrs }">

        <v-btn
          v-bind="attrs"
          v-on="on"
          @click.native="showNotifications = true"
          fab
          icon
        >
          <v-icon>notifications_none</v-icon>
          <v-chip 
          v-if="!loading && newNotificationsCount !== 0"
          class="new-icon px-1 c-pointer"
          x-small
          color="red"
          text-color="white">
              {{newNotificationsCount}}
          </v-chip>
        </v-btn>
      </template>

      <v-list class="pa-0 ma-0">
        <div>
          <div
            class="d-flex justify-space-between pl-4 text-overline pt-1 green lighten-2"
          >
            <div>
              Notifications
            </div>
            <v-btn small icon class="mr-2" @click.native.stop="refresh">
              <v-icon small>autorenew</v-icon>
            </v-btn>
          </div>

          <div v-if="loading" style="height:180px">
            <loading-circle small app />
          </div>


          <div v-else-if="notifications && notifications.length">
            <link-notification
              v-for="notification in displayed_notifications"
              :key="notification.id"
              :notification="notification"
            />

            <v-btn 
            block 
            tile 
            class="grey lighten-2 text-overline"
            to="/notifications"
            >
              <v-icon 
              v-if="MoreNewNotifications" 
              class="mr-1"
              size="10px" 
              color="red darken-2">
                circle
              </v-icon>
              {{$t('more')}}
            </v-btn>
          </div>

          <div
            v-else
            class="font-italic grey--text d-flex justify-center align-center"
            style="height:180px"
          >
            <div>
              <!-- TOTRANSLATE -->
              pas de notification
            </div>
          </div>
        </div>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, Ref } from "@vue/composition-api";
import { useGetters, useActions } from 'vuex-composition-helpers';
import useFetcher from "@use/useFetcher";
import LinkNotification from "@c/molecules/notification/LinkNotification.vue";
import NotificationModel from "@/ts/models/notificationClass";

export default defineComponent({
  name: "Notifications",

  components: {
    LinkNotification
  },

  setup() {

    const { newNotificationsCount } =  useGetters({newNotificationsCount: 'notification/newNotificationsCount'} as any)

    var showNotifications = ref(false);

    var { entity: notifications, loading: loading } = useFetcher(
      "notification/GET_NOTIFICATIONS"
    );

    const { REFRESH } = useActions({
      REFRESH: "notification/GET_NOTIFICATIONS"
    } as any);

    const refresh = () => {
      loading.value = true;
      REFRESH({ reload: true }).then((response: any) => {
        loading.value = false;
        notifications.value = response;
      });
    };

    var displayed_notifications: Ref<Array<NotificationModel>> = computed(
      () => {
        if (notifications.value) {
          return notifications.value.slice(0, 5)
        } else {
          return []
        }
      }
    );

    var MoreNewNotifications: Ref<boolean> = computed(() => {
      if (notifications.value) {
        var MoreNews = notifications.value.slice(5).filter(
          (notification: NotificationModel) => !notification.read
        );
        return MoreNews.length?true:false;
      } else {
        return false
      }
    });


    return {
      showNotifications,
      newNotificationsCount,
      notifications,
      loading,
      refresh,
      displayed_notifications,
      MoreNewNotifications
    };
  }
});
</script>

<style scoped>
.v-menu__content {
  position: fixed;
  top: 55px !important;
  right: 15px !important;
  left: auto !important;
  width: 300px;
}

.new-icon {
  position: absolute;
  top: -9px;
  left: 27px;
}
</style>
