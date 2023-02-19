import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

     return (
        <Container py={'16'} minH={"90vh"}>
            <form>
                <Heading
                    my={'16'}
                    textTransform={'uppercase'}
                    textAlign={['center', 'left']}
                >
                    Change Password
                </Heading>


                <VStack spacing={'8'}>
                    {/* Old Passsword */}
                    <Input
                        required
                        id='password'
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                        placeholder="Old Password"
                        type={'password'}
                        focusBorderColor="yellow.500"
                    />

                    {/* New Password */}
                    <Input
                        required
                        id='password'
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        placeholder="New Password"
                        type={'password'}
                        focusBorderColor="yellow.500"
                    />

                    <Button w={'full'} colorScheme={'yellow'} type='submit'>Change</Button>
                </VStack>
            </form>

        </Container>
    )
}

export default ChangePassword