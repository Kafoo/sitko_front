import useEntityGetter from '@use/useEntityGetter'

export default function useEventGetter(event_id: number, copy = false) {

  var { loading, entity } = useEntityGetter(event_id, 'event', copy)

  return {
    loading,
    event:entity
  };
}