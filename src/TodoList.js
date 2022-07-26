import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const TodoList = ({todo, deleteHandler}) => {
  return (
    <div>
        <Card sx={{ maxWidth: 500 }}>
        <List>
          {todo.map((item, index)=>
            <ListItem disablePadding>
            <ListItemButton>
              <h4 key={index}>{item}</h4> &nbsp; &nbsp; &nbsp; <Button color="error" onClick={()=>deleteHandler(index)} variant='contained'>Delete</Button> 
            </ListItemButton>
          </ListItem>
          )}
        </List>
        </Card>
    </div>
  )
}

export default TodoList