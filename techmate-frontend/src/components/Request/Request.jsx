import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    return (
        <Container h="92vh">
            <VStack h="full" justifyContent={'center'} spacing='16'>
                <Heading children="Request New Course" />

                <form style={{ width: '100%' }}>
                    <Box my={'4'}>
                        <FormLabel htmlFor="name" children="Name" />
                        <Input
                            required
                            id="email"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="john doe"
                            type={'text'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="email" children="Enter your Email" />
                        <Input
                            required
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="johndoe@gmail.com"
                            type={'email'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="course" children="Course" />
                        <Textarea
                            required
                            id="course"
                            value={course}
                            onChange={e => setCourse(e.target.value)}
                            placeholder="Explain the course details..."
                            focusBorderColor="yellow.500"
                        />
                    </Box>



                    <Button my="4" colorScheme={'yellow'} type="submit">
                        Submit
                    </Button>



                    <Box my="4">
                        Explore all courses?{' '}
                        <Link to="/courses">
                            <Button colorScheme={'yellow'} variant="link">
                                Click
                            </Button>{' '}
                            here
                        </Link>
                    </Box>
                </form>
            </VStack>

        </Container>
    )
}

export default Request