import { GetterTree } from "vuex";
import { NoteState } from "./types";
import { RootState } from "@/ts/store/types";
import NoteModel from "@/ts/models/noteClass";

export const getters: GetterTree<NoteState, RootState> = {
  notes(state): Array<NoteModel> {
    return state.notes;
  }

};
