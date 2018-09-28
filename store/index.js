export const state = () => ({
  loading: false,
});

export const mutations = {
  startLoading (state) {
    state.loading = true;
  },
  endLoading (state) {
    state.loading = false;
  }
};
