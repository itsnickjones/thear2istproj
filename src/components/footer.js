import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        return (
             <div id ="social" className = "footersection"  id="social" style={{display:"inline-block",overflow:"hidden",backgroundImage:"url('./imgs/socialback.jpg')" }}>
                 <div className = "contents">
            <a href="https://www.youtube.com/channel/UCx4QR6It-iMh4y74b8_7fsA">
             <i class="fa fa-youtube"></i>
            </a>

            <a href="https://www.instagram.com/thear2ists/">
               <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href=" https://soundcloud.com/the-ar2ists">

            <i class="fa fa-soundcloud" aria-hidden="true"></i>
            </a>

            <a href="https://open.spotify.com/artist/3pW9RpC0Vr1sogkTu4PHwW?si=dQ7Al-F8Sf2UmiSi4BqO3w">

            <i class="fa fa-spotify" aria-hidden="true"></i>
            </a>

            <a href="https://music.apple.com/us/artist/the-ar2ists/1451353851">

            <i class="fa fa-apple" aria-hidden="true"></i>
            </a>
</div>
            </div> );
    }
}
 
export default Footer;