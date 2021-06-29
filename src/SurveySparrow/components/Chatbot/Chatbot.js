import React, { useState } from 'react'

import classes from './Chatbot.module.css'
import Chat from './Chat'

const Chatbot = props => {
    const [start, setStart] = useState(false)
    const startConversationHandler = event => {
        event.stopPropagation()
        setStart(true)
    }

    return (
        <div role="button" onKeyUp={event => event.stopPropagation()} className={classes.Chatbot} onClick={event => event.stopPropagation()}>
            <div className={classes.introMessage}>
                <h4>Hi There</h4>
                {start ?
                    <p>The team typically replies in a few minutes.</p> :
                    <p>Hello Ask us anything. Share Your Feedback.</p>
                }
            </div>
            {start ?
                <Chat startConversationHandler={startConversationHandler} /> :
                <div className={classes.startConversation}>
                    <p>Start a Conversation</p>
                    <p>The team typically replies in a few minutes.</p>
                    <button onClick={(event) => startConversationHandler(event)}>New Conversation
                        <span className={classes.outerTri}>
                            <span className={classes.innerTri}></span>
                        </span>
                    </button>
                </div>
            }
        </div>
    )
}

export default Chatbot