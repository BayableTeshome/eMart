import PropTypes from "prop-types";

import { AppShell, Footer, Group, Header, Navbar, Text } from "@mantine/core";
import Nav from "./Nav";
import Link from "next/link";


const Page = ({ children, name }) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "#FFFFFF",
          width: "100vw",
          height: "100vh",
          paddingLeft: "0px",
        },
      }}
      fixed
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Group position="apart">
              <Text size="xl" weight="bolder">
                <Link href="/">eMart</Link>
              </Text>
            </Group>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

Page.propTypes = {
  name: PropTypes.string,
  children:PropTypes.any
};

export default Page;
