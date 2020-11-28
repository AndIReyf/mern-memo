import React from "react";
import useStyles from './styles'
import {PostType} from "../../../reducers/posts";
import ThumbUp from '@material-ui/icons/ThumbUpAlt'
import Delete from '@material-ui/icons/Delete'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import moment from 'moment'

export function Post({post, setCurrentId}: PropsType) {
    const classes = useStyles()

    const editHandler = () => setCurrentId(post._id)

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: '#fff'}} size='small' onClick={editHandler}>
                    <MoreHoriz fontSize='default'/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>
                    {post.tags.map(t => `#${t}`)}
                </Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>
                {post.title}
            </Typography>
            <CardContent>
                <Typography gutterBottom>
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={()=>{}}>
                    <ThumbUp fontSize='small'/>
                    Like
                    {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={()=>{}}>
                    <Delete fontSize='small'/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

type PropsType = {
    post: PostType
    setCurrentId: (id: string) => void
}
