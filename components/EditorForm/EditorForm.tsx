import { Button, TextField } from '@mui/material';
import React, {useState, useRef} from 'react';
import axios from 'axios';

import Title from '../Title/Title';
import Editor from '../Editor/Editor'
import styles from './EditorForm.module.css'
import useInput from '../../hooks/useInput';
import LoadingModal from '../LoadingModal/LoadingModal';
import { postImage, uploadPost } from '../../lib/api/api';

const EditorForm = () => {
    const {value: title, onChange: onChangeTitle} = useInput("")
    const {value: desc, onChange: onChangeDesc} = useInput("")
    const [thumbnail, setThumbnail] = useState<File>()
    const [content, setContent] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    

    const onChangeContent = (event, editor) => {
        const content = editor.getData();
        setContent(content)
    }

    const onChangeThumbnail = (e:React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files as FileList
        setThumbnail(files[0])

    }

    const createPost = async (e:React.FormEvent) => {
        e.preventDefault();
        if (!title || !desc || !content || !thumbnail) {
            alert('항목을 모두 채워주세요.')
            return
        }

        setIsLoading(true);

        const formData = new FormData();
        formData.append('upload', thumbnail);
        
        try {
            const thumbnailURL = await postImage(formData)
            const res = uploadPost(title, desc, content, thumbnailURL)
        } catch (e) {
            alert(e.message)
        }

        setIsLoading(false)
    }

    return (
        <>
        <LoadingModal isLoading={isLoading} />
        <form className={styles.container} onSubmit={createPost}>
            <Title name="Write" type='main' />
            <TextField variant='outlined' size='small' id='title' label="Title" value={title} onChange={onChangeTitle} />
            <TextField variant='outlined' size='small' id='desc' label="Description" value={desc} onChange={onChangeDesc} />
            <Editor onChange={onChangeContent}/>
            <div className={styles.btnContainer}>
                <Button variant='outlined' type="button" onClick={() => inputRef.current?.click()} color='primary'>
                    Thumbnail
                    <input type="file" accept='image/*' id="thumbnail" name='thumbanil' ref={inputRef} onChange={onChangeThumbnail} hidden />
                </Button>
                <Button variant='contained' type="submit" color='primary' >Post</Button>
            </div>
        </form>
        </>
    );
};

export default EditorForm;