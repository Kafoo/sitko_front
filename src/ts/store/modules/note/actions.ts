import { ActionTree } from "vuex";
import { NoteState } from "./types";
import { RootState } from "@/ts/store/types";
import NoteModel from "@/ts/models/noteClass";
import axios from "axios";

export const actions: ActionTree<NoteState, RootState> = {

  GET_NOTE({ commit, state }, note_id) {

    var note = state.notes.find((x: NoteModel) => x.id === note_id)
    
    if (note) {
      return note;
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "note/" + note_id)
        .then(response => {
          note = new NoteModel(response.data)
          commit("pushNote", note);
          return note
        })
        .catch(() => {});
    }
  },


  GET_NOTES_BY_PLACE({ state, commit }, place_id) {

    if (state.fetched.place_notes[place_id]) {
      return state.notes.filter((x:NoteModel) => x.place_id == place_id);
    } else {
      return axios
        .get(process.env.VUE_APP_API_URL + "place/" + place_id + "/note")
        .then(response => {
          state.fetched.place_notes[place_id] = Date.now();
          for (const note of response.data) {
            commit("pushNote", new NoteModel(note));
          }
          return state.notes.filter((x:NoteModel) => x.place_id == place_id);
        })
        .catch(() => {});
    }
  },

  SEND_NOTE_CREATION({ commit }, note) {
    return axios
      .post(process.env.VUE_APP_API_URL + "note", note)
      .then(response => {
        var newNote = new NoteModel(response.data.note);
        commit("pushNote", newNote);
      });
  },

  SEND_NOTE_EDITION({ commit }, note) {
    return axios
      .put(process.env.VUE_APP_API_URL + "note/" + note.id, note)
      .then(response => {
        commit("pushNote", new NoteModel(response.data.note));
      });
  },

  SEND_NOTE_DELETION({ commit }, note_id) {
    //Delete call to API
    return axios
      .delete(process.env.VUE_APP_API_URL + "note/" + note_id)
      .then(response => {
        commit("removeNote", note_id);
      });
  }
};
