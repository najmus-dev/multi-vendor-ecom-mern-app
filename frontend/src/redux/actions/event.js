import axios from "axios";
import { server } from "../../server";

// create event
export const createevent = (data) => async (dispatch) => {
  try {
    dispatch({ type: "eventCreateRequest" });

    const { data: responseData } = await axios.post(`${server}/event/create-event`, data);
    dispatch({
      type: "eventCreateSuccess",
      payload: responseData.event, // Use correct destructuring
    });
  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

// get all events of a shop
export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getAlleventsShopRequest" });

    const { data } = await axios.get(`${server}/event/get-all-events/${id}`);
    dispatch({
      type: "getAlleventsShopSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAlleventsShopFailed",
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    console.log("Dispatching deleteeventRequest for ID:", id); // Log ID before the request
    dispatch({ type: "deleteeventRequest" });

    const { data } = await axios.delete(`${server}/event/delete-shop-event/${id}`, {
      withCredentials: true,
    });

    console.log("Delete event success:", data); // Log successful response
    dispatch({
      type: "deleteeventSuccess",
      payload: data.message,
    });
  } catch (error) {
    console.error("Delete event failed:", error); // Log the error
    dispatch({
      type: "deleteeventFailed",
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};


// get all events
export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({ type: "getAlleventsRequest" });

    const { data } = await axios.get(`${server}/event/get-all-events`);
    dispatch({
      type: "getAlleventsSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAlleventsFailed",
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
