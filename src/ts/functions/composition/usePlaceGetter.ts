import useEntityGetter from '@use/useEntityGetter'

export default function usePlaceGetter(place_id: number, copy = false) {

  var { loading, entity } = useEntityGetter(place_id, 'place', copy)

  return {
    loading,
    place:entity
  };
}
