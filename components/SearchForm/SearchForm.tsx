import React from 'react';
import { TextField, Button } from '@mui/material'
import { debounce } from 'debounce';

import styles from './SearchForm.module.css'

interface SearchFormProps {
    setKeyword: React.Dispatch<React.SetStateAction<string>>
}

const SearchForm = ({setKeyword}: SearchFormProps) => {

    const onChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    },500)

    const onSubmit = (e:React.FormEvent) => e.preventDefault()

    return (
        <form onSubmit={onSubmit} className={styles.container}>
            <div  className={styles.inputBox}>
            <TextField id="outlined-basic" size='small'  onChange={onChange} fullWidth label="Search" variant="outlined" />
            </div>
            <Button variant='contained'>Search</Button>
        </form>
    );
};

export default SearchForm;