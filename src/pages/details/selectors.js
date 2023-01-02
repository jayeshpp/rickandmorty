export const details = {
  getCharacter: (state) => state.detailsReducer.data,
  getLoading: (state) => state.detailsReducer.loading,
  getError: (state) => state.detailsReducer.error,
  getErrorMessage: (state) => state.detailsReducer.errorMessage,
};
