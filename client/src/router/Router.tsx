import type React from "react"
import { Route, Routes, Navigate } from "react-router"
import { PageTemplate } from "./components/PageTemplate/PageTemplate"

interface RouterProps {
    components: Record<string, React.ComponentType<any>>
}

export const RouterComponent: React.FC<RouterProps> = ({ components }) => {
    const { HomePage, RootLayout } = components

    return (
        <Routes>
            <Route index element={<PageTemplate Layout={RootLayout} Content={HomePage}/>} />
        </Routes>
    )
}