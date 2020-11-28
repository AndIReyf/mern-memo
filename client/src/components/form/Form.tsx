import React from "react";
import useStyles from './styles'
import {Paper, Typography, TextField, Button} from "@material-ui/core";
//@ts-ignore
import FileBase from 'react-file-base64'
import {NewPostType} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {createPost, updatePost} from "../../thunk/posts";
import {RootReducer} from "../../store/store";
import {PostsType} from "../../reducers/posts";

export function Form({currentId, setCurrentId}: PropsType) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const posts = useSelector<RootReducer, PostsType>(state => state.posts)

    const [postData, setPostData] = React.useState<NewPostType>({
        title: '', creator: '', message: '', tags: [], selectedFile: ''
    })

    React.useEffect(() => {
        if (currentId) {
            const post = posts.find(p => p._id === currentId)
            if (post) setPostData(post)
        }
    }, [currentId, posts])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }

        clearFields()
    }

    const fileBaseHandler = (base64: any) => setPostData({...postData, selectedFile: base64})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostData({...postData, [e.target.name]: e.target.value})
    }

    const clearFields = () => {
        setCurrentId('')
        setPostData({title: '', creator: '', message: '', tags: [], selectedFile: ''})
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}
                  className={`${classes.root} ${classes.form}`}
            >
                <Typography variant='h6'>{`${currentId ? 'Editing' : 'Creating'} a post`}</Typography>
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
                              onDone={({base64}: any) => fileBaseHandler(base64)}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary'
                        size='large' type='submit' fullWidth
                >
                    Submit
                </Button>
                <Button className={classes.buttonSubmit} variant='contained' color='secondary'
                        size='small' fullWidth onClick={clearFields}
                >
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

type PropsType = {
    currentId: string
    setCurrentId: (id: string) => void
}
