import Head from "next/head";
import {Flex} from "@chakra-ui/react";

import {useAuth} from "@/lib/auth";
import Login from "@/components/Login";

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="full"
      h="100vh"
      minW="300px"
    >
      <Head>
        <title>AEP Power Lines</title>
      </Head>

      {auth?.user ? (
        <>
          <p>Welcome!</p>
        </>
      ) : (
        <Login />
      )}
    </Flex>
  );
}
