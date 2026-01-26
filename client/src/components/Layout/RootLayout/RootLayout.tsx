import { LeftNavMenu } from "./components/LeftNavMenu/LeftNavMenu"

interface RootLayoutProps {
    children: React.ReactNode
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <>
            <LeftNavMenu />
            <main>
                {children}
            </main>
        </>
    )
}