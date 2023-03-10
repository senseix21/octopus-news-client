import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const allNews = useLoaderData()
    // console.log(allNews);
    return (
        <div>
            {
                allNews.map(news =>
                    <NewsSummaryCard
                        key={news._id}
                        news={news}>
                    </NewsSummaryCard>)
            }

        </div>
    );
};

export default Category;