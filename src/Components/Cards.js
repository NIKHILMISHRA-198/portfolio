import { Box, Text } from "native-base";
import React from "react";

const Cards = {};

function Cards(props) {
  return (
    <Box>
      <Text p={4} fontSize={"xl"} bold>
        Trying Cards Layout
      </Text>
      <Box>
        <Box boxSize={"lg"} bgColor={"amber.500"} shadow={"8"}></Box>
      </Box>
    </Box>
  );
}

export default Cards;
