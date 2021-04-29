<template>
  <primary-content-body>

    <page-title>{{$t('notifications') | capitalize}}</page-title>

    <div v-if="loading">
      <loading-circle small></loading-circle>
    </div>

    <div v-else-if="!notifications.length" class="text-center">
      -- {{$t('no notification') | capitalize}} --
    </div>

    <div v-else
     v-for="notification in activeNotifications"
     :key="notification.id">
      <link-notification
        v-if="notification.type == 'link_request'"
        :notification="notification"
      />
      <notification
        v-else
        :notification="notification"
      />

      <v-pagination
        v-model="page"
        :length="pagesCount"
        class="mt-3"
      ></v-pagination>
    </div>


  </primary-content-body>
</template>

<script lang="ts">

import { defineComponent, computed, ref } from "@vue/composition-api"
import NotificationModel from '@/ts/models/notificationClass';
import useFetcher from '@/ts/functions/composition/useFetcher';
import LinkNotification from '../components/molecules/notification/LinkNotification.vue';
import Notification from '../components/molecules/notification/Notification.vue';



export default defineComponent({

  name : "Notifications",

  components:{
    LinkNotification,
    Notification
  },

  setup() {

    var { entity:notifications, loading } = useFetcher("notification/GET_NOTIFICATIONS");

    var page = ref(1)

    const notificationsPerPage = 5

    var pagesCount = computed(()=>{
      if (notifications.value) {
        return Math.ceil(notifications.value.length/notificationsPerPage)
      } else {
        return 0
      }
    })

    var activeNotifications = computed(()=>{
    if (notifications.value) {
      return notifications.value.slice(page.value*notificationsPerPage - notificationsPerPage, page.value*notificationsPerPage)
    }
    })

    return{
      notifications,
      loading,
      activeNotifications,
      pagesCount,
      page
    }

  }
});
</script>