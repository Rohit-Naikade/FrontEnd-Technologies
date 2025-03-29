export default function Tabs({content, children, Container = 'menu'}){
    return <div>
        <Container>
            {content}
        </Container>
        {children}
    </div>
}