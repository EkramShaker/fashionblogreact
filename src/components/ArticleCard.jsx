import React from 'react';

function ArticleCard({ title, date, image, description }) {
    return (
        <article>
            <p className="date">{date}</p>
            <h2>{title}</h2>
            <img src={image} alt={title} />  {/* Corrected this line */}
            <p className="description">{description}</p>
            <a href="#">Continue reading...</a>
        </article>
    );
}

export default ArticleCard;
