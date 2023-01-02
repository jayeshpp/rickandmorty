export const listing = {
  getCharacters: (state) => state.listingReducer.characters,
  getInfo: (state) => state.listingReducer.info,
  getLoading: (state) => state.listingReducer.loading,
  getError: (state) => state.listingReducer.error,
  getErrorMessage: (state) => state.listingReducer.errorMessage,
  getFilters: (state) => state.listingReducer.filters,
};
