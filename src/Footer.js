import {Box, Link, Typography} from "@mui/material";

const Footer = () => {
    const Copyright = () => {

        return (
            <Typography variant='body2' color='text.secondary' align='center'>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }


    return (
        <Box component='footer' sx={{py: 6}}>
            <Typography variant='h6' align='center' gutterBottom>
                Footer
            </Typography>

            <Typography variant='subtitle1' align='center' color='text.secondary'>
                Something here to give the footer a purpose!
            </Typography>

            <Copyright/>
        </Box>
    );
}

export default Footer;
