import { useState } from "react";
import { TextField, Button } from '@mui/material';

const AddTodo = ({onAdd}: {onAdd: (text: string) => void}) => {
    const [text, setText] = useState('');

    const hundleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form onSubmit={hundleSubmit} style={{display: 'flex', gap: '10px'}}>
            <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Добавить задачу..."
            variant="outlined"
            fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Добавить
            </Button>
        </form>
    );
};

export default AddTodo;