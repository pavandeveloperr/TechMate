import {
    Avatar,
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  

  //fileupload styles
  export const fileUploadCss = {
    cursor: "pointer", marginLeft:"-5%",
        width: "110%",
        border: "none",
        height: "100%",
        color: "#ECC948",
        backgroundColor: "white"
  }

  const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss
  }

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imagePrev, setImagePrev] = useState('')
  
    const submitHandler = e => {
      e.preventDefault();
    };

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading textTransform={"uppercase"} children={'Registration'} />

        <form onSubmit={submitHandler} style={{ width: '100%' }}>
            <Box my={4} display={"flex"} justifyContent={"center"}>
                <Avatar src={imagePrev} size={"2xl"} />
            </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="Name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="John Doe"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="Email" children="Email Adress" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="choose Avatar" />
            <Input
              accept='image/*'
              required
              id="chooseAvatar"
              type={'file'}
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
            />
          </Box>

          <Box>
            <Link to="/forgetpassword">
              <Button fontSize={'sm'} variant="link">
                Forget Password?
              </Button>
            </Link>
          </Box>

          <Button my="4" colorScheme={'yellow'} type="submit">
            Sign Up
          </Button>

          <Box my="4">
            Already Registered?{' '}
            <Link to="/login">
              <Button colorScheme={'yellow'} variant="link">
                Log in
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
      </Container>
    )
}

export default Register