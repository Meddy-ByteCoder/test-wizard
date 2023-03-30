import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./Intro.css"
import Button from '../../Components/Button';

const Intro = () => {
    const navigate = useNavigate();

    useEffect(() => {
        let tx = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 5 } });
        let hd = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 5 } });

        tx.to('.right-txt-desc', { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 4.2 })
        hd.to('.left-text', { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 4.2 })


        let tl = gsap.timeline({
            defaults: {
                duration: 1.0,
                ease: "expo.inOut"
            }
        });

        tl
            .to(".slide-1", { width: 0 })
            .to("#introduction", { height: 0 });
    }, [])

    const navigateToPlayGround = () => {
        navigate('/playground')
    }


    return (
        <div>
            <div id="introduction">
                <div class="slide-1 slide"></div>
                <div class="slide-2 slide"></div>
                <div class="image-container">
                    <img class="banner-logo"
                        src="../Assets/Images/logo.avif"
                        alt="banner" title="banner" />
                </div>
            </div>

            <div class="banner-parent">
                <div class="left">
                    <div class="logo">
                        <img class="logo-main" src="../Assets/Images/logo.avif" alt="logo" />
                    </div>
                    <h1 class="left-text">Test Wizard</h1>
                    <Button label="Try Test Wizard" onClick={navigateToPlayGround} />
                </div>
                <div class="right">
                    <div class="banner">
                        <img class="banner-img" src="../Assets/Images/side-img.avif" alt="banner" />
                        <div class="right-txt-desc">
                            <h2>Time to bid adieu to those QA testers <br /> who keep begging for unit tests!!!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro