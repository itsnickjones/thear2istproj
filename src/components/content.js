import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class ContentSection extends Component {
    state = {  }
    render() { 
        return (  <div id = "content" className="contentsection" id="content"> 
                    <h1>
                        Music
                    </h1>
                    <div className="videobox">
                     <Grid className="landing-grid noSpacing">
                         <Cell className="Cell-Shadow" col={6}>
                           <iframe width="560" height="315"  src="https://www.youtube.com/embed/2tOpIYOUU5Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>           
                         </Cell>
                         <Cell className="Cell-Shadow"  col={6}>
                            <iframe width="560" height="315"  src="https://www.youtube.com/embed/P8Y6aoMPPao" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         </Cell>
                         <Cell className="Cell-Shadow"  col={6}>
                            <iframe width="560" height="315"  src="https://www.youtube.com/embed/7Wd4ZkVSeyo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Cell>
                        <Cell className="Cell-Shadow"  col={6}>
                             <iframe width="560" height="315"  src="https://www.youtube.com/embed/v9g4IuPMlco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Cell>
                    </Grid>
                  </div>

                </div>
        );
    }
}
 
export default ContentSection;