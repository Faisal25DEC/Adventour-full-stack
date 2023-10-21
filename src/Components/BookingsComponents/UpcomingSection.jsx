import "./BookingStyles.css";
import React, { useEffect } from "react";
import { DestinationCards } from "../Shared/DestinationCards";
import { useDispatch, useSelector } from "react-redux";
import { userReducer } from "./../../Redux/userReducer/userReducer";
import { getBookings } from "../../Redux/bookingReducer/bookingActions";

export const UpcomingSection = () => {
  const { userBookings } = useSelector((state) => state.bookingReducer);
  const dispatch = useDispatch();
  console.log(userBookings);

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    dispatch(getBookings(token));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {userBookings?.map((product) => {
          if (
            product.id !== "adventour@test" &&
            product.bookedTill >= Date.now()
          ) {
            return (
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <DestinationCards
                  onProduct={false}
                  product={product}
                  onBookings={true}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
