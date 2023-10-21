import "./App.css";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import AllRoutes from "./AllRoutes";
import { Footer } from "./Components/Shared/Footer";
import { NavbarShared } from "./Components/Shared/Navbar";
import { Home } from "./Pages/Home";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  getUserDocumentFromAuth,
  onAuthStateChangedListener,
  updateBookings,
} from "./Utils/firebase/firebase";
import { getUserDetails, loginUser } from "./Redux/userReducer/userActions";
import { useDispatch, useSelector } from "react-redux";
import { userReducer } from "./Redux/userReducer/userReducer";
import { setWindowClick } from "./Redux/windowReducer/windowActions";
import { LOGOUT_USER } from "./Redux/userReducer/userTypes";
import { getBookings } from "./Redux/bookingReducer/bookingActions";

function App() {
  const { isAuth, userDetails } = useSelector((state) => state.userReducer);
  const { userBookings } = useSelector((state) => state.bookingReducer);
  const dispatch = useDispatch();

  const handleWindowClicked = () => {
    dispatch(setWindowClick());
  };

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    if (token) {
      dispatch(getUserDetails(token));
      dispatch(getBookings(token));
      console.log(userDetails);
    } else {
      dispatch({ type: LOGOUT_USER });
    }
  }, [isAuth]);

  return (
    <div>
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <NavbarShared />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
