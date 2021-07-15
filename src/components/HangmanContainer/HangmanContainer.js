import React from 'react'
import HangmanImage from '../../Images/hangman.jpg'
import LetterButtonContainer from '../LetterButtonContainer/LetterButtonContainer'
import './HangmanContainer.css'

const HangmanContainer = () => (

    <div className='HangmanContainer__div'>
    <div className='HangmanContainer__img'>
        <img src={(HangmanImage)} alt='hangman' />
    </div>
    <div>
        <LetterButtonContainer />
    </div>
    </div>

)

export default HangmanContainer;