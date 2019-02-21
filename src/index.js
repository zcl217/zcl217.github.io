import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';

$(document).ready(function() {
	$("#projectsButton").click(toggleProjects);
	$("#mainButton").click(toggleMain);
});

function toggleProjects(){
	$("#projects").show();
	$("#main").hide();
}

function toggleMain(){
	$("#main").show();
	$("#projects").hide();
}

ReactDOM.render(<div>
					<div id = "header">
						Project list (click to view)
					</div>
					<Grid />
				</div>, document.getElementById('projects'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
