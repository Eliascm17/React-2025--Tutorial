import Head from 'next/head';
import { Button, Text, Code, Heading, Flex } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { Logo } from '@/styles/logo';

export default function Home() {
    const auth = useAuth();
    return (
        <Flex
            as="main"
            direction="column"
            align="center"
            justify="center"
            h="100vh"
        >
            <Logo boxSize="64px" />
            {auth.user ? (
                <Button
                    onClick={(e) => {
                        auth.signout(e);
                    }}
                >
                    Sign Out
                </Button>
            ) : (
                <Button
                    m={4}
                    size="sm"
                    onClick={(e) => {
                        auth.signinWithGithub(e);
                    }}
                >
                    Sign In
                </Button>
            )}
        </Flex>
    );
}
