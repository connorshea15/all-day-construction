import React from 'react';
import spotifyIcon from "../../assets/images/Spotify_Icon.png";
import instagramIcon from "../../assets/images/Instagram_Icon.png";
import facebookIcon from "../../assets/images/Facebook_Icon.png";
import linkedinIcon from "../../assets/images/Linkedin_Icon.png";

function Footer() {
  return (
    <section className="footer">
        <h1>All Day Construction</h1>
        <div className="d-flex flex-wrap justify-content-center">
            <a className="mb-2" href="https://open.spotify.com" target="blank">
                <img className="logo mx-3" src={spotifyIcon} alt="spotify logo" key="spotify-logo" />
            </a>
            <a className="mb-2" href="https://www.instagram.com" target="blank">
                <img className="logo mx-3" src={instagramIcon} alt="instagram logo" key="instagram-logo" />
            </a>
            <a className="mb-2" href="https://www.facebook.com" target="blank">
                <img className="logo mx-3" src={facebookIcon} alt="facebook logo" key="facebook-logo" />
            </a>
            <a className="mb-2" href="https://www.linkedin.com" target="blank">
                <img className="logo mx-3" src={linkedinIcon} alt="linkedin logo" key="linkedin-logo" />
            </a>
        </div>
        <div>
            <a className="mx-1">Privacy</a>
            <a className="mx-1">Terms</a>
            <a className="mx-1">Resources</a>

        </div>
    </section>
  );
}

export default Footer;