import React, {Component} from 'react';
const {projectList} = require('../constants/projectList');

class Projects extends Component{
	
	componentWillMount(){
	
	}

	render(){
		
		
		console.log(projectList);
		
		projectList.reverse();
		
		let projectCells = projectList.map((project, i) => {
						return (
							<Project
								key = {i}
								name = {project.name}
								bg = {project.bg}
								desc = {project.desc}
								link = {project.link}
								demo = {project.demo}
							/>
						);
					});
					
		projectCells = projectCells.slice(1);
		
		return (
			<div>
				<h3> Projects </h3>
				<div id = "projectsContainer">
					{projectCells}
				</div>
			</div>
		);

	}
}

function Project(props){
	
	let {name, bg, desc, link, demo} = props;
	
	let background = "./images/" + bg;
	
	let displayDemo = true;
	
	if (demo === "false") displayDemo = false;
	
	let projectStyles = {
		backgroundImage: `url(${background})`,
		cursor: displayDemo ? "pointer" : "auto"
	};
	
	let redirect = () => window.open(link, '_blank');
	
	if (!displayDemo) redirect = undefined;
	
	return(
			<div
			className = "project"
			onClick = {redirect}
			style = {projectStyles}
			>
				<div className = "projectName">
					 {name} 
				</div>
				
				<div className = "projectDesc">
					 {desc} 
				</div>
			</div>
			
			//demo or src?
	);
	
}

export default Projects;