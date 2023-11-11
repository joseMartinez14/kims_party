

// TodoList.tsx
import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface PlayersProps {
    players: string[];
    setPlayers: (newPlayers: string[]) => void;
}

const Players = (props: PlayersProps) => {

    const { players, setPlayers } = props;

    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            if (players == undefined) {
                setPlayers([newTodo]);
            } else {
                setPlayers([...players, newTodo]);
            }
            setNewTodo('');
        }
    };

    const deleteTodo = (index: number) => {
        const updatedTodos = players.filter((_, i) => i !== index);
        setPlayers(updatedTodos);
    };

    return (
        <div>
            <TextField
                label="Inserte nombre de l@s borrach@s"
                variant="standard"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                sx={{
                    width: '100%'
                }}
            />
            <Box pt={1} width={'100%'}>
                <Button variant="outlined" color="primary" onClick={addTodo} sx={{ pt: '10px' }}>
                    Agregar participante
                </Button>
            </Box>
            <List>
                {players?.map((player, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={player} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Players;