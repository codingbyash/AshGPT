import React from 'react'
import { AppBar } from '@mui/material' //for navbar
import {Toolbar} from '@mui/material'  
import Logo from './shared/Logo';
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';


function Header() {
  cons auth = useAuth();
     return (
       <AppBar 
          sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}>
         <Toolbar sx = {{display: "flex" }}>
          <Logo/>
          <div>
            {auth?.isLoggedIn ?(
              <>
              <NavigationLink
              bg="00fffc"
              to="/chat"
              text="Go to Chat"
              textColor="black"
              /><NavigationLink
              bg = "#51538f" 
              textColor='white'
              text="logout"
              onClick={auth.logout};
              />
              </>
              ) : (
                <>
                </>
            )}

          </div>

         </Toolbar>
       </AppBar>
     );
   }

export default Header;
