import {Paper, Typography} from "@mui/material";

const Sidebar = (props) => {
    const {about} = props;

    return (
        <Paper sx={{p: 2}}>
            <Typography variant='h6'>About</Typography>
            <Typography>{about}</Typography>
        </Paper>
    );
};

export default Sidebar;
