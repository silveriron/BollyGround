import { Button, TextField } from '@mui/material';
import React from 'react';

import Title from '../Title/Title';
import Editor from '../Editor/Editor'
import styles from './EditorForm.module.css'

const EditorForm = () => {
    return (
        <form className={styles.container}>
            <Title name="Write" type='main' />
            <TextField variant='outlined' size='small' id='title' label="Title" />
            <TextField variant='outlined' size='small' id='desc' label="Description" />
            <Editor/>
            <div className={styles.btnContainer}>
                <Button variant='outlined' type="button" color='primary'>
                    Thumbnail
                    <input type="file" accept='image/*'  hidden />
                </Button>
                <Button variant='contained' type="button" color='primary' >Post</Button>
            </div>
        </form>
    );
};

export default EditorForm;