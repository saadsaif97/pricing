import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import MaxWidth from '../MaxWidth'

export default function Header() {
  return (
    <Box background="brandDark.900" color="gray.50" textAlign={{ base: "left", md: "center" }} pt={{ base: 14, md: 24 }} pb={48}>
     <MaxWidth>
       <Heading fontSize={{ base: "3xl", md: "5xl" }} mb="4">Simple pricing for your business</Heading>
       <Text fontSize="2xl">Plans that are carefully crafted to suit your business.</Text>
     </MaxWidth>
    </Box>
  )
}
