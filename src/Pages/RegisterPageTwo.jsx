import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom";


function RegisterTwo  (){
    const [ address, setAddress] = useState("");
    const [ num, setNum] = useState("");

    return (
        <Box border='1px solid black' margin='auto'textAlign='center' w='40%' p={5} mt={10} bg="skyblue" display='grid' >
          <h2>Registration - Page : 2</h2>
            <Input mb={5} placeholder="enter your address" onChange={(e)=>{setAddress(e.target.value)}}></Input>
            <Input mb={5} placeholder="enter your number" onChange={(e)=>{setNum(e.target.value)}}></Input>
            <Link to='/register/one'> prev </Link>
            <Link to='/dashboard'> Submit </Link>
            {/* <Button ml={5}>Submit</Button> */}
        </Box>
    )
}

export default RegisterTwo;