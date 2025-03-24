import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { Box, Container, Flex } from '@chakra-ui/react'
import FeedPost from '../../FeedPost/FeedPost'
import SuggestedUser from '../../Components/SuggetedUser/SuggestedUser'

const HomePage = () => {
  return (
  <Container maxWidth={"container.lg"}>
   <Flex gap={20}>
   <Box flex={2} py={10}>
    <FeedPost/>
   </Box>
   <Box flex={3} mr={20} display={{base:"none",lg:"block"}} maxW={"300px"}>
    <SuggestedUser/>
   </Box>
   </Flex>
  </Container>
  )
}

export default HomePage