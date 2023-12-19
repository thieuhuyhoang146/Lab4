import React, { useState, useEffect } from 'react';
import { useMessages } from './useMessages';

export default function Ex17() {
    const [forum, setForum] = useState('nasa');
    const {
        data: messages,
        loading: messagesLoading,
        error: messageError,
        fetchMessages
    } = useMessages();

    useEffect(() => {
        fetchMessages(forum);
    }, [forum, fetchMessages]);

    return (
        <div>
            <h3 style={{ color: "red" }}>Ex 1.7</h3>
            <button onClick={() => setForum('nasa')}>NASA</button>
            <button onClick={() => setForum('notNasa')}>Not NASA</button>

            {messageError ? (
                <div className='error'>
                    Something went wrong:
                    <div className='error-contents'>
                        {messageError.message}
                    </div>
                </div>
            ) : messagesLoading ? (
                <div className='loading'>Loading...</div>
            ) : messages && messages.length ? (
                <dl>
                    {messages.map((m, index) => (
                        <React.Fragment key={index}>
                            <dt>{m.author}</dt>
                            <dd>{m.text}</dd>
                        </React.Fragment>
                    ))}
                </dl>
            ) : (
                'No messages'
            )}
        </div>
    );
}
