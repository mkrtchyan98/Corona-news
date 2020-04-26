import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root:{
		display:'flex',
  flexDirection:'row',
  margin:0,
  lineHeight:1.5,
  [theme.breakpoints.down('sm')]:{
  	    flexDirection:'column'
  },
  '& div.item':{
  	flex:'1 50%'
  },
  '& div.details':{
  	display:'flex',
  	flexWrap:'wrap',
  },
  '& div.info':{
  	flex:1,
  	margin:'10px 40px',
   border: 'solid 10px #604238',
    borderRadius: '10px',

  },
  '& h2':{
  	color:'red',
  	fontSize:'25px',
  	 [theme.breakpoints.down('sm')]:{ 
  	 	fontSize:'15px',
  	 },
  },
  '& h4':{
  	color:'red',
  	fontSize:'15px'
  },
  '& p':{
  	fontSize:'16px',

  },
   '& h4.recovered':{
  	color:'green',

  }
	}
}))
const CountryInfo = (props) => {
	const { cases } = props.item
	const { deaths } = props.item
	const classes = useStyles()
	return (
		<div className={classes.root}>
		<div className="info">
		<h2>{props.item.country}</h2>
		<p>{props.item.day}</p>
		<div className="details">
		<div className="item">
		<h4>Active Cases</h4>
		<p>{cases.active}</p>
		</div>
				<div className="item">
		<h4>Critical Cases</h4>
		<p>{cases.critical}</p>
		</div>
				<div className="item">
		<h4>New Cases</h4>
		<p>{cases.new === null ? 0:cases.new}</p>
		</div>
				<div className="item">
		<h4 className="recovered">Recovered Cases</h4>
		<p >{cases.recovered}</p>
		</div>
				<div className="item">
		<h4>Total Cases</h4>
		<p>{cases.total}</p>
		</div>
				<div className="item">
		<h4>Total deaths</h4>
		<p>{deaths.total}</p>
		</div>
				<div className="item">
		<h4>New deaths</h4>
		<p>{deaths.new === null ? 0: deaths.new}</p>
		</div>
				<div className="item">
		<h4>Total Tests</h4>
		<p>{props.item.tests.total === null ? 'N/A': props.item.tests.total}</p>
		</div>

		</div>
		</div>
		</div>



)}

export default CountryInfo;