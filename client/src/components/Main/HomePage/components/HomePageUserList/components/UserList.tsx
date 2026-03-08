interface UserListProps {
    first_name: string;
    last_name: string;
    avatar: string;
    last_message: string;
    last_message_time: string;
    is_online: boolean;
}

export const UserList: React.FC<UserListProps> = ({ first_name, last_name, avatar, last_message, last_message_time,is_online }) => {
    return (
        <section className="UserList">
            <section className="UserList_avatar">
                <img src={avatar} alt={`${first_name} ${last_name}`} />
                {is_online && <span></span>}
            </section>
            <section className="UserList_content">
                <section className="UserList_content_header">
                    <h3>{first_name} {last_name}</h3>
                    <h5>{last_message_time}</h5>
                </section>
                <p>{last_message}</p>
            </section>
        </section>
    )
}