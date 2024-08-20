import React from 'react'
import ReactDOM from 'react-dom/client'

import Chai from './chai.jsx'

const reactElement = React.createElement(
    'a',
    {'href': 'https://reactjs.org', 'target': '_blank'},
    'Click Me here' 
)
ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
 
)
