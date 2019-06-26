import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import links from '../../utility/links';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { games } from '../../api/DummyData/Data'
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  cardContainer: {
    height: '100%',
    position: 'relative',
    boxShadow: '12px 15px 20px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '12px 15px 20px rgba(0, 0, 0, 0.1)',
      transition: "0.2s box-shadow ease-in-out, 0.2s background-color ease-in-out, 0.2s border-color ease-in-out"
    },
  },
  cardContent: {
    paddingBottom: '60px',
  },

  media: {
    height: 180,
    position: 'relative',
    width: '100%',
    marginTop: '-10px',
  },
  inline: {
    // display: 'inline',
    fontSize: '0.75rem',
    fontWeight: 'normal',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineHeight: '16px' ,
    maxHeight: '32px',
    WebkitLineClamp: 1 ,
    WebkitBoxOrient: 'vertical',
  },
  
  icon: {
    margin: theme.palette.secondary.main,
    fontSize: 32,
    cursor: 'pointer',
    color: '#aeaeae',
  },
  
  root: {
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  item: {
    display: 'table-cell',
    maxWidth: 350,
    margin: 'auto',
    marginTop: '16px',
    [theme.breakpoints.only('lg')]: {
      display: 'table-cell',
      maxWidth: 390,
      margin: '5% 5% 5% 10%',
      marginTop: '16px',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  note:{
    fontSize:'1em',
    color:'#6046b1'
  },
  modeSize:{
    fontSize:'1.5em'
  },
  formContainer:{
    width:'35%',
    margin:'20px auto 50px auto',
   
  }
});

class GameCard extends React.Component {
  state ={
    dataForGame :[],
    pageSize:200
  }
  componentDidMount(){
    localStorage.setItem('games',JSON.stringify(games));
     const retrievingData = JSON.parse(localStorage.getItem('games'))
     this.setState({dataForGame:retrievingData})
  }
 
   handleChange = (event) =>{
   this.setState({pageSize:event.target.value})
  }
  render() {
   const { classes } = this.props;
   console.log(this.state.pageSize);
   let internalDataStore = [...this.state.dataForGame];
   let sortStateData = internalDataStore.sort(function(c, d) {
     return new Date(d.Year) - new Date(c.Year);
   });
  
   const gameCardCollection = sortStateData.slice(1,this.state.pageSize+1).map((item,id)=>{
    return (
        <Card className={classes.cardContainer}>
          <CardHeader
            title={
              <div className={classes.eventName}>
                <Link to={links.gameDetails(item.Rank)}> Rank : {item.Rank}</Link>
              </div>
            }
            subheader={
              <Link to={links.staticLink()}>
                <Fragment>
                  <Typography
                    variant="subtitle2"
                    classes={{ root: classes.inline }}
                  >
                   Name: {item.Name}
                  </Typography>
                 
                  <Typography
                    variant="subtitle2"
                    classes={{ root: classes.inline }}
                  >
                  Platform: {item.Platform}
                  </Typography>
                </Fragment>
              </Link>
            }
          />
            <CardMedia
              className={classNames(classes.media)}
              image='images/jeshoots-com-632498-unsplash.jpg'
            />
          <CardContent className={classes.cardContent}>
            <Typography
                variant="subtitle2"
                classes={{ root: classes.inline }}
                >
                Year: {item.Year}   
            </Typography>
            <Typography
                variant="subtitle2"
                classes={{ root: classes.inline }}
                >
                Genre: {item.Genre}
            </Typography>
            <Typography
                variant="subtitle2"
                classes={{ root: classes.inline }}
                >
                Publisher: {item.Publisher}
            </Typography>
            <Typography
                variant="subtitle2"
                classes={{ root: classes.inline }}
                >
                Global_Sales: {item.Global_Sales}
            </Typography>
          </CardContent>
        </Card>
      );
   })
    
    return (
        <div>
          <div className={classes.formContainer}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple" style={{color:'#6046b1'}}>Page Size</InputLabel>
                <Select
                  value={this.state.pageSize}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'page size',
                    id: 'page-simple',
                  }}
                >
                  {[500,1000,2000,5000,10000,16000].map(pgSize =>{
                    return <MenuItem value={pgSize} key={pgSize +'p'}>{pgSize}</MenuItem>
                  })}
                </Select>
                <FormHelperText className={classes.note}>* The more page size you select, 
                  more time to load.
                  <span role="img" aria-label="Message" className={classes.modeSize}>😢</span>
                </FormHelperText>
              </FormControl>
          </div>
        <Grid className={classes.root} container>
          {gameCardCollection.map((child, i) => (
            <Grid xs={12} sm={6} md={4} className={classes.item} key={i} item>
              {child}
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameCard);