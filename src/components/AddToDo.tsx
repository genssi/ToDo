import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const AddTodo = ({ onAdd }: { onAdd: (text: string) => void }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText("");
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: "10px" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
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
        </motion.form>
    );
};

export default AddTodo;
