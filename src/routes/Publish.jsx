import {useContext, useEffect, useState} from "react";
import {ArticleContext} from "../App";
import Article from "../components/Article/Article";

function Publish({ setArticleList }) {
    const articleList = useContext(ArticleContext);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let obj = {};
        for (var key of data.keys()) {
            obj[key] = data.get(key);
        }
        console.log(obj)
        setIsSubmitted(true)
        // setArticleList(articleList.(obj));
    }

    useEffect(() => {
        console.log(articleList)
    })

    return (
        <>
            <p>ma page publish</p>

            <form onSubmit={submit}>
                <label htmlFor="title">Titre</label>
                <input id="title" name="title"/>
                <label htmlFor="body">Contenu</label>
                <input id="body" name="body"/>
                <button type="submit">Soumettre</button>
            </form>

            {isSubmitted && <p>Submitted !</p>}
        </>
    );
}

export default Publish;
