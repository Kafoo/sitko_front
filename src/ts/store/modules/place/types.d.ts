import PlaceModel from "@/ts/models/placeClass";
import ImageModel from "@/ts/models/imageClass";

export interface PlaceState {
  places?: Array;
  place?: PlaceModel;
  loading_places?: Boolean;
  loading_place?: Boolean;
}
