import axios from "axios";
import i18n from "@/ts/plugins/i18n.js";
import { capitalize } from "@/ts/functions/vueFilters";
import NotificationModel from "@/ts/models/notificationClass";

export function _SEND_LINK_REQUEST(
  { commit }: any,
  requested: any,
  requested_type: string
) {
  return axios
    .put(
      process.env.VUE_APP_API_URL +
        "link/request/" +
        requested_type +
        "/" +
        requested.id
    )
    
    .then(response => {
      requested.link = "pending";
      commit("push" + capitalize(requested_type), requested);
      commit(
        "app/setAlert",
        { type: "success", msg: i18n.t("Link request sent") },
        { root: true }
      );
    });
}

export function _SEND_CANCEL_LINK_REQUEST(
  { commit }: any,
  requested: any,
  requested_type: string
) {
  return axios
    .put(
      process.env.VUE_APP_API_URL +
        "link/cancel/" +
        requested_type +
        "/" +
        requested.id
    )
    .then(response => {
      requested.link = false;
      commit("push" + capitalize(requested_type), requested);
      commit(
        "app/setAlert",
        { type: "success", msg: i18n.t("Request canceled") },
        { root: true }
      );
    });
}

export function _SEND_UNLINK_REQUEST(
  { commit }: any,
  requested: any,
  requested_type: string
) {
  return axios
    .put(
      process.env.VUE_APP_API_URL +
        "link/unlink/" +
        requested_type +
        "/" +
        requested.id
    )
    .then(response => {
      requested.link = false;
      commit("push" + capitalize(requested_type), requested);
      commit(
        "app/setAlert",
        { type: "success", msg: i18n.t("Link canceled") },
        { root: true }
      );
    });
}

export function _SEND_CONFIRM_LINK(
  { commit }: any,
  requested: any,
  requested_type: string
) {
  return axios
    .put(
      process.env.VUE_APP_API_URL +
        "link/confirm/" +
        requested_type +
        "/" +
        requested.id
    )
    .then(response => {
      requested.link = "confirmed";
      commit("push" + capitalize(requested_type), requested);
      commit(
        "app/setAlert",
        { type: "success", msg: i18n.t("Link confirmed") },
        { root: true }
      );
      commit(
        "notification/updateNotification", new NotificationModel(response.data.notification), { root: true });
    });
}

export function _SEND_DECLINE_LINK(
  { commit }: any,
  requested: any,
  requested_type: string
) {
  return axios
    .put(
      process.env.VUE_APP_API_URL +
        "link/decline/" +
        requested_type +
        "/" +
        requested.id
    )
    .then(response => {
      requested.link = false;
      commit("push" + capitalize(requested_type), requested);
      commit(
        "app/setAlert",
        { type: "success", msg: i18n.t("Link declined") },
        { root: true }
      );
      commit(
        "notification/updateNotification", new NotificationModel(response.data.notification), { root: true });
    });
}
