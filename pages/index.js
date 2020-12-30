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
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                                if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                                    window.location.href = "/dashboard"
                                }
                            `
                    }}
                />
            </Head>
            <Logo boxSize="64px" />
            {auth.user ? (
                <Button as="a" size="sm" fontWeight="medium" href="/dashboard">
                    View Dashboard
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
