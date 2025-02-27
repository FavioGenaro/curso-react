import { TwitterFollowCard } from "./TwitterFollowCard"
import './App.css'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

// componente: Función que retorna un elemento.
// elemento: Es lo que react renderiza en pantalla.

const App = () => {

    // función que recibe un string y devuelve el string + un @
    // const formatUser = (userName) => `@${userName}`

    // podemos pasar un elemento html como prop, y como es html se pasa directo al 
    // const elementUser = <span>Hola mundo</span>

    return (
        // Para colocar stylos como propiedad de html se colocan en un objeto, no podemos hacerlo con un string
        // <article style={{display:"flex"}}>

        // dos formas de colocar el fragment y envolver los elementos
        // <React.Fragment></React.Fragment>
        // <></>

        /*<TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            // podemos pasar una función como prop, si colocamos formatUser(valor) estamos pasando la ejecución y 
            // por ende un string que es lo que retorna la función
            formatUser={formatUser}

            // pasamos un elemento html
            elementUser={elementUser}
        >*/

        /*<TwitterFollowCard
            {...midudev} // siendo midudev un objeto con todas las propiedades que recibe el componente
        >*/


        <section className='App'>
        {
            /* isFollowing es un boleano y los demás son string
                podemos pasar solo isFollowing y significará true, no existe un !isFollowing, 
                por lo que para false se pasa isFollowing={false}
            */
            users.map(({ userName, name, isFollowing }) => (
                // key: es un identificador únio para el elemento para que pueda saber que cuales cambiar.
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                >
                    {/* este name representa al children del componente TwitterFollowCard, porque lo envuelve y se consideran sus hijos */}
                    {/* esto tmb sucede a nivel de elemento, que un <main> tiene hijos como <header>, <section>, etc. */}
                    {name} 
                </TwitterFollowCard>
            ))
        }
        </section>
    )
}

export default App

