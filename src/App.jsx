import {Route, Routes} from "react-router-dom";
import HomePage from "./routes/Home";
import Publish from "./routes/Publish";
import Articles from "./routes/Articles";
import Weather from "./routes/Weather";
import Layout from "./layouts/Layout";
import React, {createContext, useEffect, useState} from "react";

export const ArticleContext = createContext();
export default function App() {
    const [articleList, setArticleList] = useState([{title: 'oui', body: 'non'}]);
    async function getArticleList() {
        const articles = await fetch('https://jsonplaceholder.typicode.com/posts/');
        return articles.json()
    }
    useEffect(() => {
        getArticleList().then((data) => setArticleList(data));
        console.log('bonjour')
    }, [])

    return (
        <ArticleContext.Provider value={articleList}>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/post" element={<Publish setArticleList={setArticleList} />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/weather" element={<Weather />} />
                </Routes>
            </Layout>
        </ArticleContext.Provider>
    )
}
