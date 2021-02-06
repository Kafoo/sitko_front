export interface TagState {
  tags?: Array;
  categories?: Array;
  fetched: {
    all_tags?: number;
    categories?: number;
  };
}
