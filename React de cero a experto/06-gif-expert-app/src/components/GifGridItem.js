

export const GifGridItem = ({title,url}) => { // recibimos las propieades directamente y las destructuramos del prop
    return(
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={ title }/>
            <p>{title}</p>
        </div>
    )
}