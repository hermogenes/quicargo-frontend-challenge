import { createAction } from "@reduxjs/toolkit";
import {
  SET_DELIVERY_PLACE,
  SET_DELIVERY_DATE,
  SET_DELIVERY_TIME,
  SET_PICKUP_PLACE,
  SET_PICKUP_DATE,
  SET_PICKUP_TIME,
  SET_TYPE_OF_GOODS,
  SET_VOLUME_TYPE,
  SET_VOLUME_QTY,
  SET_LENGTH,
  SET_WIDTH,
  SET_HEIGHT,
  SET_WEIGHT
} from "./action-types";

export const setDeliveryPlace = createAction<any>(SET_DELIVERY_PLACE);
export const setDeliveryDate = createAction<Date>(SET_DELIVERY_DATE);
export const setDeliveryTime = createAction<string[]>(SET_DELIVERY_TIME);
export const setPickupPlace = createAction<any>(SET_PICKUP_PLACE);
export const setPickupDate = createAction<Date>(SET_PICKUP_DATE);
export const setPickupTime = createAction<string[]>(SET_PICKUP_TIME);
export const setTypeOfGoods = createAction<string>(SET_TYPE_OF_GOODS);
export const setVolumeType = createAction<string>(SET_VOLUME_TYPE);
export const setVolumeQty = createAction<string>(SET_VOLUME_QTY);
export const setLength = createAction<number>(SET_LENGTH);
export const setWidth = createAction<number>(SET_WIDTH);
export const setHeight = createAction<number>(SET_HEIGHT);
export const setWeight = createAction<number>(SET_WEIGHT);
