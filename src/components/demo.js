import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TaskComponent from './TaskComponent'; // Import your TaskComponent

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.`;

export default function ZeroWidthStack() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
          backgroundColor: isClicked ? 'blue' : null, // Conditionally set background color
          cursor: 'pointer', // Change cursor to pointer on hover
        }}
        onClick={handleClick} // Handle click event
      >
        {isClicked ? (
          <TaskComponent /> // Render TaskComponent when stack box is clicked
        ) : (
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar>T</Avatar>
            <Typography noWrap>{message}</Typography>
          </Stack>
        )}
      </Item>
    </Box>
  );
}
