import type React from "react";
import { useSelector, useDispatch } from "react-redux"
import { motion } from "motion/react"
import { CaretDoubleRight } from "@phosphor-icons/react"
import { NotifyMenuMessage } from "./components/NotifyMenuMessage/NotifyMenuMessage";
import { Close } from "@store/Slices/NotifyMenuSlice";
import type { RootState } from "@store/store";
 
export const NotifyMenu: React.FC = () => {
    const isOpen = useSelector((state: RootState) => state.notifymenu.isOpen);
    const dispatch = useDispatch();
    
    return (
        <motion.section
            className="NotifyMenu"
            initial={{ transform: 'translateX(100%)' }}
            animate={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
            transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut' }}
        >
            <section className="NotifyMenu_header">
                <h1>Уведомления</h1>
                <button onClick={() => dispatch(Close())}>
                    <CaretDoubleRight size={24} weight="bold" />
                </button>
            </section>
            <section className="NotifyMenu_conetent">
                <NotifyMenuMessage />
                <NotifyMenuMessage />
                <NotifyMenuMessage />
            </section>
        </motion.section>
    )
}