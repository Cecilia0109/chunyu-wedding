import { Box, Flex,Grid,Text } from '@chakra-ui/react'
import React from 'react'
import { GiDress } from "react-icons/gi"

export const WhatWeHave = () => {
  return (
    <>
    <Text fontSize="2rem">What We Have</Text>
    <Flex marginY={10} gap="2rem">
      <Flex width={200} height={200} background="#f7f7f7" alignItems="center" justifyContent="center" flexDirection="column">
        <Text> CHINESE CHEONGSAM</Text>
        <GiDress size={24}/>
      </Flex>
      <Flex width={200} height={200} background="#f7f7f7" alignItems="center" justifyContent="center" flexDirection="column">
        <Text> CHINESE CHEONGSAM</Text>
        <GiDress size={24}/>
      </Flex>
      <Flex width={200} height={200} background="#f7f7f7" alignItems="center" justifyContent="center" flexDirection="column">
        <Text> CHINESE CHEONGSAM</Text>
        <GiDress size={24}/>
      </Flex>
      <Flex width={200} height={200} background="#f7f7f7" alignItems="center" justifyContent="center" flexDirection="column">
        <Text> CHINESE CHEONGSAM</Text>
        <GiDress size={24}/>
      </Flex>
    </Flex>
    </>
  )
}
