import type React from "react";

interface AppProps {
    Router: React.ComponentType<{ components: Record<string, React.ComponentType> }>,
    Components: Record<string, React.ComponentType<any>>
}

export const App: React.FC<AppProps> = ({ Router, Components }) => {
    return (
        <Router components={Components} />
    )
}