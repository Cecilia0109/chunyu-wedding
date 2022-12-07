import { Flex } from '@chakra-ui/react'
import React from 'react'
import CardItem from './CardItem'

const CardContainer = () => {
  return (
    <Flex marginY={10} justifyContent="space-around" width="85vw" flexWrap="wrap" height="70vh">
    <CardItem />
    <CardItem />
    <CardItem />

    </Flex>
  )
}

export default CardContainer