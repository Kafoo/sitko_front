export interface ProjectState {
  projects: Array<ProjectModel>;
  fetched: {
    place_projects: Array<number>;
    all_projects?:number
  };
}
