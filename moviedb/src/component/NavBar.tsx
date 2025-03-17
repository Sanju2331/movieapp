import { Toolbar, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
function NavBar() {
    return (
        <AppBar >
            <Toolbar>
                <Typography style={{ flexGrow: 1 } }>
                    CINEMAS
                </Typography>

            </Toolbar>
        </AppBar>
    );
}
export default NavBar