import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsTrashFill } from 'react-icons/bs';
import {fileUploadCss} from '../Auth/Register'

const Profile = () => {

    const user = {
        name: "Pavan",
        email: "pavan@gmail.com",
        membersince: String(new Date().toISOString()),
        role: "user",
        subscription: {
            status: "active"
        },
        playlist: [
            {
                course: "lfhalfhal", poster: "gljanaljn"
            }
        ]
    }

    const removeFromPlaylistHandler = id => {
        console.log(id)

    }

    const changeImageSubmitHandler = (e, image) => {
        e.preventDefault()
        console.log(image)
    };

    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Container minH={'95vh'} maxW='container.lg' py='8'>
            <Heading m='8' textTransform={'uppercase'}>Profile</Heading>


            <Stack
                justifyContent={'flex-start'}
                direction={['column', 'row']}
                alignItems={'center'}
                spacing={['8', '16']}
                padding='8'
            >

                <VStack>
                    <Avatar boxSize={'48'} />
                    <Button onClick={onOpen} colorScheme={'yellow'} variant={'ghost'}>
                        Change Photo
                    </Button>
                </VStack>


                <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
                    <HStack>
                        <Text fontWeight={'bold'}>
                            Name
                        </Text>
                        <Text>
                            {user.name}
                        </Text>
                    </HStack>{' '}
                    <HStack>
                        <Text fontWeight={'bold'}>
                            Email
                        </Text>
                        <Text>
                            {user.email}
                        </Text>
                    </HStack>
                    <HStack>
                        <Text fontWeight={'bold'}>
                            Member Since
                        </Text>
                        <Text>
                            {user.membersince.split("T")[0]}
                        </Text>
                    </HStack>

                    {
                        user.role !== "admin" && <HStack>
                            <Text fontWeight={'bold'}>Subscription</Text>
                            {
                                user.subscription.status === "active" ? (
                                    <Button color={"yellow.500"} variant="ghost">Cancel Subscription</Button>
                                ) : (
                                    <Link to={"/subscribe"}>
                                        <Button colorScheme={'yellow'}>Subscribe</Button>
                                    </Link>
                                )
                            }
                        </HStack>
                    }
                    <Stack direction={['column', 'row']}>
                        <Link to='/updateprofile'>
                            <Button>Update Profile</Button>
                        </Link>

                        <Link to='/changepassword'>
                            <Button>Change Password</Button>
                        </Link>
                    </Stack>
                </VStack>
            </Stack>

            <Heading size={'md'} my='8'>Playlist</Heading>
            {
                user.playlist.length > 0 && (
                    <Stack direction={['column', 'row']}
                        alignItems={"center"}
                        flexWrap='wrap'
                        p='4'>


                        {
                            user.playlist.map((element) => (
                                <VStack w='48' m='2' key={element.course}>
                                    <Image
                                        boxSize={'full'}
                                        objectFit="contain"
                                        src={element.poster}
                                    />

                                    <HStack>
                                        <Link to={`/courses/${element.course}`}>
                                            <Button variant={'ghost'} colorScheme="yellow">Watch Now</Button>
                                            <Button onClick={() => removeFromPlaylistHandler(element.course)}>
                                                <BsTrashFill />
                                            </Button>
                                        </Link>
                                    </HStack>
                                </VStack>
                            ))
                        }
                    </Stack>
                )
            }

            <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose} />


        </Container>
    )
}

export default Profile

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
    const [imagePrev, setImagePrev] = useState('')
    const [image, setImage] = useState('');

    const changeImage = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }
        const closeHandler = () => {
            onClose();
            setImagePrev("");
            setImage("");
        }
    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Container>
                        <form onSubmit={(e) => changeImageSubmitHandler(e, image)}>
                            <VStack spacing={'8'}>
                                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                                <Input 
                                type={'file'}
                                css={{ "&::file-selector-button": fileUploadCss }}
                                onChange={changeImage} 
                                />

                                <Button w='full' colorScheme={'yellow'} type='submit'>
                                    Change
                                </Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button mr={'3'} onClick={closeHandler} >Cancel</Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    )
}
