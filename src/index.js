import React from 'react';
import ReactDOM from 'react-dom';
import {nanoid} from 'nanoid';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  {id: nanoid(), name: "SA Travel Form", projType: "work", skills:["Vanilla JS", "HTML", "CSS", "MySQL", "PHP"], desc:"Travel form for Binghamton University's Student Association. Note: No Github Link", githubLink:"", link:"https://www.forms.binghamtonsa.org/travel/"},
  {id: nanoid(), name: "SA Timesheet System", projType: "work", skills:["Ruby on Rails", "JS"], desc:"Timesheet for Student Association employees", githubLink:"https://github.com/MatthewDamiata/SA-Timesheet-System", link:"https://time.binghamtonsa.org"},
  {id: nanoid(), name: "Portfolio", projType: "personal", skills:["React","HTML", "CSS"], desc:"My website/portfolio", githubLink:"https://github.com/queendallen/queendallen.github.io", link:""},
  {id: nanoid(), name: "Knits N Things", projType: "personal", skills:["React","HTML", "CSS"], desc:"WIP. Mock Ecommerce website dedicated to handmade crochet projects. Note: Not Github Link and No Live", githubLink:"https://github.com/queendallen/knitsnthings", link:""},
  {id: nanoid(), name: "Weather App", projType: "personal", skills:["React", "HTML", "CSS"], desc:"WIP. Gives 3-day forecast for any inputted location", githubLink:"https://github.com/queendallen/weather-app", link:""},
  {id: nanoid(), name: "Tumblr Themes", projType: "personal", skills:["Vanilla JS","HTML", "CSS"], desc:"Personal blog themes designed for Tumblr", githubLink:"https://github.com/queendallen/weather-app", link:"https://fallingforthemes.tumblr.com/tagged/my%3A%20themes"}
];

ReactDOM.render(
  <React.StrictMode>
    <App projects={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
