import { Avatar, Container, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

 
const Founder = () => {
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
            <Avatar boxSize={["40", "48"]} />
        </VStack>


    </Stack>
}

const About = () => {
    return (
        <Container maxW={"container.lg"} padding='16' boxShadow={'lg'}>
            <Heading children='About Us' textAlign={['center', 'left']} />

            <Founder />
        </Container>
        
    )
}

export default About