interface RouterComponentProps {
    Layout: React.ComponentType<{ children: React.ReactNode }>,
    Content: React.ComponentType
}

export const PageTemplate: React.FC<RouterComponentProps> = ({ Layout, Content }) => {
    return (
        <Layout>
            <Content />
        </Layout>
    )
}