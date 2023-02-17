import {useContext, useEffect} from "react";
import {ArticleContext} from "../App";
import Article from "../components/Article/Article";

function Publish({ setArticleList }) {
    const articleList = useContext(ArticleContext)

    function submit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        console.log(data)
        // setArticleList([]);
    }

    useEffect(() => {

    })

    return (
        <>
            <p>ma page publish</p>

            <form onSubmit={submit}>
                <label htmlFor="title">Titre</label>
                <input id="title"/>
                <label htmlFor="body">Body</label>
                <input id="body"/>
                <button type="submit">Soumettre</button>
            </form>
            <ul>
                {articleList.map((article) => (
                    <li key={article.title}>
                        <Article article={article}/>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Publish;
