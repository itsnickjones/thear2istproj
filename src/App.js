import React from 'react';
import './App.css';
import{Layout, Header  , Navigation , Drawer , Content} from 'react-mdl';

import HeaderTitles from './components/navtitles';
import './glitch.scss';
import ContentSection from './components/content.js';

import Footer from './components/footer.js';

function App() {
   var img1 = 'imgs/headerimg.jpg';
        var sectionstyle = {
            backgroundImage: "url(" + img1 + ")"
        }
  return (
<div className="big-content">
    <Layout style={{background: '#F0FFFF'}}>
        {/* <Header transparent title={<div>the</div><div>ar2ists</div>} style={{color: 'white'}}> */}
        <Header transparent title={ <span>
          <span style={{   backgroundColor: 'red' }}>
          The 
           </span>
           &nbsp;
           <strong style={{   backgroundColor: 'red' }}>
             ar2ists
             </strong>
             </span> }>

            <Navigation>
                <HeaderTitles/>
                {/* <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a> */}
            </Navigation>
        </Header>
        {/* <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer> */}
        <Content>
        <main id ="home" className ="headersection" id="home" >
             <div className="c-glitch"  style={sectionstyle}>
               <div className="c-glitch__img"  style={sectionstyle}></div>
               <div className="c-glitch__img"  style={sectionstyle}></div>
               <div className="c-glitch__img"  style={sectionstyle}></div>
               <div className="c-glitch__img"  style={sectionstyle}></div>
               <div className="c-glitch__img"  style={sectionstyle}></div>
             </div>
         </main>
     <ContentSection/>
     <Footer/>

        </Content >

   
    </Layout>
</div>
  

  );
}

export default App;
