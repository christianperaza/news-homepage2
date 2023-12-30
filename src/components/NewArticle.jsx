export const NewArticle = ({ title, paragraph }) => {
    return (
        <article className="newAside-article">
            <h2 className="newAside-article-header">{title}</h2>

            <p className="newAside-article-p">{paragraph}</p>
        </article>
    )
}