import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { BsEyeFill, BsFillBookmarkCheckFill, BsShareFill, BsStarFill } from 'react-icons/bs';

const News = () => {
    const news = useLoaderData()
    const { title, thumbnail_url, details, total_view, author, rating } = news;
    // console.log(author.name);

    return (
        <div className='news-card'>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center bg-danger text-white'>
                    <div className='d-flex align-items-center me-2 '>
                        <Image roundedCircle src={author.img} style={{ height: 60, width: 60, marginBottom: 5 }} ></Image>
                        <div className='mx-2'>
                            <h6 className='mb-0'>
                                {author.name ? author.name : 'Jon Doe'}
                            </h6>
                            <p>{author.published_date ? author.published_date : `2022-08-24 17:27:34`}</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <BsFillBookmarkCheckFill className='h3 m-2' />
                        <BsShareFill className='h4' />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='text-danger'>{title}</Card.Title>
                    <Card.Img src={thumbnail_url} height={500} alt="Card image" />
                    <Card.Text>
                        <p> {
                            details ?
                                <div>
                                    <p>{details.slice(0, 300)}</p><br />
                                    <p>{details.slice(301, 600)}</p><br />
                                    <p>{details.slice(601, 900)}</p><br />
                                    <p>{details.slice(901, 1200)}</p><br />
                                </div>
                                : null
                        }</p>
                    </Card.Text>
                </Card.Body>

                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <div>
                        <BsStarFill className='text-danger' />
                        <span> {rating.number ? rating.number : '4'}</span>
                    </div>
                    <div>
                        <BsEyeFill className='text-danger' />
                        <span> {total_view} views</span>
                    </div>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default News;