//Will be the entry point for the members area
//Users will come to this page and enterr a universal access code (Sent via post or email)

'use client';

import { FormEvent, useState } from 'react';

export default function MembersAccessPage () {
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        //Temp placeholder message 
        setMessage('form submitted.');
    }

    
}