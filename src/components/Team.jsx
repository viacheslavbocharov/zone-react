import React from 'react'
import { Link } from 'react-router-dom';
import skype from '../assets/social-skype.png';
import linkedin from '../assets/social-linkedin.png';
import twitter from '../assets/social-twitter.png';
import facebook from '../assets/social-facebook.png';
import sunny from '../assets/sunny-khan.png';
import alina from '../assets/alina-jesia.png';
import alex from '../assets/alex-sohag.png';
import afroza from '../assets/afroza-mou.png';



function Team() {
    return (
        <section className="team">
            <div className="team__title">Met Our Team</div>
            <div className="team__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                accumsan nisi Ut ut felis congue nisl hendrerit commodo.

            </div>
            <div className="team__list">
                <div className="team__member">
                    <div className="team__memeber-img"><img src={sunny} alt="Sunny Khan" /></div>
                    <div className="team__member-name">Sunny Khan</div>
                    <div className="team__member-role">Executive officer</div>
                    <div className="team__member-socials">
                        <Link to={'/'} className="team__member-social"><img src={skype} alt="Skype" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={linkedin} alt="Linkedin" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={twitter} alt="Twitter" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={facebook} alt="Facebook" /></Link>
                    </div>
                    <div className="team__blur1"></div>
                    <div className="team__blur2"></div>
                </div>
                <div className="team__member">
                    <div className="team__memeber-img"><img src={alina} alt="Alina Jesia" /></div>
                    <div className="team__member-name">Alina Jesia</div>
                    <div className="team__member-role">UX/UI DESIGNER</div>
                    <div className="team__member-socials">
                        <Link to={'/'} className="team__member-social"><img src={skype} alt="Skype" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={linkedin} alt="Linkedin" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={twitter} alt="Twitter" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={facebook} alt="Facebook" /></Link>
                    </div>
                    <div className="team__blur3"></div>
                    <div className="team__blur4"></div>
                </div>
                <div className="team__member">
                    <div className="team__memeber-img"><img src={alex} alt="Alex Sohag" /></div>
                    <div className="team__member-name">Alex Sohag</div>
                    <div className="team__member-role">BUSINESS DEVELOPMENT</div>
                    <div className="team__member-socials">
                        <Link to={'/'} className="team__member-social"><img src={skype} alt="Skype" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={linkedin} alt="Linkedin" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={twitter} alt="Twitter" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={facebook} alt="Facebook" /></Link>
                    </div>
                    <div className="team__blur5"></div>
                </div>
                <div className="team__member">
                    <div className="team__memeber-img"><img src={afroza} alt="Afroza Mou" /></div>
                    <div className="team__member-name">Afroza Mou</div>
                    <div className="team__member-role">Head of marketing</div>
                    <div className="team__member-socials">
                        <Link to={'/'} className="team__member-social"><img src={skype} alt="Skype" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={linkedin} alt="Linkedin" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={twitter} alt="Twitter" /></Link>
                        <Link to={'/'} className="team__member-social"><img src={facebook} alt="Facebook" /></Link>
                    </div>
                    <div className="team__blur6"></div>
                </div>
            </div>
        </section>
    )
}

export default Team
