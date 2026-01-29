import type React from "react";
import avatarImg from "@assets/img/avatar.png"

interface NotifyMenuMessageProps {
    avatar: string;
    username: string;
    text: string;
}

export const NotifyMenuMessage: React.FC<NotifyMenuMessageProps> = ({avatar, username, text}) => {
    return (
        <section className="NotifyMenuMessage">
            <img src={avatar ? avatar: avatarImg} alt="avatar"/>
            <div className="NotifyMenuMessage_content">
                <p>
                    <strong>
                        {username ? username : "@test-user"}
                    </strong>
                    {text ? text : ` Это тестовое уведомление для проверки компонента уведомлений.`}
                </p>
            </div>
        </section>
    )
}