function Index({todos}) {
    console.log(todos);
    return (
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
        )
    
}
export default Index;