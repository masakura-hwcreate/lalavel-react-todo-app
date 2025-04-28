import React, { useState } from 'react';
import axios from 'axios';
import { router } from '@inertiajs/react';

function Create() {

    const[content, setContent] = useState({
        user_id: "",
        content: "",
    });

    
    const handleSubmit = (e) => {
        const userId = 1;
        e.preventDefault();

        const updateContent =  {
            ...content,
            user_id: userId, // ユーザーIDを追加
        }
        setContent(updateContent)
        // router.post(route('todos.store'), content );

        router.post(route('todos.store'), content, {
            onFinish: () => {
                // リダイレクト先を設定
                router.get(route('todos'));
            },
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContent({
            ...content,
            [name]: value,
            
        })
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
                        // value={content}
                        // onChange={(e) => setContent({...content, content: e.target.value})}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">追加</button>
            </form>
        </div>
        )
    
}
export default Create;