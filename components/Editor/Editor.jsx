import React, { Component } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';


const editorConfiguration = {
    simpleUpload: {
        uploadUrl: '/api/image',
        // withCredentials: true,
    }
}

const PostEditor = ({onChange}) => {
    return (
            <div className="App">
                <CKEditor
                    editor={ Editor }
                    config={ editorConfiguration }
                    data=""
                    onChange={onChange}
                />
            </div>
        );
}

export default PostEditor;
