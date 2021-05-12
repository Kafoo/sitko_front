import { onMounted, ref } from "@vue/composition-api";
import { useActions } from "vuex-composition-helpers";

/**
 * Gets entities from vuex actions with loading handling
 *
 * @param {String}   action_name Action from vuex : "namespace/action_name"
 * @param {Array}   [params] Name of the array of entity we are fetching (favorite_projects e.g.)
 * @param {Boolean}  [copy=false] Do we need a copy of the entity (for editing)
 *
 * @return {Boolean, PlaceModel}
 */
export default function useFetcher(
  action_name: String,
  params?: any,
  copy?: Boolean
) {
  const { ACTION } = useActions({
    ACTION: action_name
  } as any);
  var loading = ref(true);

  var entity = ref();

  onMounted(() => {
    loading.value = true;

    ACTION(params)
      .then((response: any) => {
        if (copy) {
          entity.value = JSON.parse(JSON.stringify(response));
        } else {
          entity.value = response;
        }

        loading.value = false;
      })
      .catch(() => {
        loading.value = false;
      });
  });

  return {
    loading,
    entity
  };
}
