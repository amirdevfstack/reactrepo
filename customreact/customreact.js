
const mainContainer = document.getElementById("root");

function customRender(element, container) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props) { 
        if(prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop]);
    } 

    container.appendChild(domElement);
}
const reactElement= {
    type: 'a',
    props:{
        href: 'https://reactjs.org',
        target: '_blank'
    },
    children: "Learn React"
}

customRender(reactElement, mainContainer)