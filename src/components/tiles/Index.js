import { Grid, Paper } from '@mui/material';
import React from 'react';

export default function Tiles({
    items,
    onClick,
    selectedItems
}) {

    const isItemsArray = Array.isArray(selectedItems);
    return (
        <Grid container justifyContent="center" spacing={2}>
            {items.map((value, index) => (
                <Grid key={index} item>
                    <Paper
                        onClick={() => onClick(value)}
                        sx={{
                            padding: '25px',
                            backgroundColor: (theme) => isItemsArray ?
                            selectedItems.findIndex(item => item.id === value.id) !== -1 ? '#868d94' : '#fff' :
                            selectedItems === value ? '#868d94' : '#fff',
                        }}
                    >
                        {isItemsArray ? value.title : value}
                    </Paper>
                </Grid>
            ))}
        </Grid>
    )
}
