import MainLayout from '../Layouts/MainLayout';

function Index({todos}) {

    return (
        <>
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
        </>
        )
    
}
Index.layout = (page) => <MainLayout children={page} />;
export default Index;