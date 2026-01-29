import bookmakr from "@assets/svg/bookmark.svg"
import group_icon from "@assets/svg/group-icon.svg"
import night_mode from "@assets/svg/night-mode.svg"
import setting from "@assets/svg/setting.svg"
import avatar from "@assets/img/avatar.png"
import phone from "@assets/svg/phone.svg";
import video from "@assets/svg/video.svg";
import notify from "@assets/svg/notification.svg";
import { NotifyMenu } from "./components/NotifyMenu/NotifyMenu"
import { useSelector, useDispatch } from "react-redux"
import { Open } from "@store/Slices/NotifyMenuSlice";

export const TopNavMenu: React.FC = () => {
    const dispatch = useDispatch();
    
    return (
        <>
            <nav className="TopNavMenu">
                <section className="TopNavMenu_left_block">
                    <button>
                        <img src={bookmakr} alt="bookmakr" />
                    </button>
                    <button>
                        <img src={group_icon} alt="bookmakr" />
                    </button>
                    <button>
                        <img src={night_mode} alt="bookmakr" />
                    </button>
                    <button>
                        <img src={setting} alt="bookmakr" />
                    </button>
                </section>
                <section className="TopNavMenu_center_info_block">
                    <section className="Person_info">
                        <img src={avatar} alt="avatar" />
                        <section className="Person_info_name_activity">
                            <h3>Test User</h3>
                            <span>был(а) в сети 15 минут назад</span>
                        </section>
                    </section>
                    <section className="Person_info_voice">
                        <button>
                            <img src={phone} alt="phone" />
                        </button>
                        <button>
                            <img src={video} alt="video" />
                        </button>
                    </section>
                </section>
                <section className="TopNavMenu_left_info_block">
                    <button onClick={() => dispatch(Open())}>
                        <img src={notify} alt="notification"/>
                    </button>
                </section>
            </nav>
            <NotifyMenu />
        </>
    )
}