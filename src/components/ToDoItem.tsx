import { ListItem, Checkbox, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Todo from '../types/todo';

const TodoItem = ({
    todo,
    onToggle,
    onDelete,
}: {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}) => {
    return (
        <ListItem>
            <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)}/>
                <ListItemText
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.text}
                </ListItemText>
                <IconButton onClick={() => onDelete(todo.id)} color='error'>
                    <DeleteIcon/>
                </IconButton>
        </ListItem>
    );
};

export default TodoItem;