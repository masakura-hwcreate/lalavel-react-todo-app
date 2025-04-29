import { Button, Container, HStack, Input } from '@chakra-ui/react';
import MainLayout from '../Layouts/MainLayout';
import { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';

function Edit({currentTodo}) {

    const[editTodo, setEditTodo] = useState({ id: '', content: '' });

    useEffect(() => {
        if (currentTodo) {
            setEditTodo({
                id: currentTodo.id,
                content: currentTodo.content
            });
        }
    }, [currentTodo]);

    const handleChange = (e) => {
        setEditTodo({ ...editTodo, content: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        router.put(route('todos.update', { id: editTodo.id }), editTodo);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                    <Input
                        type='text'
                        id='content'
                        name='content'
                        value={editTodo.content}
                        onChange={handleChange}
                    />
                    <Button type='submit'>保存</Button>
            </form>
        </Container>

    )
    
}
Edit.layout = (page) => <MainLayout children={page} />;
export default Edit;