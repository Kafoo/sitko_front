import { MutationTree } from "vuex";
import { ProjectState } from "./types";
import ProjectModel from "@/ts/models/projectClass";

export const mutations: MutationTree<ProjectState> = {
  setProjects(state, payload:Array<ProjectModel>) {
    state.projects = payload
  },

  removeProject(state, index:number) {
    state.projects.splice(index, 1);
  },

  insertProject(state, {project, index} ) {
    state.projects.splice(index, 0, project);
  },

  pushProject(state, project:ProjectModel) {
    state.projects.push(project);
  },

  editProject(state, project:ProjectModel) {
    let oldProject = state.projects.find((x:ProjectModel) => x.id === project.id);
    let oldProjectIndex = state.projects.indexOf(oldProject);
    state.projects.splice(oldProjectIndex, 1, project);
  },

  setLoading(state) {
    state.loading_projects = true;
  },

  removeLoading(state) {
    state.loading_projects = false;
  },

  closeExpands(state, id:number | undefined) {
    state.projects.forEach((project:ProjectModel) => {
      if (project.id !== id) {
        project.expanded = false;
      }
    });
  },

  toogleExpand(state, id:number) {
    var project = state.projects.find((x:ProjectModel) => x.id == id);
    project.expanded = !project.expanded;
  },

  setFirstFetch(state, value) {
    state.firstFetch = value;
  }
};
