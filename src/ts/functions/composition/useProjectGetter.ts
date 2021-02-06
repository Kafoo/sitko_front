import useEntityGetter from '@use/useEntityGetter'

export default function usePlaceGetter(project_id: number, copy = false) {

  var { loading, entity } = useEntityGetter(project_id, 'project', copy)

  return {
    loading,
    project:entity
  };
}