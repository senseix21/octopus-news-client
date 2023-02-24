import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { BsEyeFill, BsFillBookmarkCheckFill, BsShareFill, BsStarFill } from 'react-icons/bs';


const NewsSummaryCard = ({ news }) => {
    const { title, image_url, details, total_view, author, _id, rating } = news;
    return (
        <div className='mt-3'>
            <Card className='mb-3'>
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
                    <Card.Img src={image_url} height={400} alt="Card image" />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250)}<Link to={`/news/${_id}`}> Read More..</Link>
                                </p> :
                                <p> {details}</p>
                        }
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

export default NewsSummaryCard;