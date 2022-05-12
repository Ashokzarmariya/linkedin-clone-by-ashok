import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { signOut, useSession } from 'next-auth/react';
import { Avatar } from '@mui/material';

import Router from 'next/router';


export default function Navbar() {
    const { data: session } = useSession();
   
    React.useEffect(() => {
        console.log("session",session)
    },[session])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
                  </Typography>
                  {session ? <Avatar src={`${session?.user?.image}`} />
                      : <Button onClick={() => {
                          Router.push('/auth/signin')
                  }} color="inherit">Login</Button>}
                  
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
