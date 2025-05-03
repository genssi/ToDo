import { motion } from "framer-motion";
import { ListItem, Checkbox, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Todo from "../types/todo";

const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
};

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
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <ListItem>
                <Checkbox
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <ListItemText
                    style={{
                        textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                    }}
                >
                    {todo.text}
                </ListItemText>
                <IconButton onClick={() => onDelete(todo.id)} color="error">
                    <DeleteIcon />
                </IconButton>
            </ListItem>
        </motion.div>
    );
};

export default TodoItem;
