import React, { Component } from 'react';
import '../navtitle.scss';
import { Link } from 'react-router-dom';

class HeaderTitles extends Component {
    state = {  }
    render() { 
        return (  
            <div className ="navtitle">
                <div style ={{textAlign:"center"}}>
                    <Link to="/">
                    <img  src={'./imgs/ar2istslight.png'} alt="Ar2ists"/>
                    </Link>
                    </div>

            <p style={{top:0, left: 0,paddingLeft:7}}> 
                 <Link to="/"><span data-title="HOME">home</span></Link>
            </p>

            <p   style={{top:0, right: 0,paddingRight:36}}> 
              <Link to="/social"><span data-title="SOCIAL">Social</span></Link>
            </p>
            <p  style={{bottom:0, left: 0,paddingLeft:7}}> 
                  <Link to="/video" href="#content"><span  className ="bottoms" data-title="VIDEO">video</span></Link>
            </p>
            <p  style={{bottom:0, right: 0,paddingRight:36}}> 
                  <Link to="/music"><span  className ="bottoms" data-title="MUSIC">music</span></Link>
            </p>

             
       
      </div>
        );
    }
}
 
export default HeaderTitles;