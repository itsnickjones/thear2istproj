import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Music extends Component {
    state = {  }
    render() { 
        return (  
        <div className="musicsection"  style={{display:"inline-block",overflow:"hidden",backgroundImage:"url('./imgs/faded.jpg')" }}>
            {/* <div>
                   <iframe src="https://open.spotify.com/embed/track/0T9cHQD6adBnzMt1pZNRUH" 
            width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">
            </iframe>
            <a href="https://geo.music.apple.com/us/album/trap-santa/1486714694?i=1486714696&mt=1&app=music" style={{display:"inline-block",overflow:"hidden",background:"url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-11-07T00:00:00Z&kind=song&bubble=apple_music) no-repeat" ,width:"158px",height:"45px"}}></a>            

            </div>
         <div> */}
            {/* <iframe src="https://open.spotify.com/embed/track/665r8fGfu5q7KxH1ilUWz0"
             width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">

            </iframe>
            <a href="https://geo.music.apple.com/us/album/l%24m/1472212119?i=1472212122&mt=1&app=music"  style={{display:"inline-block",overflow:"hidden",background:"url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-07-09T00:00:00Z&kind=song&bubble=apple_music)no-repeat" ,width:"158px",height:"45px"}}></a>  

            </div> */}
            {/* <iframe src="https://open.spotify.com/embed/track/25rgo0gLJJTBKGikW8H98p"
             width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">
            </iframe> */}
            {/* <iframe src="https://open.spotify.com/embed/track/5g5eDzdufZjJzDLE3ET99p" 
            width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">

            </iframe> */}
       
       <Grid className="videobox landing-grid noSpacing">
             
             <Cell className="Cell-Shadow" col={4}>
                 <div>
             <iframe src="https://open.spotify.com/embed/track/0T9cHQD6adBnzMt1pZNRUH" 
            width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">
            </iframe>  
            </div>
            <a href="https://geo.music.apple.com/us/album/trap-santa/1486714694?i=1486714696&mt=1&app=music" style={{display:"inline-block",overflow:"hidden",background:"url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-11-07T00:00:00Z&kind=song&bubble=apple_music) no-repeat" ,width:"158px",height:"45px"}}></a>            

                       </Cell>

             <Cell className="Cell-Shadow"  col={4}>
 <iframe src="https://open.spotify.com/embed/track/665r8fGfu5q7KxH1ilUWz0"
             width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">
            </iframe>
            <a href="https://geo.music.apple.com/us/album/l%24m/1472212119?i=1472212122&mt=1&app=music"  style={{display:"inline-block",overflow:"hidden",background:"url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-07-09T00:00:00Z&kind=song&bubble=apple_music)no-repeat" ,width:"158px",height:"45px"}}></a>  

                         </Cell>

             <Cell className="Cell-Shadow"  col={4}>
             <iframe src="https://open.spotify.com/embed/track/25rgo0gLJJTBKGikW8H98p"
             width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">
            </iframe>        
            <a href="https://geo.music.apple.com/us/album/options/1470293287?i=1470293288&mt=1&app=music"  style={{display:"inline-block",overflow:"hidden",background:"url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-06-26T00:00:00Z&kind=song&bubble=apple_music)no-repeat" ,width:"158px",height:"45px"}}></a>

                </Cell>
            <Cell className="Cell-Shadow"  col={4}>
                 <iframe src="https://open.spotify.com/embed/track/5g5eDzdufZjJzDLE3ET99p" 
                 width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">                 
                 </iframe>
                 <a href="https://geo.music.apple.com/us/album/loose-cannon-single/1477713515?mt=1&app=music"  style={{display:"inline-block",overflow:"hidden",background:"url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-08-24T00:00:00Z&kind=album&bubble=apple_music)no-repeat" ,width:"158px",height:"45px"}}></a>

            </Cell>
            <Cell className="Cell-Shadow"  col={4}>

            <iframe src="https://open.spotify.com/embed/track/0IFlyUMORktDTPQ3I7RQsd" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <a href="https://geo.music.apple.com/us/album/she-lit-single/1451421614?mt=1&app=music" style={{display:"inline-block",overflow:"hidden",background:"url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-01-31T00:00:00Z&kind=album&bubble=apple_music)no-repeat" ,width:"158px",height:"45px"}}></a>
            </Cell>
            <Cell className="Cell-Shadow"  col={4}>

            <iframe src="https://open.spotify.com/embed/track/5SgKJxWidok3byyLfhdBVi" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <a href="https://geo.music.apple.com/us/album/stuck/1451617611?i=1451617612&mt=1&app=music" style={{display:"inline-block",overflow:"hidden",background:"url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-02-02T00:00:00Z&kind=song&bubble=apple_music)no-repeat" ,width:"158px",height:"45px"}}></a>
            </Cell>

        </Grid>
            </div>
            );
            
    }
}
 
export default Music;