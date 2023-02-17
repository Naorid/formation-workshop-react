import {useContext} from "react";
import {ArticleContext} from "../App";
import Article from "../components/Article/Article";

function Articles() {
    const articleList = useContext(ArticleContext)

    return (
        <>
            ma page articles
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

export default Articles;
