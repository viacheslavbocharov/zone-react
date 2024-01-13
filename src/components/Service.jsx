import React from 'react'
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.png';
import icon1 from '../assets/item-icon-1.png';
import icon2 from '../assets/item-icon-2.png';
import icon3 from '../assets/item-icon-3.png';
import icon4 from '../assets/item-icon-4.png';
import icon5 from '../assets/item-icon-5.png';
import icon6 from '../assets/item-icon-6.png';
import man1 from '../assets/working-man.png';
import man2 from '../assets/playing-man.png';







export default function Service() {
    return (
        <section className="service">
            <div className="service__container">
                <div className="service__title">Our Service </div>
                <div className="service__desc">We turn information into actionable insights We work to understand your issues
                    and are driven to ask better questions in the pursuit of making work.</div>
                <div className="service__list">
                    <div className="service__item">
                        <div className="service__item-img service__1"><img src={icon1} alt="icon" /></div>
                        <div className="service__item-title">Order Management</div>
                        <div className="service__item-desc">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</div>
                        <Link to={'/'} className="service__item-link">
                            <div className="service__item-text">Learn more</div>
                            <div className="service__item-arrow"><img src={arrow} alt="arrow" /></div>
                        </Link>
                        <div className="service__blur1"></div>

                    </div>
                    <div className="service__item">
                        <div className="service__item-img service__2"><img src={icon2} alt="icon" /></div>
                        <div className="service__item-title">Social Assistant</div>
                        <div className="service__item-desc">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</div>
                        <Link to={'/'} className="service__item-link">
                            <div className="service__item-text">Learn more</div>
                            <div className="service__item-arrow"><img src={arrow} alt="arrow" /></div>
                        </Link>
                        <div className="service__blur2"></div>

                    </div>
                    <div className="service__item">
                        <div className="service__item-img service__3"><img src={icon3} alt="icon" /></div>
                        <div className="service__item-title">Crypto Platform</div>
                        <div className="service__item-desc">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</div>
                        <Link to={'/'} className="service__item-link">
                            <div className="service__item-text">Learn more</div>
                            <div className="service__item-arrow"><img src={arrow} alt="arrow" /></div>
                        </Link>
                        <div className="service__blur3"></div>
                        <div className="service__blur4"></div>
                        <div className="service__blur5"></div>
                    </div>
                    <div className="service__item">
                        <div className="service__item-img service__4"><img src={icon4} alt="icon" /></div>
                        <div className="service__item-title">Smart Trading Modules</div>
                        <div className="service__item-desc">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</div>
                        <Link to={'/'} className="service__item-link">
                            <div className="service__item-text">Learn more</div>
                            <div className="service__item-arrow"><img src={arrow} alt="arrow" /></div>
                        </Link>
                        <div className="service__blur6"></div>
                        <div className="service__blur7"></div>
                        <div className="service__blur8"></div>
                    </div>
                    <div className="service__item">
                        <div className="service__item-img service__5"><img src={icon5} alt="icon" /></div>
                        <div className="service__item-title">Analyzer of the News</div>
                        <div className="service__item-desc">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</div>
                        <Link to={'/'} className="service__item-link">
                            <div className="service__item-text">Learn more</div>
                            <div className="service__item-arrow"><img src={arrow} alt="arrow" /></div>
                        </Link>
                        <div className="service__blur9"></div>
                    </div>
                    <div className="service__item">
                        <div className="service__item-img service__6"><img src={icon6} alt="icon" /></div>
                        <div className="service__item-title">Module of Price Notification</div>
                        <div className="service__item-desc">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</div>
                        <Link to={'/'} className="service__item-link">
                            <div className="service__item-text">Learn more</div>
                            <div className="service__item-arrow"><img src={arrow} alt="arrow" /></div>
                        </Link>
                        <div className="service__blur10"></div>
                    </div>
                </div>
                <div className="service__feauter">
                    <div className="service__feauter-img">
                        <img src={man1} alt="working man" />
                        <div className="service__blur11"></div>
                    </div>
                    <div className="service__feauter-info">
                        <div className="service__feauter-title">We complete every projects
                            extra care as customer need</div>
                        <div className="service__feauter-desc">We complete every projects
                            extra care as customer need
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </div>
                        <button className="service__feauter-btn btn">Read more</button>
                    </div>
                </div>
                <div className="service__feauter service__feauter_even">
                    <div className="service__feauter-info">
                        <div className="service__feauter-title">We complete every projects
                            extra care as customer need</div>
                        <div className="service__feauter-desc">We complete every projects
                            extra care as customer need
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </div>
                        <button className="service__feauter-btn btn">Read more</button>
                        <div className="service__blur12"></div>
                    </div>
                    <div className="service__feauter-img">
                        <img src={man2} alt="playing man" />
                        <div className="service__blur13"></div>
                        <div className="service__blur14"></div>

                    </div>
                </div>
            </div>

        </section>
    )
}

