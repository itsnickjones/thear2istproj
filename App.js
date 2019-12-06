
import React from 'react';
import './App.css';
import{Layout, Header  , Navigation , Drawer , Content} from 'react-mdl';
import Main from './components/main';

import HeaderTitles from './components/navtitles';
import './glitch.scss';
import ContentSection from './components/content.js';
import Frontpage from './components/front.js';

import Footer from './components/footer.js';

function App() {
    var img1 = 'imgs/headerimg.jpg';
    var sectionstyle = {
        backgroundImage: "url(" + img1 + ")"
    }
    return (
        <div className="big-content">
            <Layout style={{background: '#F0FFFF'}}>
                {/* <Header transparent> */}

                {/* title={ <span>
                      <span style={{   backgroundColor: 'red' }}>
                           The
                      </span>
                          &nbsp;
                      <strong style={{   backgroundColor: 'red' }}>
                           ar2ists
                      </strong>
                      </span> } */}

                    <Navigation>
                        <HeaderTitles/>
                        {/* <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a> */}
                    </Navigation>
                {/* </Header> */}
                {/* <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer> */}
                <Content>
                    {/* <main id ="home" className ="headersection" id="home" > */}
                   {/* <Frontpage/> */}
                   <Main/>

                        {/* <div className="c-glitch glitchy"  style={sectionstyle}>
                            <div className="c-glitch__img glitchy"  style={sectionstyle}></div>
                            <div className="c-glitch__img glitchy"  style={sectionstyle}></div>
                            <div className="c-glitch__img glitchy"  style={sectionstyle}></div>
                            <div className="c-glitch__img glitchy"  style={sectionstyle}></div>
                            <div className="c-glitch__img glitchy"  style={sectionstyle}></div>
                        </div> */}

                    {/* </main> */}
                    {/* <ContentSection/> */}
                    {/* <Footer/> */}

                </Content >


            </Layout>
        </div>


    );
}

export default App;
