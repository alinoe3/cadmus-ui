import {Box, List, Pagination, Stack, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentIcon from '@mui/icons-material/Comment';
import {Link, useParams} from "react-router-dom";

const Posts = () => {

    const [page, setPage] = useState({posts: []});

    const fetchPosts = (pageNr) => {
        fetch(`http://localhost:8080/post?pageNr=${pageNr - 1}&pageSize=3&sortOrder=DESC&sortField=CreationDate`)
            .then(data => {
                if (data.ok) {
                    return data.json();
                }

                throw data;
            })
            .then((page) => setPage(page));
    }

    useEffect(() => {
        fetchPosts(1);
    }, []);

    const changePage = (event, pageNr) => {
        fetchPosts(pageNr);
    }

    return (
        <React.Fragment>
            <List spacing={2}>
                {page.posts.map(post => (
                    <Box key={post.title} sx={{mb: 3}}>
                        <Link to={`/post/${post.id}`} style={{textDecoration: 'none'}}>
                            <Typography variant='h4' component='h2' sx={{mb: 1}}>
                                {post.title}
                            </Typography>
                        </Link>

                        <Box alignItems='center'>
                            <Stack direction='row' alignItems='center' mb={1} spacing={1}>
                                <PersonIcon/>
                                <Typography component='span'>
                                    {post.author.firstName + post.author.lastName}
                                </Typography>

                                <CalendarMonthIcon/>
                                <Typography component='span'>
                                    {post.creationDate}
                                </Typography>

                                <CommentIcon/>
                                <Typography component='span'>
                                    12 comments
                                </Typography>
                            </Stack>
                        </Box>

                        <Typography variant='body'>{post.introduction}</Typography>
                    </Box>
                ))}
            </List>

            <Box>
                <Pagination count={page.pageCount} onChange={changePage}></Pagination>
            </Box>
        </React.Fragment>
    );
}

export default Posts;
