import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import logo from './assets/image1.JPG'

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={logo}
                alt="avatar"
                style={{height: '450px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Shubham Chaudhary</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a passionate web developer who is very much interested in learning new technologies and new trends.I want to upgrade my skills I have learned so far. I want to learn new things from new people.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Near Allahabad Bank,Pilibhit road,<br />Khatima(262308), <br/>Udham Singh Ngara,Uttarakhand</p>
            <h5>Phone</h5>
            <p>8265972317</p>
            <h5>Email</h5>
            <p>shubham128166@gmail.com<br/>shubhamcheee17@nituk.ac.in</p>
            <h5>Web</h5>
            <p>Yet to be deployed.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2001}
              endYear={2016}
              schoolName="Nosegay Public School"
              schoolDescription=''
               />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience/>

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="C"
                progress={70}
                />
                <Skills
                    skill="C++"
                    progress={80}
                />
                <Skills
                skill="PYTHON"
                progress={60}
                />
                <Skills
                    skill="HTML"
                    progress={80}
                />
                <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                    skill="JSON"
                    progress={80}
                />
                <Skills
                skill="Working with Microsoft Office"
                progress={80}
                />
                <Skills
                    skill="Git Version Control"
                    progress={70}
                />

                <Skills
                skill="MERN STACK"
                progress={80}
                />
                <Skills
                    skill="Redux"
                    progress={50}
                />

                <Skills
                skill="Mongoose"
                progress={40}
                />
                <Skills
                    skill="CSS/SASS"
                    progress={50}
                />
                <Skills
                skill="MySql And Postgres"
                progress={60}
                />
                <Skills
                    skill="Computer Networking"
                    progress={30}
                />
                <Skills
                    skill="Working with PASSPORT for BackEnd"
                    progress={80}
                />

          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;