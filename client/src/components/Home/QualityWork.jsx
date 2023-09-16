import React from 'react'

import mediaVideo1 from '../../assets/video/media-video1.mp4'
import mediaVideo2 from '../../assets/video/media-video2.mp4'
import mediaVideo3 from '../../assets/video/media-video3.mp4'
import mediaVideo4 from '../../assets/video/media-video4.mp4'
import media1 from '../../assets/media1.jpg'
import media2 from '../../assets/media2.jpg'
import media3 from '../../assets/media3.jpg'
import media4 from '../../assets/media4.jpg'
import media5 from '../../assets/media5.jpg'
import media6 from '../../assets/media6.jpg'
import media7 from '../../assets/media7.jpg'
import media8 from '../../assets/media8.jpg'
import media9 from '../../assets/media9.jpg'

const QualityWork = () => {
    return (
        <div className='bg2 section'>
            <div className="container">
                <div className="quality__work">
                    <div className="quality__work__head">
                        <h3>Plus, top quality work</h3>
                    </div>
                    <div className="quality__media">
                        <div className="quality__media__row">
                            <div className="quality__media__item">
                                <video src={mediaVideo1} loop muted autoPlay></video>
                            </div>
                            <div className="quality__media__item">
                                <img src={media1} alt="" />
                            </div>
                            <div className="quality__media__item">
                                <img src={media2} alt="" />
                            </div>
                            <div className="quality__media__item">
                                <img src={media3} alt="" />
                            </div>
                            <div className="quality__media__item">
                                <img src={media4} alt="" />
                            </div>
                            <div className="quality__media__item">
                                <video src={mediaVideo2} loop muted autoPlay></video>
                            </div>
                            <div className="quality__media__item">
                                <img src={media5} alt="" />
                            </div>
                        </div>
                        <div className="quality__media__row">
                            <div className="quality__media__item">
                                <img src={media6} alt="" />
                            </div>
                            <div className="quality__media__item">
                                <video src={mediaVideo3} loop muted autoPlay></video>
                            </div>
                            <div className="quality__media__item">
                                <img src={media7} alt="" />
                            </div>
                            <div className="quality__media__item">
                                <img src={media8} alt="" />
                            </div>
                            <div className="quality__media__item">
                                <img src={media9} alt="" />
                            </div>
                            <div className="quality__media__item">
                                <video src={mediaVideo4} loop muted autoPlay></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QualityWork