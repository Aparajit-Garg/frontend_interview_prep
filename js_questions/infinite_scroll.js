
// Problem statement: create an infinite scroll in react

const App = () => {
    const [count, setCount] = useState(50)

    useEffect(() => {

        function checkScroll() {
            if (window.innerHeight + window.scrollY > window.document.body.offsetHeight - 50)
                setCount(prev => prev + 50)
        }

        let scroll = window.addEventListener('scroll', checkScroll)

        return () => window.removeEventListener(scroll)
    }, [count])

    const elements = []
    
    for (let i = 0; i < count; i++)
        elements.push(<div key={i}> {i + 1} </div>)

    // basically render the elements array so upon reaching the end of the page, it will add another 50
    // elements in the list and the infinite scroll will be implemented
    return <main> {elements} </main>
}