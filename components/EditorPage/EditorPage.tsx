import React from 'react';

import EditorForm from '../EditorForm/EditorForm';
import styles from './EditorPage.module.css'

const EditorPage = () => {
    return (
        <main className={styles.container}>
            <EditorForm />
        </main>
    );
};

export default EditorPage;