import React,{Component} from 'react';
import {Tabs,Tab , Grid ,Cell , Card , CardTitle , CardActions ,Button , CardMenu, IconButton,CardText } from 'react-mdl';

class Projects extends Component{ 
    render(){
        return(
            <div className="category-tabs">
                 <h1 style={{textAlign:'center'}}>My Projects</h1>
                 <hr></hr>
                 <Grid>
                    <Cell col={12}>
                        <div >

                            <div   className='projects-grid'>
                                <Card shadow={25} style={{width: '40%',height:'550px', justifyContent:'center',margin:'auto' , borderRadius:'25px'}}>
                                    <CardTitle style ={{color:'black' , height : '550px' , background: 'url(https://images.loksatta.com/2020/01/Joke-Marathi-2.jpg) center / cover'}}>Joke Generator</CardTitle>
                                    <CardText>
                                        This is my First Project which can directly generate some good Jokes to make you feel better.
                                    </CardText>
                                    <CardActions border style={{textAlign: 'center'}}>
                                    <a href="https://github.com/ch-shubham/joke-generator" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> Github </Button>
                                    </a>
                                    <a href="https://shubhamjokers.web.app/" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> Live Demo </Button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ch-shubham/" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> LinkedIn </Button>
                                    </a>
                                    </CardActions>
                                    <CardMenu style={{color:'#fff'}}>
                                        <IconButton name="mood" colored />
                                    </CardMenu>
                                </Card>

                                <Card shadow={25} style={{width: '40%',height:'550px', justifyContent:'center',margin:'auto' , borderRadius:'25px'}}>
                                    <CardTitle style ={{color:'black' , height : '550px' , background: 'url(https://aydincanaltun.com/wp-content/uploads/2019/01/githubwp.jpg) center / cover'}}>GITHUB USER FINDER</CardTitle>
                                    <CardText>
                                        This apps lets you search for the users available on github and saves your time. Happy Finding :) .
                                    </CardText>
                                    <CardActions border style={{textAlign: 'center'}}>
                                    <a href="https://github.com/ch-shubham/github-finder" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> Github </Button>
                                    </a>
                                    <a href="https://shubhamgitfinder.web.app/" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> Live Demo </Button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ch-shubham/" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> LinkedIn </Button>
                                    </a>
                                    </CardActions>
                                    <CardMenu style={{color:'#fff'}}>
                                        <IconButton name="mood" colored />
                                    </CardMenu>
                                </Card>  
                            </div>
                            
                            <div  className='projects-grid'>
                                <Card shadow={25} style={{width: '40%',height:'550px', justifyContent:'center',margin:'auto' , borderRadius:'25px'}}>
                                    <CardTitle style ={{color:'black' , height : '550px' , background: 'url(https://sciencenode.org/img_2018/2018-07-23/climate-change-2063240_960_720.jpg) center / cover'}}>Climate Checker</CardTitle>
                                    <CardText>
                                        Want to travel?? Check the climate prediction and happy journey .
                                    </CardText>
                                    <CardActions border style={{textAlign: 'center'}}>
                                    <a href="https://github.com/ch-shubham/weather-app" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> Github </Button>
                                    </a>
                                    <a href="https://shubhamclimate.firebaseapp.com/" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> Live Demo </Button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ch-shubham/" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> LinkedIn </Button>
                                    </a>
                                    </CardActions>
                                    <CardMenu style={{color:'#fff'}}>
                                        <IconButton name="mood" colored />
                                    </CardMenu>
                                </Card>

                                <Card shadow={25} style={{width: '40%',height:'550px', justifyContent:'center',margin:'auto' , borderRadius:'25px'}}>
                                    <CardTitle style ={{color:'black' , height : '550px' , background: 'url(https://firebase.google.com/docs/ml-kit/images/face_detection@2x.png) center / cover'}}>Face Detector</CardTitle>
                                    <CardText>
                                        This app lets you detect the face from the url of image provided.
                                    </CardText>
                                    <CardActions border style={{textAlign: 'center'}}>
                                    <a href="https://github.com/ch-shubham/faceDetectorFrontEnd" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> Github </Button>
                                    </a>
                                    <a href="https://intelli-brain.herokuapp.com" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> Live Demo </Button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ch-shubham/" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> LinkedIn </Button>
                                    </a>
                                    </CardActions>
                                    <CardMenu style={{color:'#fff'}}>
                                        <IconButton name="mood" colored />
                                    </CardMenu>
                                </Card>
                            </div>  

                            <div  className='projects-grid'>
                                <Card shadow={25} style={{width: '40%',height:'550px', justifyContent:'center',margin:'auto' , borderRadius:'25px'}}>
                                    <CardTitle style ={{color:'black' , height : '550px' , background: 'url(https://cdn.pixabay.com/photo/2018/10/01/00/51/luxury-hotel-3715115_960_720.jpg) center / cover'}}>Hotel Management</CardTitle>
                                    <CardText>
                                        Manage your favourite foods..
                                    </CardText>
                                    <CardActions border style={{textAlign: 'center'}}>
                                    <a href="https://github.com/ch-shubham/confusedChaudhary" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> Github </Button>
                                    </a>
                                    <a href="https://confusionserver-123.firebaseapp.com/home" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> Live Demo </Button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ch-shubham/" rel="noopener noreferrer" target="_blank">
                                        <Button raised accent colored style={{margin:'3px', width:'30%'}}> LinkedIn </Button>
                                    </a>
                                    </CardActions>
                                    <CardMenu style={{color:'#fff'}}>
                                        <IconButton name="mood" colored />
                                    </CardMenu>
                                </Card>
                            </div>  
                            
                        </div>
                    </Cell>
                 </Grid>
            
            </div>
        );
    }
}

export default Projects;
