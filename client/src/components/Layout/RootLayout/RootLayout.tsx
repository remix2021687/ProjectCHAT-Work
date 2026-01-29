import { TopNavMenu } from "./components/TopNavMenu/LeftNavMenu"

interface RootLayoutProps {
    children: React.ReactNode
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <>
            <TopNavMenu />
            <main>
                {children}
            </main>
        </>
    )
}