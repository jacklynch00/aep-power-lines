import React from "react";
import {Flex, Link, Stack, Avatar} from "@chakra-ui/react";
import {useAuth} from "@/lib/auth";

const DashboardShell = ({children}) => {
  const {user, signout} = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="white"
        p={4}
      >
        <Stack spacing={4} isInline justifyContent="center" alignItems="center">
          <Link fontWeight="bold" color="gray.700">
            AEP
          </Link>
          <Link color="gray.700" href="/dashboard">
            Home
          </Link>
          <Link color="gray.700" href="/map">
            Map
          </Link>
        </Stack>
        <Stack spacing={4} isInline alignItems="center">
          {user && (
            <Link color="gray.700" onClick={() => signout()}>
              Logout
            </Link>
          )}
          <Avatar size="md" src={user?.photoUrl} />
        </Stack>
      </Flex>
      <Flex backgroundColor="gray.50" justifyContent="center" p={8}>
        <Flex flexDirection="column" maxWidth="1200px" width="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
