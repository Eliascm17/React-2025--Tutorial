import { useAuth } from '@/lib/auth';
import { Logo } from '@/styles/logo';
import {
    Avatar,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text
} from '@chakra-ui/react';
import React from 'react';

const DashboardShell = ({ children }) => {
    const auth = useAuth();
    return (
        <Flex flexDirection="column">
            <Flex
                backgroundColor="white"
                alignItems="center"
                justifyContent="space-between"
                py={4}
                px={8}
            >
                <Stack isInline spacing={4}>
                    <Logo boxSize="24px" />
                    <Link>Feedback</Link>
                    <Link>Sites</Link>
                </Stack>
                <Flex alignItems="center">
                    <Link mr={4}>Account</Link>
                    <Avatar size="sm" src={auth.user.photoUrl} />
                </Flex>
            </Flex>
            <Flex backgroundColor="gray.100" p={8} height="100vh">
                <Flex
                    maxWidth="800px"
                    direction="column"
                    ml="auto"
                    mr="auto"
                    w="100%"
                >
                    <Breadcrumb>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink color="gray.700">
                                Sites
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <Heading color="black" mb={4}>
                            Sites
                        </Heading>
                        {children}
                    </Breadcrumb>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default DashboardShell;
