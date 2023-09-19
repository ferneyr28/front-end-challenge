import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";

const DetailBooking = ({ bookingList, setDateSelected, dateSelected }) => {
  const bookingSelectedDate = (arr) => {
    return arr.filter((item) => item.date === dateSelected);
  };

  return (
    <Box
      p={"14"}
      h={"2xl"}
      borderRadius={"15px"}
      boxShadow={"2xl"}
      border={"0.2px"}
    >
      <Heading as="h2" size="2xl">
        Booking Detail
      </Heading>
      <Table p={"7"} variant={"striped"}>
        <Thead>
          <Tr>
            <Th>Origin</Th>
            <Th>Destination</Th>
            <Th>Number of passenger</Th>
            <Th>date</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bookingSelectedDate(bookingList).map((item) => (
            <Tr key={item.id}>
              <Td>{item.origin}</Td>
              <Td>{item.destination}</Td>
              <Td>{item.numberPassenger}</Td>
              <Td>{item.date}</Td>
              <Td>{item.time}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button mt={5} colorScheme="red" onClick={() => setDateSelected("")}>
        Back
      </Button>
    </Box>
  );
};

export default DetailBooking;
