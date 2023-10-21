import axios from "axios";
import {
  GET_BOOKINGS,
  SET_BOOKING_DETAILS,
  SET_DATE_DETAILS,
  SET_GUESTS,
  SET_PRICE,
} from "./bookingTypes";

const createAction = (type, payload) => {
  return { type, payload };
};
const baseUrl = `http://localhost:8080`;

export const getBookings = (token) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/bookings`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);

    dispatch(createAction(GET_BOOKINGS, res.data));
  } catch (err) {
    console.log(err);
  }
};

export const addBooking = (token, booking) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/bookings/post`, booking, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    dispatch(getBookings(token));
  } catch (err) {
    console.log(err);
  }
};

export const setGuests = (payload) => {
  return createAction(SET_GUESTS, payload);
};

export const setPrice = (payload) => {
  return createAction(SET_PRICE, payload);
};
export const setDateDetails = (payload) => {
  return createAction(SET_DATE_DETAILS, payload);
};

export const setBookingDetails = (payload) => {
  return createAction(SET_BOOKING_DETAILS, payload);
};
