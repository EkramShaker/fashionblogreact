import React from 'react';
import ArticleCard from './ArticleCard';

function ArticleList() {
    const articles = [
        {
            title: "On the Street in Brooklyn",
            date: "11/12/20",
            image: "/blog-image-1.jpg",  
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            title: "Vintage in Vogue",
            date: "11/11/20",
            image: "/blog-image-2.jpg", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ];

    return (
        <main>
            {articles.map((article, index) => (
                <ArticleCard
                    key={index}
                    title={article.title}
                    date={article.date}
                    image={article.image}
                    description={article.description}
                />
            ))}
        </main>
    );
}

export default ArticleList;
