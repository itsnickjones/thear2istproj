import React, { Component } from 'react';
import '../glitch.scss';

var img1 = 'imgs/headerimg.jpg';
var sectionstyle = {
    backgroundImage: "url(" + img1 + ")"
}
class Frontpage extends Component {
   
    state = {  }
    render() { 
        return (
            <main id ="home" className ="headersection" id="home" >
                  {/* <div>
                <img src={'./imgs/ar2istslight.png'} alt="Italian Trulli"/>

                </div> */}
               <div className="c-glitch glitchy"  style={sectionstyle}>
                            <div className="c-glitch__img glitchy"  style={sectionstyle}></div>
                            <div className="c-glitch__img glitchy"  style={sectionstyle}></div>
                            <div className="c-glitch__img glitchy"  style={sectionstyle}></div>
                            <div className="c-glitch__img glitchy"  style={sectionstyle}></div>
                            <div className="c-glitch__img glitchy"  style={sectionstyle}></div>
                </div>
            </main>
          );
    }
}
 
export default Frontpage;