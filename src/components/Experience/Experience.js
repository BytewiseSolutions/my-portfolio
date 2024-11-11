import React from 'react';
import './Experience.css';
import Timeline from '@mui/lab/Timeline';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import tt from '../../images/t.jpg';

const Experience = () => {
    console.log('Experience component rendered');
    return (
        <section className="container" id="experience">
            <div className="wrapper">
                <h1 className="title">Experience</h1>
                <p className="desc">
                    My work experience as a front-end developer on internship working on different companies' websites.
                </p>
                <div className="timeline-selection">
                    <Timeline>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="secondary" />
                                <TimelineConnector style={{ background: '#854CE6' }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="experience-card">
                                    <div className="top">
                                        <img src={tt} alt="" />
                                        <div className="top-content">
                                            <h3 className="role">Frontend Engineer Intern</h3>
                                            <h4 className="company">TTJT LABS (PTY) Ltd</h4>
                                            <p className="date">June 2023 - October 2023</p>
                                        </div>
                                    </div>
                                    <div className="experience-description">
                                        <span className="experience-desc">
                                            Working on the frontend of the web applications using HTML, CSS and JavaScript
                                        </span>
                                        <div className="skills">
                                          
                                            <p><span>Skills: </span>HTML, CSS, JavaScript, Bootstrap</p>
                                        </div>

                                             <div className="other-details">
                                        <a href="https://ttjtdesgins.net" target="new">ttjtdesgins.net</a>
                                    </div>
                                    </div>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </section>
    );
}

export default Experience;

