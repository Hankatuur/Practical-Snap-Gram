import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../Components/AUTH/AuthForm'


const Auth = () => {
  return (
    <Flex minH={"100vh"}justifyContent={"center"} alignItems={"center"} px={4}>  
    <Container maxW={"container.md"} padding={0}>
       <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
      {/* Left Hand Side */}
    <Box display={{base:"none",md:"block"}}>
       <Image src='/auth.png' h={650} alt='auth-image'/>
     </Box>
      {/* Right Hand side */}
      <VStack spacing={4} align={"stretch"}>
       <AuthForm/>
    <Box textAlign={"center"}>Get The App.</Box>
    <Flex gap={5} justifyContent={"center"}>
       <Image src='/playstore.png' h={"10"} alt='play-store'/>
       <Image src='/microsoft.png' h={"10"} alt='microsoft'/>
    </Flex>
     </VStack>
       </Flex>
   </Container>
   </Flex>
  )
}

export default Auth


{/* <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            {/* Left Hand Side */}
        //  <Flex  justifyContent={"center"} alignContent={"center"} gap={10}>
        //  <Box display={{base:"none",md:"block"}}> 
        //  <Image src='/auth.png' h={650} alt='auth-image'/>
        //  </Box>
         {/* Right Hand Side */}
    //      <VStack spacing={4} align={"stretch"}>
    //         <AuthForm/>
    //       <Box textAlign={"center"}>Get The App.</Box>
    //       <Flex gap={5} justifyContent={"center"}>
    //         <Image src='/platstore.png' h={"10"} alt='playstore-logo'/>
    //         <Image src='/microsoft.png' h={"10"} alt='microsoft-logo'/>
    //       </Flex>
    //      </VStack>
    //      </Flex>
    //     </Container>

    // </Flex> */}