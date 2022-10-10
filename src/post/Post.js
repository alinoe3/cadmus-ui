import {Alert, Box, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PostInfo from "./PostInfo";

const Post = () => {

    const [post, setPost] = useState({author: {}});
    const [error, setError] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/post/${params.postId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                throw Error("There was an error while getting the post.")
            })
            .then(
                post => setPost(post),
                error => setError(error.message)
            );
    }, [params.postId]);

    return (
        <Box>
            {!error ? (
                <Box>
                    <Typography variant='h4'>
                        {post.title}
                    </Typography>

                    <PostInfo author={post.author} creationDate={post.creationDate} commentCount={5}/>

                    <Typography variant='h6' mt={1}>
                        {post.introduction}
                    </Typography>

                    <Typography variant='body1' mt={1}>
                        {post.content}
                    </Typography>
                </Box>
            ) : (
                <Alert severity='error'>
                    {error}
                </Alert>
            )}
        </Box>
    );
}

export default Post;
