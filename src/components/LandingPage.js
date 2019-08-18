import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%' , margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://gardamaya.com/wp-content/uploads/2018/04/mas-adit-transparan.png"
                            alt='avatar'
                            className="avatar-image"
                        />
                        <div className="banner-text">
                        
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                        
                            <p>HTML | CSS | BOOTSTRAP | REACT | REACT-NATIVE | NODEJS | EXPRESS | MONGODB</p>

                            <div className="social-links">
                                
                                {/* LinkedIn */}
                                <a href="https://google.co.in" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                            
                                {/* Github */}
                                <a href="https://google.co.in" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            
                                {/* Freecodecamp */}
                                <a href="https://google.co.in" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>
                            
                                {/* Youtube */}
                                <a href="https://google.co.in" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
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
