import MainLayout from '../Layouts/MainLayout';
import { Container, Button, Heading, HStack, Box } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { router } from '@inertiajs/react';
import { useState } from 'react';

function Index({todos}) {

    return (
        <>
                <Container px={5} py={3} maxW={"60rem"}>
                {
                    todos.map((todo) => (
                        <div key={todo.id}>
                            <HStack m="2" >
                                <Box as="article" maxW="" py="2" px="5" borderWidth="1px" rounded="md">
                                    <Heading size="lg">
                                        {todo.id}:{todo.content}
                                    </Heading>
                                </Box>
                                <Button onClick={() => router.get(route('todos.edit', { id: todo.id }))}>更新</Button>
                            </HStack>
                                {/* <Input
                                    type='text'
                                    id='content'
                                    name='content'
                                    value={todo.content}
                                    onChange={(e) => handleChange(todo.id, 'content', e.target.value)}
                                /> */}
                        </div>
                    ))
                }
                </Container>
        </>
        )
    
}
Index.layout = (page) => <MainLayout children={page} />;
export default Index;