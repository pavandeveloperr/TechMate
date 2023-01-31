import React from 'react';
import {
  TiSocialLinkedin,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="Pavan Kulkarni @2023"
            color={'yellow.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="https://linkedin.com/in/pavankulkarnii" target={'blank'}>
            <TiSocialLinkedin />
          </a>
          <a href="https://github.com/pavandeveloperr" target={'blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
</Box>
  )
}

export default Footer;