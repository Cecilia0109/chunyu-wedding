import { Flex } from "@chakra-ui/react";
import React from "react";
import CardItem from "../components/collections/CardItem";
import Navbar from "../components/navigationBar/Navbar";
import SocialMedias from "../components/navigationBar/SocialMedias";
import icon from "../public/icon.png";
import Image from "next/image";
import CardContainer from "../components/collections/CardContainer";

const Collections = () => {
  return (
    <Flex flexDirection="column" max-width="100vw" alignItems="center">
      <Image src={icon} alt="icon" width={150} />
      <Navbar />
      <CardContainer />
      <SocialMedias />
    </Flex>
  );
};

export default Collections;
