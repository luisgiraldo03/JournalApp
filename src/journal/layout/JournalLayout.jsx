import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { Navbar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
        
        {/* navbar */}
        <Navbar drawerWidth= {drawerWidth}/>

        {/* sidebar */}
        <SideBar drawerWidth={drawerWidth}/>

        <Box
            component='main'
            sx={{flexGrow: 1, p: 3}}>

             {/* Toolbar    */}
             <Toolbar />

             {children}

        </Box>

    </Box>
  )
}
