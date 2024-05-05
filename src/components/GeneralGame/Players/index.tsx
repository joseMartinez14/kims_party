

// TodoList.tsx
import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { COLORS } from '../../../utils/Colors';
import { TEXTS } from '../../../utils/Texts';

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
            <Typography gutterBottom sx={{
                color: COLORS.darkblue,
                fontSize: '25px',
                fontWeight: '300',
                pt: 3,
            }}>Players:</Typography>
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
            <TextField
                label="Insert the player name"
                variant="standard"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                sx={{
                    width: '100%'
                }}
            />
            <Box pt={1} width={'100%'}>
                <Button variant="outlined" color="primary" onClick={addTodo} sx={{ pt: '10px' }}>
                    Add player
                </Button>
            </Box>
        </div>
    );
}

export default Players;