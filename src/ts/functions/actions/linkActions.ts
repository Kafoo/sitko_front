import axios from "axios";
import i18n from "@/ts/plugins/i18n.js";
import { capitalize } from "@/ts/functions/vueFilters";
import NotificationModel from "@/ts/models/notificationClass";


export function _SEND_LINK_REQUEST(
  { commit }: any,
  payload: any,
) {
  return axios
    .put(
      process.env.VUE_APP_API_URL +
        "link/request",
        payload
    )
    
    .then(response => {
      payload.link = "requesting";
      commit("push" + capitalize(payload.essence), payload);
      commit(
        "app/setAlert",
        { type: "success", msg: i18n.t("Link request sent") },
        { root: true }
      );
    });
}

export function _SEND_CANCEL_LINK_REQUEST(
  { commit }: any,
  {requesting, requested}:any
) {
  return axios
    .put(
      process.env.VUE_APP_API_URL +
        "link/cancel",
        {requesting, requested}
    )
    .then(response => {
      requested.link = false;
      commit("push" + capitalize(requested.essence), requested);
      commit(
        "app/setAlert",
        { type: "success", msg: i18n.t("Request canceled") },
        { root: true }
      );
    });
}

export function _SEND_UNLINK_REQUEST(
  { commit }: any,
  payload: any,
) {
  return axios
    .put(
      process.env.VUE_APP_API_URL +
        "link/unlink",
        payload
    )
    .then(response => {
      payload.link = false;
      commit("push" + capitalize(payload.essence), payload);
      commit(
        "app/setAlert",
        { type: "success", msg: i18n.t("Link canceled") },
        { root: true }
      );
    });
}

export function _SEND_CONFIRM_LINK(
  { commit }: any,
  {requesting, requested}:any
) {
  return axios
    .put(
      process.env.VUE_APP_API_URL +
        "link/confirm",
        {requesting, requested}
    )
    .then(response => {
      requesting.link = "confirmed";
      commit("push" + capitalize(requesting.essence), requesting);
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
  {requesting, requested}:any
) {
  return axios
    .put(
      process.env.VUE_APP_API_URL +
      "link/decline",
      {requesting, requested}
    )
    .then(response => {
      requesting.link = false;
      commit("push" + capitalize(requesting.essence), requesting);
      commit(
        "app/setAlert",
        { type: "success", msg: i18n.t("Link declined") },
        { root: true }
      );
      commit(
        "notification/updateNotification", new NotificationModel(response.data.notification), { root: true });
    });
}
