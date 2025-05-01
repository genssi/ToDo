import { List } from "@mui/material";
import Todo from "../types/todo";
import TodoItem from "./ToDoItem";

const TodoList = ({
    todos,
    onToggle,
    onDelete,
}: {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}) => {
    return (
        <List>
            {todos.map((todo) => (
                <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
                />
            ))}
        </List>
    );
};

export default TodoList;