import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
//import Certificate from './components/Certificate';
//import Skills from './components/Skills';
import Skillsnew from './components/Skillsnew';


class App extends Component {
  render() {

    const person = {
      avatar: 'https://unsplash.com/photos/O0DoKImZQfU',
      name: 'Fahmi Baihaqi',
      profession: 'Product & Marketing enthusiast ',
      bio: '❤ Product Development & Marketing  -  Currently work as COO/Product Guy @Studymate.io,. Traveler, Huge Boston Celtic Fan  ( Go Celtics !!! 🍀 ) .',
      address: 'Bekasi, West Java, Indonesia.',
      social: [
        //{name: 'facebook', url: 'https://facebook.com/oscarbarajastavares'},
        //{name: 'twitter', url: 'https://twitter.com/gndx'},
        //{name: 'github', url: 'https://github.com/gndx'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/fahmi-baihaqi-98731a6b/'}
      ],
      experience: [
        {jobTitle: 'Chief Operating Officer/Co-founder', company: 'Studymate.io', startDate: 'Jun 2017', endDate: 'Present', jobDescription: 'Responsible for product development & marketing '},
        {jobTitle: 'Product Manager', company: 'Happy5', startDate: 'Jan 2016', endDate: 'May 2017', jobDescription: 'Working together with customer & tech team to build Happy5 product roadmap & Ensuring all the new features is delivered on time. '},
        {jobTitle: 'Customer Developmpent & Data Analyst', company: 'Happy5', startDate: 'Dec 2015', endDate: 'Jan 2016', jobDescription: 'Collecting & Analyzing client usage behaviour data in order to improve Happy5 app usability within their organization. Providing solution & findings to product team for feature development.'},
        {jobTitle: 'Digital Strategist', company: 'IPG Mediabrands', startDate: 'Dec 2013', endDate: 'Nov 2015', jobDescription: 'Developing solutions to meet clients’ brand objectives through digital media based on consumer insight and data.'},
        {jobTitle: 'Brand & Market Analyst', company: 'MillwardBrown', startDate: 'Nov 2012', endDate: 'Nov 2013', jobDescription: 'Conducting various quantitative research projects : Pre- testing Ad, Ads effectiveness , Brand Health Tracking for several Multinational companies, such as : Uniliever & Shell.'},
      ],
      education: [
        {degree: 'Economics', institution: 'University of Indonesia', startDate: '2008', endDate: ' Graduate in 2012', description: ''},

      ],
      /*certificate: [
        {name: 'FrontEnd Developer', institution: 'Platzi', date: 'Jan 2015', description: 'Aenean commodo ligula eget dolor. Aenean massa.' },
        {name: 'Backend Developer', institution: 'Platzi', date: 'Jan 2016', description: 'Aenean commodo ligula eget dolor. Aenean massa.' }
      ],*/
      /*skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'}
      ]*/
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                {/*<Certificate certificate={person.certificate} />*/}
                {/*<Skills skills={person.skills} />*/}
                <Skillsnew/>
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
