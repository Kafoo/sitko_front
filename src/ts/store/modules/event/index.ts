import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { EventState } from "./types";
import { RootState } from "@/ts/store/types";
import EventModel from "@/ts/models/eventClass";

export const state: EventState = {
  events: Array<EventModel>(),
  fetched: {
    place_events: [],
    all_events: undefined,
    inc_events: undefined
  }
};

const namespaced: boolean = true;

export const event: Module<EventState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
