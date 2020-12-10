export interface AppAlert {
  type:string
  message:string
}

export interface AppState {
  app_alert?: AppAlert
  errors?: Array
  windowWidth: number
}

