import React, { Component } from 'react';
import '../navtitle.scss';
class HeaderTitles extends Component {
    state = {  }
    render() { 
        return (  
            <div className ="navtitle">
            <p > 
                 <a href="#home"><span data-title="HOME">home</span></a>
            </p>
              <p> 
                  <a href="#content"><span data-title="MUSIC">music</span></a>
             </p>
           <p> 
              <a href="#social"><span data-title="SOCIAL">Social</span></a>
          </p>
      </div>
        );
    }
}
 
export default HeaderTitles;