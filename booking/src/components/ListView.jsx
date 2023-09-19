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
import React from "react";

const ListView = ({ bookingList, setDateSelected }) => {
  const dateList = (arr) => {
    const extractDate = arr.map((item) => item.date);
    return [...new Set(extractDate)];
  };

  const handleOnClick = (date) => {
    setDateSelected(date);
  };

  return (
    <Box
      w={"30%"}
      h={"2xl"}
      p={"14"}
      borderRadius={"15px"}
      boxShadow={"2xl"}
      border={"0.2px"}
    >
      <Heading as="h2" size="2xl">
        Booking list
      </Heading>
      <Table variant={"striped"}>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dateList(bookingList).map((item) => (
            <Tr key={item}>
              <Td>{item}</Td>
              <Td>
                <Button
                  colorScheme="whatsapp"
                  size={"xs"}
                  onClick={() => handleOnClick(item)}
                >
                  Detail
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ListView;
