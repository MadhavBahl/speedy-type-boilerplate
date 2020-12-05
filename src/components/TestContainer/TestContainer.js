import { TypingChallengeContainer } from '../TypingChallengeContainer/TypingChallengeContainer'
import { TryAgain } from './../TryAgain/TryAgain'
import './TestContainer.css'

export const TestContainer = () => {
    const showChallenge = true; // temporary var (Will be replaced while building the app)

    return (
        <div className="test-container">
            {/* Show the try again or start screen */}
            {
                showChallenge
                    ? <div className="typing-challenge-cont">
                        
                    </div>
                    : <div className="try-again-cont">
                    
                    </div>
            }            
        </div>
    )
}