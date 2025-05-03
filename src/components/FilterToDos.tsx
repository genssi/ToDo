import { Button, ButtonGroup } from "@mui/material";

type Filter = 'all' | 'active' | 'completed';

const FilterTodos = ({filter, setFilter,}: {
    filter: Filter; 
    setFilter: (filter: Filter) => void;}) => {
        return (
            <ButtonGroup>
                <Button
                variant={filter === 'all' ? 'contained' : 'outlined'}
                onClick={() => setFilter('all')}>
                    Все
                </Button>
                <Button
                variant={filter === 'active' ? 'contained' : 'outlined'}
                onClick={() => setFilter('active')}>
                    Активные
                </Button>
                <Button
                variant={filter === 'completed' ? 'contained' : 'outlined'}
                onClick={() => setFilter('completed')}>
                    Завершенные
                </Button>
            </ButtonGroup>
        )
};

export default FilterTodos;