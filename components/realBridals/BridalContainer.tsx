import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import R1 from "../../public/R1.jpg";
import R2 from "../../public/R2.jpg";
import R3 from "../../public/R3.jpg";
import R4 from "../../public/R4.jpg";
import R5 from "../../public/R5.jpg";
import R7 from "../../public/R7.jpg";
import R8 from "../../public/R8.jpg";
import R9 from "../../public/R9.jpg";

const BridalContainer = () => {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}
      width="70vw"
      templateRows="repeat(9, 10vh)"
      marginBottom={40}
      position="relative"
    >
      <GridItem position="relative" gridRow="2/span 4" gridColumn={1}>
        <Image
          src={R1}
          alt="bridals picture 1"
          layout="fill"
          objectFit="contain"
        />
      </GridItem>
      <GridItem gridRow="1/span 4" gridColumn={4} position="relative">
        <Image
          src={R2}
          alt="bridals picture 2"
          layout="fill"
          objectFit="contain"
        />
      </GridItem>
      <GridItem gridRow="5/span 5" gridColumn={3} position="relative">
        <Image
          src={R3}
          alt="bridals picture 3"
          layout="fill"
          objectFit="contain"
        />
      </GridItem>
      <GridItem gridRow="6/span 3" gridColumn={1} position="relative">
        <Image
          src={R4}
          alt="bridals picture 3"
          layout="fill"
          objectFit="contain"
        />
      </GridItem>
      <GridItem gridRow="1/span 4" gridColumn={2} position="relative">
        <Image
          src={R5}
          alt="bridals picture 3"
          layout="fill"
          objectFit="contain"
        />
      </GridItem>
      <GridItem gridRow="5/span 3" gridColumn={2} position="relative">
        <Image
          src={R9}
          alt="bridals picture 3"
          layout="fill"
          objectFit="contain"
        />
      </GridItem>
      <GridItem gridRow="2/span 3" gridColumn={3} position="relative">
        <Image
          src={R7}
          alt="bridals picture 3"
          layout="fill"
          objectFit="contain"
        />
      </GridItem>
      <GridItem gridRow="5/span 3" gridColumn={4} position="relative">
        <Image
          src={R8}
          alt="bridals picture 3"
          layout="fill"
          objectFit="contain"
        />
      </GridItem>
    </Grid>
  );
};

export default BridalContainer;
