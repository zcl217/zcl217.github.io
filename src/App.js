import React, { Component } from 'react';
import './App.css';
import {projects, max} from './variables.js';

class Grid extends Component{

	constructor(){
		super();
		
		this.clickedProject = this.clickedProject.bind(this);
		this.clickedClose = this.clickedClose.bind(this);
		this.clickedPrev = this.clickedPrev.bind(this);
		this.clickedNext = this.clickedNext.bind(this);
		
		this.state = {
			display: false,
			projectId: -1,
		}; 
	}
	
	clickedProject(index){
		this.setState(state => ({
			display: true,
			projectId: index
		}));
	}
	
	clickedClose(){
		this.setState(state => ({
			display: false
		}));
	}
	
	clickedPrev(){
		this.setState(state => ({
			projectId: state.projectId - 1
		}));
	}
	
	clickedNext(){
		this.setState(state => ({
			projectId: state.projectId + 1
		}));
	}
	
	render(){
		const row = 1;
		const col = 4;
		
		let grid = [];
		let projectCells = [];
		
		for (let index = 0; index < row*col; index++){
			if (index < max){
					
					let imageLink = "url(../images/" + index + ".png)";
					projectCells.push(<li id = "cell"
									 style = {{backgroundImage: imageLink}}
									 key = {index}
									 onClick = 
										 {() => this.clickedProject(index)}>
									</li>);
				}else{
					projectCells.push(<li id = "cell"
									 key = {index}>
									</li>);
				}
		}
		grid.push(<ul key = {row*col+1}>{projectCells}</ul>);
	
		return(
			<div id = "projectsContainer">
				<div id = "grid"> {grid} </div>
				<Overlay
					id = "overlay"
					display = {this.state.display}
					projectId = {this.state.projectId}
					clickedClose = {this.clickedClose}
					clickedPrev = {this.clickedPrev}
					clickedNext = {this.clickedNext}
				/>
			</div>
		);
	}
}

class Overlay extends Component{
	
	
	render(){
		let {display, projectId} = this.props;
		
		if (display === false){
			return(<div/>);
		}else{
			
			const selectedProject = projects[projectId];
			let content;
			if (projectId === 0){
				content = 
						<div id = "overlay">
							{selectedProject}
							<div className = "arrow"
								 id = "right"
								 onClick = {this.props.clickedNext}>  
									&#8250; 
							</div>
							<div id = "close" 
								onClick = {this.props.clickedClose}> 
									&#10006; 
							</div>
						</div>;
			}else if (projectId === max-1){
				content = 
						<div id = "overlay">
							<div className = "arrow"
								id = "left"
								 onClick = {this.props.clickedPrev}>  
									&#8249; 
							</div>
							{selectedProject}
							<div id = "close"
								onClick = {this.props.clickedClose}>
									&#10006; 
							</div>
						</div>;
						
			}else{
				content =
						<div id = "overlay">
							<div className = "arrow"
								id = "left"
								onClick = {this.props.clickedPrev}>  
									&#8249; 
							</div>
							{selectedProject}
							<div className = "arrow"
								id = "right"
								 onClick = {this.props.clickedNext}>  
								 &#8250; 
							</div>
							<div id = "close"
								 onClick = {this.props.clickedClose}> 
								 &#10006; 
							</div>
						</div>;
				
			}
			
			return content;
		}
	}
}

export default Grid;
//export {Grid, Overlay};

/* code to make two unordered lists
		
		for (let a = 0; a < row; a++){
			
			let projectCells = [];
			
			//need to make a temp variable in the loop so a new instance
			//of that value is created for each div (otherwise each div
			//will have the same value that the index ends on)
			for (let b = 0, index = col*a; b < col; b++, index++){
				if (index < max){
					
					let imageLink = "url(../images/" + index + ".png)";
					console.log(imageLink);
					projectCells.push(<li id = "cell"
									 style = {{backgroundImage: imageLink}}
									 key = {index}
									 onClick = 
										 {() => this.clickedProject(index)}>
									</li>);
				}else{
					projectCells.push(<li id = "cell"
									 key = {index}>
									</li>);
				}
				
			}
			grid.push(<ul key = {row*col+a}>{projectCells}</ul>);
		}
*/