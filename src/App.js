import Header from "./Header";
import {Container, createTheme, CssBaseline, Grid, ThemeProvider} from "@mui/material";
import {useEffect, useState} from "react";
import Posts from "./post/Posts";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Post from "./post/Post";

function App() {

    const [appInfo, setAppInfo] = useState({});
    const theme = createTheme();

    useEffect(() => {
        fetch('http://localhost:8080/app-info')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                throw Error(response.statusText);
            })
            .then((data) => {
                setAppInfo(data);
            })
            .catch(error => {
                console.error('There was an error.', error);
            });
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline/>

                <Container>
                    <Header title={appInfo.title}/>

                    <main>
                        <Grid container sx={{mt: 1}} spacing={1}>
                            <Grid item xs={9}>
                                <Routes>
                                    <Route exact path='/' element={<Posts/>}/>
                                    <Route exact path='/post/:postId' element={<Post/>}/>
                                </Routes>
                            </Grid>

                            <Grid item xs={3}>
                                <Sidebar about={appInfo.about}/>
                            </Grid>
                        </Grid>
                    </main>

                    <Footer/>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
