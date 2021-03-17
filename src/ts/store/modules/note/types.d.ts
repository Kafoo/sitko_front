export interface NoteState {
  notes: Array<NoteModel>;
  fetched: {
    place_notes: Array<number>;
  };
}
