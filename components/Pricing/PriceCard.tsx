import { Flex } from '@chakra-ui/react'
import React from 'react'
import PriceCardItem from './PriceCardItem'

const PriceCard = () => {
  return (
    <Flex maxWidth="65vw" justifyContent="space-between" position="relative" marginY={16} gap={32}>
      <PriceCardItem/>
      <PriceCardItem/>
    </Flex>
  )
}

export default PriceCard