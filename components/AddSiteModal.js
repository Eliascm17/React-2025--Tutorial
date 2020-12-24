import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Button
} from '@chakra-ui/react';
import { createSite } from '@/lib/db';

function AddSiteModal() {
    const initialRef = useRef();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleSubmit, register } = useForm();
    const onCreateSite = (values) => createSite(values);
    return (
        <>
            <Button fontWeight="medium" maxW="200px" onClick={onOpen}>
                Add your First Site
            </Button>
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
                    <ModalHeader fontWeight="bold">Add Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder="My site"
                                name="site"
                                ref={register({ required: 'Required' })}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input
                                placeholder="https://website.com"
                                name="url"
                                ref={register({ required: 'Required' })}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} fontWeight="medium" mr={3}>
                            Cancel
                        </Button>
                        <Button
                            backgroundColor="#99FFFE"
                            color="#194D4C"
                            fontWeight="medium"
                            type="submit"
                        >
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddSiteModal;
