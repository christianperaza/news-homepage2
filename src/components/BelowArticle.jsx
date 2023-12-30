export const BelowArticle = ({ image, altImage, numberTitle, title, paragraph  }) => {
    return (
        <article className="belowArticle">
            <img className="belowArticle-image" src={image} alt={altImage} />

            <aside className="belowArticle-aside">
                <h1 className="belowArticle-aside-h1">{numberTitle}</h1>

                <h2 className="belowArticle-aside-h2">{title}</h2>

                <p className="belowArticle-aside-p">{paragraph}</p>
            </aside>
        </article>
    )
}