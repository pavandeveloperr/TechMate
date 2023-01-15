import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, VStack } from '@chakra-ui/react';
import { RiMenu5Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const LinkButton = ({ url = "/", title = "Home" }) =>
(
    <Link>
        <Button variant={'ghost'}>{title}</Button>
    </Link>
)

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <ColorModeSwitcher />

            <Button colorScheme={'yellow'}
                onClick={onOpen}
                width="12"
                height={'12'}
                rounded="full"
                position={"fixed"}
                top='6'
                left='6'
            >

                <RiMenu5Fill />
            </Button>

            <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={"1px"}>Tech Mate</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={'4'} alignItems="flex-start">
                            <LinkButton url="/" title="Home" />
                            <LinkButton url="/courses" title="Browse All Courses" />
                            <LinkButton url="/request" title="Request a Course" />
                            <LinkButton url="/contact" title="Contact Us" />
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
