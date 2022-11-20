import React from 'react'
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";

import Navbar from "../components/navigationBar/Navbar";
import SocialMedias from "../components/navigationBar/SocialMedias";
import Image from "next/image";
import icon from "../public/icon.png";
import PriceCard from "../components/Pricing/PriceCard";
import BridalContainer from '../components/realBridals/BridalContainer';

const RealBridals = () => {
  return (
    <Flex flexDirection="column" max-width="100vw" alignItems="center">
      <Image src={icon} alt="icon" width={150} />
      <Navbar />
      <Heading marginTop={10}>REAL BRIDALS</Heading>
      <Divider marginBottom={16}/>
      <BridalContainer/>
      <SocialMedias />
    </Flex>
  )
}

export default RealBridals
