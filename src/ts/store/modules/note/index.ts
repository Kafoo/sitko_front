import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { NoteState } from "./types";
import { RootState } from "@/ts/store/types";
import NoteModel from "@/ts/models/noteClass";

export const state: NoteState = {
  notes: Array<NoteModel>(),
  fetched: {
    place_notes: []
  }
};

const namespaced: boolean = true;

export const note: Module<NoteState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
