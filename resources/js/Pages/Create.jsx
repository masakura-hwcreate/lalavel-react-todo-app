import React, { useState } from 'react';
import { router } from '@inertiajs/react';

function Create({user}) {

    const[content, setContent] = useState({
        user_id: user.id,
        content: "",
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
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