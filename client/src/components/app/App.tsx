import React from 'react';
import memories from '../../assets/img/memories.png'
import {AppBar, Container, Grid, Grow, Typography} from "@material-ui/core";
import {Form} from "../form/Form";
import {Posts} from "../posts/Posts";
import useStyles from '../../styles'
import {useDispatch} from "react-redux";
import {fetchPosts} from "../../thunk/posts";
import './index.css'

export const App = React.memo(function App() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [currentId, setCurrentId] = React.useState<string>('')

    React.useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt="Memories" height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
})
