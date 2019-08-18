import React,{Component} from 'react';
import {Tabs,Tab , Grid ,Cell , Card , CardTitle , CardActions ,Button , CardMenu, IconButton,CardText } from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab : 0 } ;
    }

    
    toggleCategories = () => {
        if(this.state.activeTab === 0 ){
            return(
                <div  className='projects-grid'>
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style ={{color:'#fff' , height : '176px' , background: 'url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png) center / cover'}}>React project #1</CardTitle>
                        <CardText>
                            This is my First React Project.This is my First React Project.This is my First React Project.
                        </CardText>
                        <CardActions border>
                            <Button colored> Github </Button>
                            <Button colored> CodePen </Button>
                            <Button colored> Live Demo </Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style ={{color:'#fff' , height : '176px' , background: 'url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png) center / cover'}}>React project #1</CardTitle>
                        <CardText>
                            This is my First React Project.This is my First React Project.This is my First React Project.
                        </CardText>
                        <CardActions border>
                            <Button colored> Github </Button>
                            <Button colored> CodePen </Button>
                            <Button colored> Live Demo </Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style ={{color:'#fff' , height : '176px' , background: 'url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png) center / cover'}}>React project #1</CardTitle>
                        <CardText>
                            This is my First React Project.This is my First React Project.This is my First React Project.
                        </CardText>
                        <CardActions border>
                            <Button colored> Github </Button>
                            <Button colored> CodePen </Button>
                            <Button colored> Live Demo </Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            );
        }
    
        else if(this.state.activeTab === 1 ){
            return(
                <div>Angular</div>
            );
        }
        else if(this.state.activeTab === 2 ){
            return(
                <div>Mongodb</div>
            );
        }
        else if(this.state.activeTab === 3 ){
            return(
                <div>Nodejs</div>
            );
        }
}
    render(){
        return(
            <div className="category-tabs">
                 <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple >
                    <Tab>REACT</Tab>
                    <Tab>Angular</Tab>
                    <Tab>MongoDb</Tab>
                    <Tab>NodeJs</Tab>
                 </Tabs>
                 
                 <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                 </Grid>
            
            </div>
        );
    }
}

export default Projects;
