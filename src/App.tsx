import { useState, useMemo } from "react";
import {
    Container,
    Typography,
    Box,
    IconButton,
    CssBaseline,
    ThemeProvider,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useTodos from "./hooks/useToDos";
import AddTodo from "./components/AddToDo";
import TodoList from "./components/ToDoList";
import FilterTodos from "./components/FilterToDos";
import { lightTheme, darkTheme } from "./Theme";

type Filter = "all" | "active" | "completed";

function App() {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
    const [filter, setFilter] = useState<Filter>("all");
    const [darkMode, setDarkMode] = useState(false);

    const theme = useMemo(
        () => (darkMode ? darkTheme : lightTheme),
        [darkMode]
    );

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box mt={4}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Умный ToDo
                    </Typography>
                    <AddTodo onAdd={addTodo} />
                    <Box mt={2}>
                        <FilterTodos filter={filter} setFilter={setFilter} />
                        <IconButton
                            onClick={() => setDarkMode(!darkMode)}
                            color="inherit"
                        >
                            {darkMode ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </IconButton>
                    </Box>
                    <TodoList
                        todos={filteredTodos}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
