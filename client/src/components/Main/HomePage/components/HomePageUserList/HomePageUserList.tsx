import { Plus, MagnifyingGlass } from "@phosphor-icons/react"
import { UserList } from "./components/UserList"
import avatarImg from "@assets/img/avatar.png"


export const HomePageUserList: React.FC = () => {
    type FakeUser = {
        first_name: string
        last_name: string
        avatar: string
        last_message: string
    }

    const fakeUsers: Array<FakeUser> = [
        {
            first_name: "Иван",
            last_name: "Иванов",
            avatar: avatarImg,
            last_message: "Привет! Как дела?"
        },
        {
            first_name: "Мария",
            last_name: "Петрова",
            avatar: avatarImg,
            last_message: "Не забудь про встречу завтра."
        },
        {
            first_name: "Алексей",
            last_name: "Сидоров",
            avatar: avatarImg,
            last_message: "Отправил тебе документы на почту."
        },
        {
            first_name: "Иван",
            last_name: "Иванов",
            avatar: avatarImg,
            last_message: "Привет! Как дела?"
        },
        {
            first_name: "Мария",
            last_name: "Петрова",
            avatar: avatarImg,
            last_message: "Не забудь про встречу завтра."
        },
        {
            first_name: "Алексей",
            last_name: "Сидоров",
            avatar: avatarImg,
            last_message: "Отправил тебе документы на почту."
        }
    ]

    return (
        <section className="HomePageUserList">
            <section className="HomePageUserList_header">
                <h2>Чаты</h2>
                <button>
                    <Plus size={20} weight="bold" color="white"/>
                </button>
            </section>
            <section className="HomePageUserList_category">
                <button>Все</button>
                <button>Приватные</button>
                <button>Общие</button>
            </section>
            <section className="HomePageUserList_conetent">
                <label htmlFor="search_input" className="HomePageUserList_conetent_search">
                    <MagnifyingGlass size={25} opacity={0.5}/>
                    <input id="search_input" placeholder="Поиск людей и каналов..." />
                </label>
                <section className="HomePageUserList_conetent_list_user">
                    {
                        fakeUsers.map((user, index) => 
                            <UserList
                                key={index + 1}
                                first_name={user.first_name}
                                last_name={user.last_name}
                                avatar={user.avatar}
                                last_message={user.last_message}
                            />
                        )
                    }
                </section>
            </section>
        </section>
    )
}