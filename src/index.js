import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';

let inMain = true;

$(document).ready(function() {
	$("#projectsButton").click(toggleProjects);
	$("#mainButton").click(toggleMain);
});

$(document).on('click', 'a', function(event){
	
	if (inMain){
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 700);
	}
		
});

function toggleProjects(){
	$("#projects").show();
	$("#info").hide();
	$("#intro").hide();
	$('#info').css({'margin-bottom':'0'});
	$('#main').css({'margin-bottom':'0'});
	inMain = false;
}

function toggleMain(){
	$("#intro").show();
	$("#info").show();
	$("#projects").hide();
	$('#info').css({'margin-bottom':'5%'});
	$('#main').css({'margin-bottom':'5%'});
	inMain = true;
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
