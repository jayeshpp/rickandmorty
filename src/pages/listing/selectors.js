export const character = {
  getCharacters: (state) => state.listingReducer.characters,
  getInfo: (state) => state.listingReducer.info,
  getLoading: (state) => state.listingReducer.loading,
};
