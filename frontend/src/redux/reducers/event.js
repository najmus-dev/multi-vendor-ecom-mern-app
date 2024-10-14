import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    // event create actions
    .addCase('eventCreateRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('eventCreateSuccess', (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    })
    .addCase('eventCreateFail', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })

    // get all events of shop
    .addCase('getAlleventsShopRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAlleventsShopSuccess', (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    })
    .addCase('getAlleventsShopFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // delete event of a shop
    .addCase('deleteeventRequest', (state) => {
      state.isLoading = true;
    })
    // .addCase('deleteeventSuccess', (state, action) => {
    //   state.isLoading = false;
    //   state.message = action.payload;
    // })
    .addCase('deleteeventSuccess', (state, action) => {
      console.log("Delete event action received:", action.payload); // Log the payload
      state.isLoading = false;
      state.message = action.payload;
      // Update events to remove the deleted event
      state.events = state.events.filter(event => event._id !== action.payload._id);
    })
    .addCase('deleteeventFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // get all events
    .addCase('getAlleventsRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAlleventsSuccess', (state, action) => {
      state.isLoading = false;
      state.allEvents = action.payload;
    })
    .addCase('getAlleventsFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // clear errors
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
