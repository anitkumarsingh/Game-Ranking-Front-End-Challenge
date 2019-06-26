import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Styles = theme => ({
    card: {
    boxShadow: '12px 15px 20px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '12px 15px 20px rgba(0, 0, 0, 0.1)',
      transition: "0.2s box-shadow ease-in-out, 0.2s background-color ease-in-out, 0.2s border-color ease-in-out"
    },
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardContainer:{
        marginLeft:'auto',
        marginRight:'auto',
        width:'70%',
        marginBottom:50,
        marginTop:50
    },
    bottomDetails:{
        margin:'5px 0 5px 0'
    },
    title:{
        fontSize:'5em'
    }
  });
  

class GameDetails extends Component{ 
    state={
        rank:'',
    }
    componentDidMount(){
        let rankID = this.props.match.params.Rank;
        this.setState({rank:rankID});
    }
    render(){
        const retrievingData = JSON.parse(localStorage.getItem('games'))
        const newArray = retrievingData.filter(element => element.Rank === Number(this.state.rank));
        const { classes } =this.props;
        const items = newArray.map(ele =>{
            return(
                <div className={classes.cardContainer} key={ele.Name +'gaming'}>
                    <Card className={classes.card} >
                        <CardMedia
                            className={classes.media}
                            image="images/jeshoots-com-632498-unsplash.jpg"
                            title={ele.Name}
                        />
                        <CardContent>
                           <Typography variant="h6" component="h6" 
                                       className={classes.bottomDetails}>
                                Name : {ele.Name}
                            </Typography>
                            <Typography variant="h6" component="h6" 
                                        className={classes.bottomDetails}>
                                Rank : {ele.Rank}
                            </Typography>
                            <hr/>
                            <Typography variant="h6" component="h6" 
                                        className={classes.bottomDetails}>
                                Platform : {ele.Platform}
                            </Typography>
                          
                            <Typography variant="h6" component="h6" 
                                        className={classes.bottomDetails} >
                                Genre : {ele.Genre} 
                            </Typography>
                            <Typography variant="h6" component="h6"  
                                        className={classes.bottomDetails} >
                                Year : {ele.Year} 
                            </Typography>
                            <Typography variant="h6" component="h6"  
                                        className={classes.bottomDetails} >
                                Global_Sales : {ele.Global_Sales}   
                            </Typography>
                            <Typography variant="h6" component="h6"  
                                        className={classes.bottomDetails} >
                                Publisher : {ele.Publisher}   
                            </Typography>
                        </CardContent>
                   </Card>
               </div>
              )
         })
        return(
            <>
            {items}
            </>
        )
}
}
export default withStyles(Styles)(GameDetails);