import { useEffect, useState } from "react";

import "./App.css";
import BookingForm from "./components/BookingForm";
import ListView from "./components/ListView";
import DetailBooking from "./components/DetailBooking";
import { Flex } from "@chakra-ui/react";
const BOOKING_LOCALSTORAGE_KEY = "booking";

function BookingApp() {
  const initialBooking = JSON.parse(
    localStorage.getItem(BOOKING_LOCALSTORAGE_KEY) ?? "[]"
  );
  const [bookingList, setBookingList] = useState(initialBooking);
  const [dateSelected, setDateSelected] = useState("");

  useEffect(() => {
    localStorage.setItem(BOOKING_LOCALSTORAGE_KEY, JSON.stringify(bookingList));
  }, [bookingList]);

  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        borderColor={"GrayText"}
        gap={"20px"}
      >
        <BookingForm
          setBookingList={setBookingList}
          bookingList={bookingList}
        />

        {dateSelected.length > 0 ? (
          <DetailBooking
            bookingList={bookingList}
            setDateSelected={setDateSelected}
            dateSelected={dateSelected}
          />
        ) : (
          <ListView
            bookingList={bookingList}
            setDateSelected={setDateSelected}
          />
        )}
      </Flex>
    </>
  );
}

export default BookingApp;
