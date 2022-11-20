import {
  Button,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const PriceCardItem = () => {
  return (
    <Flex flexDirection="column" border="2px solid black" width="50%" alignItems="center" gap={5} padding="2rem" borderRadius={10}>
      <Heading>Wedding</Heading>
      <Divider />
      <List spacing={3} display="flex" flexDirection="column" justifyContent="space-around" alignItems="center">
        <ListItem fontSize="2rem" fontWeight={500}>
          $100
        </ListItem>
        <ListItem>
          Assumenda, quia temporibus 
        </ListItem>
        <ListItem>   
          Quidem, ipsam illum quis sed
        </ListItem>
        <ListItem>
          Quidem, ipsam illum quis 
        </ListItem>
        <ListItem>
          Quidem, ipsam illum quis 
        </ListItem>
      </List>
      <Button> Book Now</Button>
    </Flex>
  );
};

export default PriceCardItem;
