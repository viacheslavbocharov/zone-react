import React from 'react'
import send from '../assets/send.png';




function Subscribe() {
    return (
        <section className="subscribe">
            <div className="subscribe__container">
                <div className="subscribe__title">Subscribe to get the Latest News</div>
                <div className="subscribe__desc">We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</div>
                <form action="get" className="subscribe__form">
                    <input className="subscribe__email" type="email" placeholder='Enter your email addres' />
                    <button type="submit" className="subscribe__btn btn">
                        <img src={send} alt="send" />
                        <span>Subscribe</span>
                    </button>
                </form>
                <div className="subscribe__blur1"></div>
                <div className="subscribe__blur2"></div>
                <div className="subscribe__blur3"></div>
                <div className="subscribe__blur4"></div>
                <div className="subscribe__blur5"></div>



            </div>
        </section>
    )
}

export default Subscribe