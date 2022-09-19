import { Box, Grid, GridItem, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import MaxWidth from "../MaxWidth";
import Gurantee from "../Icons/Gurantee";
import NoFee from "../Icons/NoFee";
import PayOnce from "../Icons/PayOnce";

export default function Features() {
  return (
    <MaxWidth>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} my="14" gap="8">
        <GridItem fontSize="lg" display="grid" gridTemplateColumns="60px 3fr" alignItems="center">
          <Gurantee/>
          <Text fontWeight="bold">30 days money back Guarantee</Text>
        </GridItem>
        <GridItem fontSize="lg" display="grid" gridTemplateColumns="60px 3fr" alignItems="center">
          <NoFee/>
          <Text fontWeight="bold">No setup fees 100% hassle-free</Text>
        </GridItem>
        <GridItem fontSize="lg" display="grid" gridTemplateColumns="60px 3fr" alignItems="center">
          <PayOnce/>
          <Text fontWeight="bold">No monthly subscription Pay once and for all</Text>
        </GridItem>
      </Grid>
    </MaxWidth>
  );
}
