
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Timer from './Timer'

const App = () => {
    return (
        <Timer duration={2 * 25 * 62 * 60 * 1000} />
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)