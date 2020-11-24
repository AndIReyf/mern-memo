import React from 'react';
import memories from '../../assets/img/memories.png'
import {AppBar, Container, Grid, Grow, Typography} from "@material-ui/core";
import {Form} from "../form/Form";
import {Posts} from "../posts/Posts";
import useStyles from '../../styles'

export const App = React.memo(function App() {
    const classes = useStyles()

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
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
})
