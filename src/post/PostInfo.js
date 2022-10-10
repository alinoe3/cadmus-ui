import {Box, Stack, Typography} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CommentIcon from "@mui/icons-material/Comment";
import React from "react";

const PostInfo = (props) => {

    const {author, creationDate, commentCount} = props;

    return (
        <Box alignItems='center' mt={1}>
            <Stack direction='row' alignItems='center' mb={1} spacing={1}>
                <PersonIcon/>
                <Typography component='span'>
                    {author.firstName + ' ' + author.lastName}
                </Typography>

                <CalendarMonthIcon/>
                <Typography component='span'>
                    {creationDate}
                </Typography>

                <CommentIcon/>
                <Typography component='span'>
                    {commentCount} comments
                </Typography>
            </Stack>
        </Box>
    );
}

export default PostInfo;