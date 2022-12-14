import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Tag,
  Text,
} from '@chakra-ui/react';
import Image from "next/image";
import collections1 from "../../public/collections1.jpg"

const CardItem = () => {
  return (

    <Box bg='white' p='6' border="1px solid gray" position="relative" maxH="65vh">
     <Box height="80%">
     <Image
        src={collections1}
        alt='Svartifoss Waterfall'
        objectFit='contain'
        layout="fill"
      />
     </Box>
      <HStack mt='5' spacing='3'>
        {['Waterfall', 'Nature'].map((item) => (
          <Tag key={item} variant='outline'>
            {item}
          </Tag>
        ))}
      </HStack>
      <Flex alignItems="center" gap={10}>
      <Heading my='4' size='lg'>
        Liz Martinez
      </Heading>
      <Button variant='outline' fontSize={12} colorScheme="purple"> learn more</Button>
      
      </Flex>
      

    </Box>

  );
};

export default CardItem;
