import { useState } from 'react'

// Pasamos propiedades al componente, por defecto, sino pasamos un valor, será undefined. 
// userName por defecto, en caso no se pase tendrá el valor de unknow
// children es todo lo que envuelve este componente, que puede ser un texto, elemento u otros componentes
export function TwitterFollowCard ({ children, userName="unknow", initialIsFollowing }) {
    // Los props deberian ser inmutados
    // no debebemos modificar la prop}, porque es un mala practica
    // userName = `@{userName}`
    // si queremos hacer alguna modificación debemos crear otra variable, lo mismo si es para un variables tipo number, array, etc.
    // const userName = `@{userName}`;

    // useState, hook de react, valor inicial initialIsFollowing, este valor solo se aplica una vez.
    // Digamos que el padre App tiene un useState para el valor initialIsFollowing, este se lo pasamos al hijo TwitterFollowCard
    // cuando esa variable cambia en el padre y este se vuelve a renderizar junto a sus hijos, no cambia el valor dentro del hijo
    // porque el estado no se propaga a los hijos. (ESTO HAY QUE TOMARLO COMO UNA VERDAD)
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); 

    console.log('[TwitterFollowCard] render with userName: ', userName)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => { // click al boton
        setIsFollowing(!isFollowing) // cambiamos el estado
    }

    // normalmente indicamos la partel del DOM tenemos que cambiar, pero React toma en cuenta el estado
    // del componente anterior y el actual a redendirizar cuando cambia, esto para solo cambiar lo necesitario y no cargar todos los elementos
    // Cuando un Padre cambia su estado se renderizan todos sus componentes hijos si o si.


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                {/* colocamos llaves para */}
                <img
                    className='tw-followCard-avatar'
                    alt='El avatar de midudev'
                    src={`https://unavatar.io/${userName}`} 
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                {/* la clase tmb podemos pasarla como texto, donde buttonClassName es un string */}
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}