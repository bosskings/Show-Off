import { useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

import { designs } from './mockData';
import profileIcon from "../../assets/show1.webp";

const DesignDetails = ({ handleOpen, handleClose, design, handleLike, likeIcon, waiting }) => {
    const [follow, setFollow] = useState('Follow');
    const [loading, setLoading] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [like, setLike] = useState(design?.likes || 0);
    const [selectedWork, setSelectedWork] = useState(null);


    const userId = design?.user?.id;

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
                                    <img className='sticky__header-user-avatar' src={profileIcon} alt="" />
                                </div>
                                <div className='sticky__header-user-details'>
                                    <Link to={`/dashboard/${userId}`}>{design.artist_name}</Link>
                                    <div className='sticky__header-user-status'>
                                        <div className='sticky-header__available'>
                                            <span className='sticky-header__available-circle'></span>
                                            {design.artist_name}
                                        </div>
                                        <div className='follow_prompt'>
                                            <p onClick={handleFollow}>
                                                {loading ? (
                                                    <div className="circular-progress">
                                                        <CircularProgress color="error" size={10} />
                                                        <p>Follow</p>
                                                    </div>
                                                ) : (
                                                    follow
                                                )}
                                            </p>
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
                            </div>
                        </div>
                    </div>

                    <div className='design__detail-shot'>
                        <div className='design__detail-shot-img'>
                            {design.art_dir && (
                                design.art_dir.endsWith('.mp4') ? (
                                    <video muted loop autoPlay src={design.art_dir} />
                                ) : (
                                    <img src={design.art_dir} alt={design.art_description} />
                                )
                            )}
                        </div>
                        <div className='design__detail-shot-content'>
                            {design.desc && design.desc.head && (
                                <h1 dangerouslySetInnerHTML={{ __html: design.desc.head }} />
                            )}
                            {design.desc && design.desc.body && (
                                <>
                                    <p dangerouslySetInnerHTML={{ __html: design.desc.body.body1 }} />
                                    <p dangerouslySetInnerHTML={{ __html: design.desc.body.body2 }} />
                                    <p dangerouslySetInnerHTML={{ __html: design.desc.body.body3 }} />
                                    <p dangerouslySetInnerHTML={{ __html: design.desc.body.body4 }} />
                                </>
                            )}
                        </div>
                    </div>

                    <div className='design__detail-user-details'>
                        <div className='design__detail-user-avatar-container'>
                            <span className='design__detail-user-avatar-line'></span>
                            <img src={profileIcon} className='design__detail-user-avatar' alt="" />
                            <span className='design__detail-user-avatar-line'></span>
                        </div>

                        <Link className='design__detail-user-name' to={`/dashboard/${userId}`}>{design.artist_name}</Link>
                        <p className='design__detail-user-bio'>{design.art_description}</p>
                        <div className='design__detail-user-hire_container'>
                            <button className='design__detail-user-hire'><i className="uil uil-envelope-alt"></i> Hire Me</button>
                        </div>
                    </div>

                    <div className='design__detail-user-works'>
                        <div className='more__by-heading'>
                            <h4>More by {design.artist_name}</h4>
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
                </div>
            )}
        </div>
    );
};

export default DesignDetails;
