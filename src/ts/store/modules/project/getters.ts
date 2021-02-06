import { GetterTree } from "vuex";
import { ProjectState } from "./types";
import { RootState } from "@/ts/store/types";
import ProjectModel from "@/ts/models/projectClass";

export const getters: GetterTree<ProjectState, RootState> = {
  projects(state): Array<ProjectModel> {
    return state.projects;
  }
};
