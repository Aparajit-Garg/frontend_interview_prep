import React, { useState } from "react"
import ReactDOM from 'react-dom/client'

const useCopy = () => {
    const [copiedText, setCopiedText] = useState()

    const copy = async (text) => {
        if (!navigator?.clipboard) {
            console.warn("clipboard not supported");
            return;
        }

        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
        } catch(error) {
            console.error("Failed copying text: ", text)
            setCopiedText(null)
        }
    }

    return [copiedText, copy]
}

const App = () => {
    const [copiedText, copy] = useCopy();
    
    return (
        <button onClick={() => copy('Hello World')}> Click me - Copied Text: {copiedText} </button>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)