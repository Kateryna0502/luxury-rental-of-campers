import { createAction } from "@reduxjs/toolkit";

export const addLocation = createAction(
  "campers/addLocation",
);

export const addEquipment =
  createAction("campers/addEquipment");

export const addType = createAction(
  "campers/addType",
);

export const addQueryFilters =
  createAction(
    "campers/addQueryFilters",
    );
  
export const resetItems = createAction(
  "campers/resetItems",
);

export const setPage = createAction(
  "campers/setPage",
);