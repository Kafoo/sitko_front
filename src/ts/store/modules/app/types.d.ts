export interface AppAlert {
  type: string;
  msg: string;
  info?: string;
}

export interface AppState {
  app_alert?: AppAlert;
  app_data: Object;
  confirmed_guest: boolean
  errors?: Array;
  windowWidth: number;
  locale: String;
  routes: Array;
}
