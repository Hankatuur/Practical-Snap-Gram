import { Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedUserHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader/>
     <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
       Suggested For You
      </Text>
      <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
        See All
      </Text>
     </Flex>
     <SuggestedUser name='Mohamed' followers={5000} 
     avatar={"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fman-in-field&psig=AOvVaw1bpzxQgd52terfBpVTX6YU&ust=1743585371671000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCoivG_towDFQAAAAAdAAAAABAR"}/>
     <SuggestedUser name='Abdi' followers={3000} 
     avatar={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fperson-sunrise-field.html%3Fpg%3D10&psig=AOvVaw1bpzxQgd52terfBpVTX6YU&ust=1743585371671000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCoivG_towDFQAAAAAdAAAAABAY"}/>
     <SuggestedUser name='khalid'followers={10000} 
     avatar={"https://images.pexels.com/photos/15638235/pexels-photo-15638235/free-photo-of-model-clicking-photos-with-dslr.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>

    </VStack>
  )
}

export default SuggestedUsers