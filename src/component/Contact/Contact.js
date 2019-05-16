import React, { Component } from 'react';
import "./Contact.scss";
import icon from "../../portfolio.png";

export default class Contact extends Component {
 	render() {
 		const { img, name, source_url, source_icon, rel } = this.props.contact;
 		console.log({img});
 		return (						    
		  <div>		  
		    <a href={source_url} 
		    target="_blank" rel={rel}>
		    <img className="contactlist" src={img} /></a>
		  </div>							
		)
 	}
 }