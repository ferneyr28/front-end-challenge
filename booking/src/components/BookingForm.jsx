import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const BookingForm = ({ setBookingList, bookingList }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [numberPassenger, setNumberPassenger] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const resetFields = () => {
    setOrigin("");
    setDestination("");
    setNumberPassenger("");
    setDate("");
    setTime("");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      [origin, destination, numberPassenger.toString(), date, time].includes("")
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill out all required fields.",
      });
      return;
    }
    const bookingActual = {
      id: uuidv4(),
      origin,
      destination,
      numberPassenger,
      date,
      time,
    };

    setBookingList([...bookingList, bookingActual]);
    Swal.fire("Success", "Booking created  ", "success");
    resetFields();
  };

  return (
    <Box w="40%" p={"14"} borderRadius={"15px"} boxShadow={"2xl"}>
      <Heading as="h2" size="2xl" mb={5}>
        Create Booking
      </Heading>
      <form onSubmit={handleOnSubmit} id="create-booking">
        <FormControl isRequired={origin.length == 0 ? true : false}>
          <FormLabel>Origin</FormLabel>
          <Input
            onChange={(e) => setOrigin(e.target.value)}
            value={origin}
            size={"md"}
          />
        </FormControl>
        <FormControl isRequired={destination.length == 0 ? true : false}>
          <FormLabel>Destination</FormLabel>
          <Input
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
          />
        </FormControl>
        <FormControl isRequired={numberPassenger.length == 0 ? true : false}>
          <FormLabel>Number of passenger:</FormLabel>
          <Input
            onChange={(e) => setNumberPassenger(e.target.value)}
            value={numberPassenger}
            type="number"
          />
        </FormControl>
        <FormControl isRequired={date.length == 0 ? true : false}>
          <FormLabel>Date</FormLabel>
          <Input
            type={"date"}
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </FormControl>
        <FormControl isRequired={time.length == 0 ? true : false}>
          <FormLabel>Time</FormLabel>
          <Input
            type={"time"}
            onChange={(e) => setTime(e.target.value)}
            value={time}
            step="3600"
          />
        </FormControl>

        <FormControl pt={5}>
          <Button type="submit" colorScheme="blue" variant="solid">
            Create
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default BookingForm;
