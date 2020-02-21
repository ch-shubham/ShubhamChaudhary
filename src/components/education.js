import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <div>
      <Grid>
        <Cell col={4}>
          <h4>Matriculation</h4>
        </Cell>
        <Cell col={4}>
          <h4 >CBSE Board - (2014)</h4>
          </Cell>
        <Cell col={4}>
          <h4>9.4 CGPA</h4>
        </Cell>
      </Grid>

      <Grid>
        <Cell col={4}>
          <h4>Intermediate/+2</h4>
        </Cell>
        <Cell col={4}>
          <h4 >CBSE Board - (2016)</h4>
          </Cell>
        <Cell col={4}>
          <h4>87.8%</h4>
        </Cell>
      </Grid>

      <Grid>
        <Cell col={4}>
          <h4>Bachelor of Technology/+2</h4>
        </Cell>
        <Cell col={4}>
          <h4 >NIT UTTARAKHAND - (2017-2021)</h4>
          </Cell>
        <Cell col={4}>
          <h4>8.04 CGPA(upto 5th semester)</h4>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Education;
