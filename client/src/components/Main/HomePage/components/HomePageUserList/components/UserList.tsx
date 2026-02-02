interface UserListProps {
    first_name: string;
    last_name: string;
    avatar: string;
    last_message: string;
}

export const UserList: React.FC<UserListProps> = ({ first_name, last_name, avatar, last_message }) => {
    return (
        <section className="UserList">
            <img src={avatar} alt={`${first_name} ${last_name}`} />
            <section className="UserList_content">
                <h3>{first_name} {last_name}</h3>
                <p>{last_message}</p>
            </section>
        </section>
    )
}