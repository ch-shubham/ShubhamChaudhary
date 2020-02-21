import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import logo from './assets/image1.JPG';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%' , margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={logo}
                            alt='avatar'
                            className="avatar-image"
                        />
                        <div className="banner-text">
                        
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                        
                            <p>HTML | CSS | BOOTSTRAP | REACT | REACT-NATIVE | NODEJS | EXPRESS | MONGODB</p>

                            <div className="social-links">
                                
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/ch-shubham/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                            
                                {/* Github */}
                                <a href="https://github.com/ch-shubham" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            
                                {/* Twitter */}
                                <a href="https://twitter.com/ch__shubham" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true"/>
                                </a>
                            
                                {/* Facebook */}
                                <a href="https://www.facebook.com/shubham128166" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                </a>
                            
                            </div>
                        
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
