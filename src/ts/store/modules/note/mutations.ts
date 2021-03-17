import { MutationTree } from "vuex";
import { NoteState } from "./types";
import NoteModel from "@/ts/models/noteClass";

export const mutations: MutationTree<NoteState> = {
  setNotes(state, payload: Array<NoteModel>) {
    state.notes = payload;
  },

  pushNote(state, note: NoteModel) {
    var exists = state.notes.find((x: NoteModel) => x.id === note.id);
    if (exists) {
      //refresh
      const index = state.notes.indexOf(exists);
      state.notes.splice(index, 1, note);
    } else {
      //or push
      state.notes.push(note);
    }
  },

  removeNote(state, place_id: number) {
    var exists = state.notes.find((x: NoteModel) => x.id === place_id);
    if (exists) {
      const index = state.notes.indexOf(exists);
      state.notes.splice(index, 1);
    }
  }
};
