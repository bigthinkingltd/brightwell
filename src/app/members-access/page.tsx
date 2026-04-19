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

    return (
        <main className="">
            <div className="">
                <h1 className="">Memebers Area</h1>

                <p className="">
                    enter the access code from your posted letter to continue to the members area.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className=""
                >
                    <label htmlFor="members-code" className="">
                        Access code
                    </label>

                    <input
                        id="members-code"
                        type="text"
                        value={code}
                        onChange={(event) => setCode(event.target.value)}
                        placeholder="Enter your code"
                        className=""
                    />

                    <button
                        type="submit"
                        className=""
                    >
                        Enter members area
                    </button>
                </form>


                <div className="">
                    {message && <p>{message}</p>}
                </div>
            </div>
        </main>
    );

}