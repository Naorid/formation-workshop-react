export default function Article({ article }) {
    return (
        <>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
        </>
    )
}
