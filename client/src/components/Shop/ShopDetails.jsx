import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

import { designs } from '../Gallery/mockData';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import RatingStars from './RatingStars';

const DesignDetails = ({ handleOpen, handleClose, design, handleLike, likeIcon, waiting }) => {
    const [follow, setFollow] = useState('Follow');
    const [loading, setLoading] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [like, setLike] = useState(design?.likes || 0);
    const [selectedWork, setSelectedWork] = useState(null);


    const { addToCart, removeFromCart, cart } = useShoppingCart();

    const userId = design?.user?.id;
    const isInCart = cart.some(item => item.id === design.id);

    const handleFollow = () => {
        if (loading) return;

        setLoading(true);

        setTimeout(() => {
            setIsFollowing((prevIsFollowing) => !prevIsFollowing);
            setFollow((prevFollow) => (prevFollow === 'Follow' ? 'Following' : 'Follow'));
            setLoading(false);
        }, 2000);
    };

    const liked = () => {
        setLike(like + 1);
    }

    const openBackdropForWork = (work) => {
        setSelectedWork(work);
        handleOpen();
    };

    const parseHtmlContent = (htmlString) => {
        const headingRegex = /<h1>(.*?)<\/h1>/g;
        const paragraphRegex = /<p>(.*?)<\/p>/g;

        const headings = htmlString.match(headingRegex) || [];
        const paragraphs = htmlString.match(paragraphRegex) || [];

        return { headings, paragraphs };
    };

    useEffect(() => {
        const { headings, paragraphs } = parseHtmlContent(design.description);
        console.log('Headings:', headings);
        console.log('Paragraphs:', paragraphs);
    }, [design.description]);

    return (
        <div className='design__details'>
            <i className="uil uil-times filter__close" onClick={handleClose}></i>
            {design && (
                <div className='design__detail'>
                    <div className='design__detail-head'>
                        <div className='design__detail-head-container'>
                            <h1 id='design__detail-head-title'>{design.title}</h1>
                        </div>
                    </div>
                    <div className='sticky__header'>
                        <div className='sticky__header-container'>
                            <div className='sticky__header-user-container'>
                                <div className='sticky__header-user-photo'>
                                    <img className='sticky__header-user-avatar' src={design.user.profilePic} alt="" />
                                </div>
                                <div className='sticky__header-user-details'>
                                    <Link to={`/dashboard/${userId}`}>{design.user.username}</Link>
                                    <div className='sticky__header-user-status'>
                                        <div className='sticky-header__available'>
                                            <p>${design.price}</p>
                                        </div>
                                        <div className='follow_prompt'>
                                            <RatingStars rating={design.rating} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sticky__header-action'>
                                <li className='sticky__header-action-btn' onClick={handleLike}>
                                    {waiting ? (
                                        <CircularProgress color="error" size={15} />
                                    ) : (
                                        <i className={likeIcon}></i>
                                    )}
                                </li>
                                {design.price && (
                                    <li className='sticky__header-action-btn'>
                                        {isInCart ? (
                                            <i className="uil uil-trash" onClick={() => removeFromCart(design)}></i>
                                        ) : (
                                            <i className="uil uil-shopping-cart first" style={{ color: "#000" }} onClick={() => addToCart({ ...design, quantity: 1 })}></i>
                                        )}
                                    </li>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='design__detail-shot'>
                        <div className='design__detail-shot-img'>
                            {design.img && (
                                design.img.endsWith('.mp4') ? (
                                    <video muted loop autoPlay src={design.img} />
                                ) : (
                                    <img src={design.img} alt={design.title} />
                                )
                            )}
                        </div>
                        <div className='design__detail-shot-content'>
                            {/* Render the parsed headings and paragraphs */}
                            {parseHtmlContent(design.description).headings.map((heading, index) => (
                                <h1 key={index} dangerouslySetInnerHTML={{ __html: heading }} />
                            ))}
                            {parseHtmlContent(design.description).paragraphs.map((paragraph, index) => (
                                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                            ))}
                        </div>
                    </div>

                    <div className='design__detail-user-details'>
                        <div className='design__detail-user-avatar-container'>
                            <span className='design__detail-user-avatar-line'></span>
                            <img src={design.user.profilePic} className='design__detail-user-avatar' alt="" />
                            <span className='design__detail-user-avatar-line'></span>
                        </div>

                        <Link className='design__detail-user-name' to={`/dashboard/${userId}`}>{design.user.username}</Link>
                        <p className='design__detail-user-bio'>{design.user.bio}</p>
                        <div className='design__detail-user-hire_container'>
                            <button className='design__detail-user-hire'><i class="uil uil-envelope-alt"></i> Hire Me</button>
                        </div>
                    </div>

                    <div className='design__detail-user-works'>
                        <div className='more__by-heading'>
                            <h4>More by {design.user.username}</h4>
                            <Link to={`/dashboard/${userId}`}>View profile</Link>
                        </div>
                        <div className='more__by-thumbnail_container'>
                            {designs.map((work) => (
                                work.user.id === userId && (
                                    <div className='design' key={work.id} >
                                        {work.img && (
                                            work.img.endsWith('.mp4') ? (
                                                <video id="shot__main__img" muted loop autoPlay src={work.img} onClick={() => openBackdropForWork(work)} />
                                            ) : (
                                                <img id="shot__main__img" src={work.img} alt="" onClick={() => openBackdropForWork(work)} />
                                            )
                                        )}
                                        <div className="shot_sec">
                                            <div>
                                                <img src={work?.user?.profilePic} alt="" />
                                                <Link to={`/dashboard/${userId}`}>{work?.user?.username}</Link>
                                            </div>
                                            <ul>
                                                <li>
                                                    <i className="uil uil-heart"></i> {like}
                                                </li>
                                                <li>
                                                    <i className="uil uil-eye"></i> {work?.views}K
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                        {selectedWork && (
                            <Backdrop open={true}>
                                <DesignDetails
                                    design={selectedWork}
                                    handleClose={() => setSelectedWork(null)}
                                    handleLike={handleLike}
                                    likeIcon={likeIcon}
                                    waiting={waiting}
                                />
                            </Backdrop>
                        )}
                    </div>
                </div >
            )}
        </div >
    );
};

export default DesignDetails;
