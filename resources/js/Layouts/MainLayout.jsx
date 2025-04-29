import { Box, Container, Heading, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const MainLayout = ({ children }) => {
    return (
        <>
            {/*ヘッダー */}
            <Box  bg={"purple.200"}>
                <Container px={5} py={3} maxW={"60rem"}>
                    <HStack justifyContent={"space-between"}>
                        <Heading as="h1" size={{base: "md", md: "xl"}} >
                            タイトル
                        </Heading>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label= "Options"
                                icon={<RxHamburgerMenu />}
                                variant="outline"
                            />
                            <MenuList>
                                <MenuItem>一覧</MenuItem>
                                <MenuItem>マイページ</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </Container>
            </Box>
            <div>{children}</div>
            {/* フッター */}
            <Box bg={"purple.200"}>
                フッター
            </Box>
        </>
    );
}
export default MainLayout;