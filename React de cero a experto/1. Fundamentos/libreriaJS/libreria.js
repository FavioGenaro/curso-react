
// crea al elemento con sus atributos
export function createElement(element, attr) { 
    let elem = document.createElement(element)
    elem.id = attr.id
    elem.classList.add(attr.class)

    return elem
}

// muestra el elemento, lo añade al HTML
export function render(element, padre) { 
    padre.appendChild(element)
}