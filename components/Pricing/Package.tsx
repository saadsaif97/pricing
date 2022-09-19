import React from "react";
import MaxWidth from "../MaxWidth";
import { Box, Button, Grid, GridItem, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa"

export default function Package() {
  return (
    <MaxWidth>
      <Box boxShadow="md" borderRadius="12" overflow="hidden" mt={{ base: "-40%", sm: "-20%", md: "-15%" }} zIndex="banner">
        <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}>
          <GridItem colSpan={2} backgroundColor="brandLight.solid" py={14} px={12} textAlign="center"  display="flex" flexDir="column" justifyContent="space-between">
            <Box>
              <Text fontSize="2xl" fontWeight="extrabold" mb="4">Premium PRO</Text>
              <Heading fontSize="6xl" lineHeight="1" fontWeight="extrabold" mb="2">$329</Heading>
              <Text fontSize="lg" mb={6}>billed just once</Text>
            </Box>
            <Button colorScheme="brandDark" size="lg" w="full" bgColor="brandDark.solid">Get Started</Button>
          </GridItem>
          <GridItem colSpan={3} backgroundColor="gray.50" padding="12" display="flex" flexDir="column" justifyContent="center">
            <Text fontSize="lg" mb={6}>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <List spacing={3}>
              {[
                'International calling and messaging API',
                'Additional phone numbers',
                'Automated messages via Zapier',
                '24/7 support and consulting'
              ].map((text, i) => (
                <ListItem key={i} fontSize="lg">
                  <ListIcon as={FaCheckCircle} color="brandDark.solid" />
                  {text}
                </ListItem>))}
            </List>
          </GridItem>
        </Grid>
      </Box>
    </MaxWidth>
  );
}
