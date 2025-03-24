import { useColorMode,Button,Box } from "@chakra-ui/react"

const ToggleColorMode = () => {
    const {colorMode,toggleColorMode} = useColorMode()
  return (
    <Box
   
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    p="4"
    bg="gray.800"
    color="white"
    >
    <Button onClick={toggleColorMode}>
    {colorMode === "light" ? "🌙 Dark":"☀️ Light Mode"}
    </Button>
    </Box>
  )
}

export default ToggleColorMode