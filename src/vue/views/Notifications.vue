<template>
  <primary-content-body>

    <page-title class="my-4" title="Notifications"/>

    <link-notification
      v-for="notification in activeNotifications"
      :key="notification.id"
      :notification="notification"
    />

    <v-pagination
      v-model="page"
      :length="pagesCount"
    ></v-pagination>

  </primary-content-body>
</template>

<script lang="ts">

import { defineComponent, computed, ref } from "@vue/composition-api"
import NotificationModel from '@/ts/models/notificationClass';
import useFetcher from '@/ts/functions/composition/useFetcher';
import LinkNotification from '../components/molecules/notification/LinkNotification.vue';



export default defineComponent({

  name : "Notifications",

  components:{
    LinkNotification
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