import React, { Component } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';


const editorConfiguration = {
    simpleUpload: {
        uploadUrl: '/api/posts',
        withCredentials: true,
    }
}

const PostEditor = () => {
    return (
            <div className="App">
                <h2>Using CKEditor 5 from online builder in React</h2>
                <CKEditor
                    editor={ Editor }
                    config={ editorConfiguration }
                    data="<p>Hello from CKEditor 5!</p>"
                />
            </div>
        );
}

export default PostEditor;
