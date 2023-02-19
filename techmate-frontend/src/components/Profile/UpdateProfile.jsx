import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <Container py={'16'} minH={"90vh"}>
            <form>
                <Heading
                    my={'16'}
                    textTransform={'uppercase'}
                    textAlign={['center', 'left']}
                >
                    Update Profile
                </Heading>

                <VStack spacing={'8'}>
                    {/* Update Name */}
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        type={'text'}
                        focusBorderColor="yellow.500"
                    />

                    {/* update email */}
                    <Input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="abc@gmail.com"
                        type={'email'}
                        focusBorderColor="yellow.500"
                    />
                    <Button w={'full'} colorScheme={'yellow'} type='submit'>Update</Button>
                </VStack>
            </form>

        </Container>
    )
}

export default UpdateProfile