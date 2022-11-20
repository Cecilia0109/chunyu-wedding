import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navigationBar/Navbar";
import SocialMedias from "../components/navigationBar/SocialMedias";
import Image from "next/image";
import icon from "../public/icon.png";
import PriceCard from "../components/Pricing/PriceCard";

const Pricing = () => {
  return (
    <Flex flexDirection="column" max-width="100vw" alignItems="center">
      <Image src={icon} alt="icon" width={150} />
      <Navbar />
      <Heading marginY={5}>PRICING</Heading>
      <Text fontWeight={600}>Do you want to book a fitting?</Text>
      <Divider marginBottom={10}/>
      <Text maxWidth="65vw">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
        accusamus eveniet natus molestiae doloribus accusantium facere possimus
        saepe consequuntur temporibus ea dolorum iusto quod qui optio soluta
        vitae. Nam, nulla.
      </Text>
      <PriceCard />
      <SocialMedias />
    </Flex>
  );
};

export default Pricing;
