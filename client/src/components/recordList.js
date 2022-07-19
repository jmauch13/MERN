import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

export default function Create() {
    const [form, setForm] = useState({
        name: '',
        position: '',
        level: '',
    });
    const navigate = useNavigate();

    //update state properties
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    //handle submission
    async function onSubmit(e) {
        e.preventDefault();

        //post request sent to create url, add new record to database
        const newPerson = { ...form };
        
        await fetch('http://localhost:3001/record/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({ name: '', position: '', level: ''});
        navigate('/');
    }

    
}