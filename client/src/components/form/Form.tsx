import React from "react";
import useStyles from './styles'
import {Paper, Typography, TextField, Button} from "@material-ui/core";
//@ts-ignore
import FileBase from 'react-file-base64'
import {NewPostType} from "../../api";
import {useDispatch} from "react-redux";
import { createPost } from "../../thunk/posts";

export function Form() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [postData, setPostData] = React.useState<NewPostType>({
        title: '', creator: '', message: '', tags: '', selectedFile: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(createPost(postData))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostData({...postData, [e.target.name]: e.target.value})
    }

    const clear = () => {
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}
                  className={`${classes.root} ${classes.form}`}
            >
                <Typography variant='h6'>Creat a post</Typography>
                <TextField name='creator' fullWidth variant='outlined' label='Creator'
                           value={postData.creator} onChange={handleChange}
                />
                <TextField name='title' fullWidth variant='outlined' label='Title'
                           value={postData.title} onChange={handleChange}
                />
                <TextField name='message' fullWidth variant='outlined' label='Message'
                           value={postData.message} onChange={handleChange}
                />
                <TextField name='tags' fullWidth variant='outlined' label='Tags'
                           value={postData.tags} onChange={handleChange}
                />
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false}
                              onDone={({base64}: any) => setPostData({...postData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary'
                        size='large' type='submit' fullWidth
                >
                    Submit
                </Button>
                <Button className={classes.buttonSubmit} variant='contained' color='secondary'
                        size='small' fullWidth onClick={clear}
                >
                    Clear
                </Button>
            </form>
        </Paper>
    )
}