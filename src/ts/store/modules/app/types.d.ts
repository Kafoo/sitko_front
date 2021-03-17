export interface AppAlert {
  type: string;
  msg: string;
  info?: string;
}

export interface AppState {
  app_alert?: AppAlert;
  errors?: Array;
  windowWidth: number;
  locale: String;
  routes: Array;
}
