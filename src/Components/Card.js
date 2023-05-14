import style from "./style.module.css"

const Card = ({ tittle, image, description }) => {
    return (
        <div className={style.cardTitle}>
            <span class="icon-container icon-big">
                <img
                    class=""
                    width="48"
                    height="48"
                    src={image}
                    data-src={image}
                    alt={tittle}
                />
            </span>
            <p class="title"> {tittle}</p>
            <p class="description">{description}</p>
        </div>
    )
}
export default Card;

