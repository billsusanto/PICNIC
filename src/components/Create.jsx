import React from 'react';
import '../index.css'; // or the specific CSS file for this component

import CreateForm from './CreateForm';

const Create = () => {
    return (
        <div className="my-5 mx-3">
            <h1 className='quicksand-bold text-[45px] line'>Create a Picnic</h1>
            <CreateForm />
        </div>
    );
};

export default Create;