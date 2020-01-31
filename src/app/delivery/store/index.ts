import {
  setDeliveryDate,
  setDeliveryPlace,
  setDeliveryTime,
  setPickupDate,
  setPickupPlace,
  setPickupTime,
  setTypeOfGoods,
  setVolumeType,
  setVolumeQty,
  setLength,
  setWidth,
  setHeight,
  setWeight
} from "./actions";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import NewDeliveryState from "./NewDeliveryState";

const newDeliveryReducer = createReducer(
  { new: new NewDeliveryState() },
  {
    [setDeliveryDate.type]: (state, action: PayloadAction<Date>) => {
      state.new.delivery.date = action.payload;
      return { ...state };
    },
    [setDeliveryPlace.type]: (state, action: PayloadAction<any>) => {
      state.new.delivery.place = action.payload;
      return { ...state };
    },
    [setDeliveryTime.type]: (state, action: PayloadAction<string[]>) => {
      state.new.delivery.time = action.payload;
      return { ...state };
    },
    [setPickupDate.type]: (state, action: PayloadAction<Date>) => {
      state.new.pickup.date = action.payload;
      return { ...state };
    },
    [setPickupPlace.type]: (state, action: PayloadAction<any>) => {
      state.new.pickup.place = action.payload;
      return { ...state };
    },
    [setPickupTime.type]: (state, action: PayloadAction<string[]>) => {
      state.new.pickup.time = action.payload;
      return { ...state };
    },
    [setTypeOfGoods.type]: (state, action: PayloadAction<string>) => {
      state.new.details.typeOfGoods = action.payload;
      return { ...state };
    },
    [setVolumeType.type]: (state, action: PayloadAction<string>) => {
      state.new.details.volumeType = action.payload;
      return { ...state };
    },
    [setVolumeQty.type]: (state, action: PayloadAction<number>) => {
      state.new.details.volumeQty = Number(action.payload);
      return { ...state };
    },
    [setLength.type]: (state, action: PayloadAction<number>) => {
      state.new.details.length = Number(action.payload);
      return { ...state };
    },
    [setWidth.type]: (state, action: PayloadAction<number>) => {
      state.new.details.width = Number(action.payload);
      return { ...state };
    },
    [setHeight.type]: (state, action: PayloadAction<number>) => {
      state.new.details.height = Number(action.payload);
      return { ...state };
    },
    [setWeight.type]: (state, action: PayloadAction<number>) => {
      state.new.details.weight = Number(action.payload);
      return { ...state };
    }
  }
);

export default newDeliveryReducer;
export type DeliveryState = ReturnType<typeof newDeliveryReducer>;
