import { useEffect } from "react"
import icon from "@assets/svg/Overlay+Border.svg"

export const AuthPage: React.FC = () => {
    useEffect(() => {
        document.title = "Paradox - Auth"
    })
    return (
        <section className="AuthPage">
            <section className="AuthPage_left_block">
                <img src={icon} alt="icon" />
                <h2>
                    Chatting and Video Posting <br />
                    on <span>Paradox</span> Project
                </h2>
                <p>
                    Join the world's fastest growing community of creators and
                    streamers. Share your passions in real-time.
                </p>
            </section>
            <section className="AuthPage_right_block">

            </section>
        </section>
    )
}