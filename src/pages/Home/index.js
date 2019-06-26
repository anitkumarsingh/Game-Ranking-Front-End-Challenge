import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '../../components/Card/Card';

const styles = theme =>({
  
})

class Home extends React.Component{
  componentDidMount(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  render(){
    const { classes } = this.props;
    return(
      <div className={classes}>
      <Card/>
      </div>
    )
  }
}
export default withStyles(styles)(Home);
