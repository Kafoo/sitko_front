import { onMounted, ref } from "@vue/composition-api";
import { useGetters, useActions } from "vuex-composition-helpers";
import store from "@/ts/store";
import PlaceModel from "@/ts/models/placeClass";
import ProjectModel from "@/ts/models/projectClass";
import EventModel from "@/ts/models/eventClass";

const classes:any = { 
  'project' : ProjectModel, 
  'place' : PlaceModel,
  'event' : EventModel 
};

  function dynamicClass (name:string) {
  return classes[name];
}

export default function useEntityGetter(entity_id: number, entity_name:string, copy = false) {

  const entity_model = dynamicClass(entity_name)
  const action_name = 'GET_' + entity_name.toUpperCase()
  var loading = ref(false);
  var entity = ref(new entity_model())

  const {GET_ENTITY} = useActions(store, {
    GET_ENTITY: entity_name + "/" + action_name
  } as any);
  const { entities } = useGetters(store, { entities: entity_name + "/" + entity_name + "s" } as any);

  onMounted(() => {
    loading.value = true;
    GET_ENTITY(entity_id).then(() => {
      loading.value = false;
      if (copy) {
        entity.value = new entity_model(entities.value.find((x: typeof entity_model) => x.id === entity_id))
      }else{
        entity.value = entities.value.find((x: typeof entity_model) => x.id === entity_id)
      }
    });
  });

  return {
    loading,
    entity
  };
}
