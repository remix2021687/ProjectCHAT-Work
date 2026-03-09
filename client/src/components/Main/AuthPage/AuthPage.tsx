import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Flip } from 'gsap/Flip'
import icon from "@assets/svg/Overlay+Border.svg"

gsap.registerPlugin(Flip)

export const AuthPage: React.FC = () => {
    const tabsData: Array<{id: string; title: string}> = [
        {id:"singUp", title: "Sing Up"},
        {id:"singIn", title: "Sing In"}
    ]
    const [activeTab, setActiveTab] = useState(tabsData[0].id)
    const indecatorRef = useRef<HTMLSpanElement>(null)
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([])

    useEffect(() => {
        document.title = "Paradox - Auth"
    })

    useEffect(() => {
        const active = tabsRef.current.find(tab => tab?.dataset.id === activeTab)

        if (active && indecatorRef.current) {
            indecatorRef.current.style.width = `${active.offsetWidth}px`
            indecatorRef.current.style.left = `${active.offsetLeft}px`
        }
    }, [])

    const handleTabClick = (id: string) => { 
        if (id === activeTab) return

        const state = Flip.getState(indecatorRef.current)
        setActiveTab(id);

        const newActive = tabsRef.current.find(tab => tab?.dataset.id === id)
        if (newActive && indecatorRef.current) {
            indecatorRef.current.style.left = `${newActive.offsetLeft}px`;
            indecatorRef.current.style.width = `${newActive.offsetWidth}px`;
        }

        Flip.from(state, {
            duration: 0.5,
            ease: "power2.out",
            absolute: true
        })

    }

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
                <section className="AuthPage_right_block_select">
                    {
                        tabsData.map((tab, index) => (
                            <button
                                key={tab.id}
                                ref={el => { tabsRef.current[index] = el }}
                                data-id={tab.id}
                                className={activeTab === tab.id ? "active" : ""}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                <span>{tab.title}</span>
                            </button>
                        ))
                    }
                    <span ref={indecatorRef} className="AuthPage_right_block_select_indecator"></span>
                </section>
                <form className="AuthPage_right_block_form">
                    <section className="AuthPage_right_block_form_header">
                        <h2>Welcome back</h2>
                        <p>Join our community today and start streaming.</p>
                    </section>
                </form>
            </section>
        </section>
    )
}