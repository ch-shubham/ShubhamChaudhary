import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import logo from './assets/image2.JPG';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Shubham Chaudhary</h2>
            <img
              src={logo}
              alt="avatar"
              style={{height: '350px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a passionate web developer who is very much interested in learning new technologies and new trends.I want to upgrade my skills I have learned so far. I want to learn new things from new people.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    8265972317
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    shubham128166@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    https://www.linkedin.com/in/ch-shubham/
                  </ListItemContent>
                </ListItem>
               
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;