

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
        <Box height={"100%"}>
            <Box height={"15%"}>
                <Typography gutterBottom sx={{
                    color: COLORS.allTexts,
                    fontSize: '25px',
                    fontWeight: '300',
                    alignItems: 'center'
                }}>Players:</Typography>
            </Box>

            <Box height={"65%"} sx={{ overflowY: 'auto' }}>
                <List>
                    {players?.map((player, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={player} sx={{ color: "white" }} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(index)}>
                                    <DeleteIcon sx={{ color: "white" }} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box height={"20%"} display={'flex'} flexDirection={'row'} px={1}>
                <Box width={"60%"} display="flex" alignItems={'center'} justifyContent={'center'}>
                    <input
                        type="text"
                        placeholder='Insert player name'
                        onChange={(e) => setNewTodo(e.target.value)}
                        value={newTodo}
                        style={{
                            width: '100%',
                            height: '80%',
                            border: '1px solid white',
                            color: 'white',
                            paddingLeft: 8,
                            backgroundColor: 'transparent', // Optional: for transparency
                        }}
                    />
                </Box>
                <Box width={"40%"} display="flex" alignItems={'center'} justifyContent={'center'}>
                    <Button variant="outlined" onClick={addTodo} sx={{ height: '80%', color: COLORS.allTexts, borderColor: COLORS.allTexts }}>
                        Add player
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Players;