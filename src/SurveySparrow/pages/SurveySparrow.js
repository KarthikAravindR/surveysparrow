import React, { useState } from 'react'

import classes from './SurveySparrow.module.css'
import Header from '../../shared/Navigation/Header/Header'
import Chatbot from '../components/Chatbot/Chatbot';
import Sparrow from '../../Assets/Sparrow Bird.png'

const SurveySparrow = props => {
    const [chat, setChat] = useState(false)
    return(
        <div className={classes.container}>
                {/* <img src={Banner} alt="Banner" /> */}
                <Header />
                <main>
                    <div className={classes.tagLine}>
                        <p>Where</p>
                        <p>words</p>
                        <p>fail,</p>
                        <p>Music</p>
                        <p>Speaks.</p>
                    </div>
                    <div role="button" className={classes.Chatbot} onClick={() => setChat(!chat)} onKeyDown={() => setChat(chat)}>
                        {chat ? <p>&times;</p> : <img src={Sparrow} alt="icon" />}
                        {chat && <Chatbot />}
                    </div>
                </main>
        </div>
    )
}

export default SurveySparrow