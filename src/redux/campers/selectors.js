


export const selectItems = (state) =>
    state.campers.items; 
export const selectPagination = (
  state,
) => state.campers.pagination; 

export const selectTotal = (state) =>
  state.campers.total; 

export const selectCampersInfo = (
  state,
) => state.campers.campersInfo; 

export const selectLocation = (state) =>
    state.campers.filters.location; 

export const selectFilters = (state) =>
  state.campers.filters; 

export const selectEquipment = (
  state,
) => state.campers.filters.equipment; 

export const selectType = (state) =>
    state.campers.filters.form; 

export const selectIsRefreshing = (
  state,
) => state.campers.isRefreshing;


export const selectError = (state) =>
  state.campers.error;