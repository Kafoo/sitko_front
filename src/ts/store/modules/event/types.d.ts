export interface EventState {
  events?: Array;
  fetched: {
    place_events: Array<number>;
    all_events?:number
  };
}
