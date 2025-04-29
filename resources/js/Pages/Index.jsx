import { Box, Center, Container, Heading, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MdMenu } from 'react-icons/md';

function Index({todos}) {

    return (
        <>
        {/*ヘッダー */}
        <Box  bg={"purple.200"}>
            <Container px={5} maxW={"60rem"}>
                <HStack justifyContent={"space-between"}>
                    <Heading as="h1" size={{base: "md", md: "xl"}} >
                        タイトル
                    </Heading>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label= "Options"
                            icon={<MdMenu />}
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
            <div>
                {
                    todos.map((todo) => (
                        <div key={todo.id}>
                            <p>{todo.deadline}</p>
                            <p>{todo.content}</p>
                            <p>{todo.is_finished}</p>
                        </div>
                    ))
                }
            </div>
            {/* フッター */}
            <Box bg={"purple.200"}>
                フッター
            </Box>
        
        </>
        )
    
}
export default Index;