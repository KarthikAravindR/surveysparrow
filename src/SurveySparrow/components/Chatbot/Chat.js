import React, { useState, useRef, useEffect } from 'react'

import classes from './Chatbot.module.css'
import Sparrow from '../../../Assets/sparrow favicon.png'

const Chat = props => {
    const [message, setMessage] = useState('')
    const userTypingHandler = event => {
        event.stopPropagation()
        setMessage(event.target.value)
    }
    const userEnterHandler = event => {
        event.stopPropagation()
        if (event.keyCode === 13 && message.length !== 0) {
            storeMessageHandler(event)
        }
    }
    const [messages, setMessages] = useState([])
    const storeMessageHandler = event => {
        event.stopPropagation()
        setMessages(messages => messages.concat(message))
        setMessage('')
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                setMessages(messages => messages.concat(data.slip.advice))
            })
            .catch(error => {
                setMessages(messages => messages.concat("some error occured, Please try again in sometime"))
            })
    }
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <div className={classes.chatConversation}>
            <div className={classes.chatMessages}>
                {messages.map((m, i) => <div className={classes.chatMessage} key={i}>{m}</div>)}
                <div ref={messagesEndRef} />
            </div>
            <div className={classes.chatDesc}>
                <div><img src={Sparrow} alt="icon" /></div>
                <p>we run on surveysparrow</p>
            </div>
            <div className={classes.chatTyping}>
                <input
                    type="text"
                    autoFocus
                    onClick={(event) => props.startConversationHandler(event)}
                    onChange={(event) => userTypingHandler(event)}
                    onKeyUp={(event) => userEnterHandler(event)}
                    value={message} />
                <button onClick={(event) => storeMessageHandler(event)} disabled={message.length === 0}>
                    <span className={classes.outerTri}>
                        <span className={classes.innerTri}></span>
                    </span>
                </button>
            </div>
        </div> 
    )
}

export default Chat