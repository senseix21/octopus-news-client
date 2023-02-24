import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news-catagories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-3 sticky-top'>
            <h2 className='text-danger'>Categories</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}> <Link className=' text-hover font-size-400' to={`/category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;