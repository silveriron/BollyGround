import React from 'react';
import { TextField, Button } from '@mui/material'

import styles from './SearchForm.module.css'

const SearchForm = () => {
    return (
        <form className={styles.container}>
            <div className={styles.inputBox}>
            <TextField id="outlined-basic" size='small' fullWidth label="Search" variant="outlined" />
            </div>
            <Button variant='contained'>Search</Button>
        </form>
    );
};

export default SearchForm;