import {AppBar, Button, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";

const Header = (props) => {

    const {title} = props;
    const sections = ['Solaris', 'Linux', 'BSD', 'DOS', 'Windows', 'AmigaOs', 'AIX', 'HP-UX', 'NetWere', 'MacOs', 'Sun OS'];

    return (
        <AppBar position='static'>
            <Toolbar>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>

                    <Grid item xs={8}>
                        <Typography align='center' component='h1' variant='h4'>
                            <Link to='/' style={{textDecoration: 'none'}}>
                                {title}
                            </Link>
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        <Button color='inherit'>Sign up</Button>
                    </Grid>
                </Grid>
            </Toolbar>

            <Toolbar component='nav'
                     variant='dense'
                     sx={{justifyContent: 'space-between'}}
            >
                {sections.map((section) => (
                    <Typography key={section} variant='body2' color='inherit'>
                        <Link to='/'>
                            {section}
                        </Link>
                    </Typography>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
