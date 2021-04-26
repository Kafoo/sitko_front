import PlaceModel from "@/ts/models/placeClass";
import ImageModel from "@/ts/models/imageClass";

export interface PlaceState {
  places?: Array;
  place?: PlaceModel;
  fetched: {
    all_places?: number;
    linked_places?: number;
  };
}
