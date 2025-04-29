import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

function Create({user}) {

    const[content, setContent] = useState({
        user_id: user.id,
        content: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContent({
            ...content,
            [name]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        router.post(route('todos.store'), content, {
            onFinish: () => {
                router.get(route('todos'));
            },
        });
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="content">todo名</label>
                    <input
                        type="text" 
                        id="content" 
                        name="content"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">追加</button>
            </form>
        </div>
        )
    
}
Create.layout = (page) => <MainLayout children={page} />;
export default Create;