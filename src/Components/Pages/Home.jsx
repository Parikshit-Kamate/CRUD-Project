import React from 'react';
import cpp from '../Static/cpp.jpg';
import dsa from '../Static/dsa.jpg';
import data from '../Static/data.jpeg';
import python from '../Static/python.jpg';
import java from '../Static/java.jpg';
import react from '../Static/react.png';
import learnpython from '../Static/learnpython.png';
import courses from '../Static/courses.jpg';
import datascience from '../Static/datascience.png';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const syllabusLinks = {
        cpp: '/syllabus/cplus.pdf',
        dsa: '/syllabus/dsa.pdf',
        data: '/syllabus/dataScience.pdf',
        python: '/syllabus/python.pdf',
        java: '/syllabus/java.pdf',
        react: '/syllabus/reactjs.pdf'
    };

    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={learnpython} className="d-block w-100" alt="Learn Python" height={400} />
                    </div>
                    <div className="carousel-item">
                        <img src={datascience} className="d-block w-100" alt="Data Science" height={400} />
                    </div>
                    <div className="carousel-item">
                        <img src={courses} className="d-block w-100" alt="Courses" height={400} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="d-flex justify-content-evenly flex-wrap mt-5 pb-5">
                {[{ img: cpp, title: "C++", syllabus: syllabusLinks.cpp }, { img: dsa, title: "DSA", syllabus: syllabusLinks.dsa }, { img: data, title: "Data Science", syllabus: syllabusLinks.data }]
                    .map((card, index) => (
                        <div className="card d-flex flex-column align-items-stretch" style={{ width: '18rem' }} key={index}>
                            <img src={card.img} className="card-img-top" alt="three courses" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <div className="mt-auto">
                                    <NavLink to="/register" className="btn btn-primary">Register</NavLink> <br />
                                    <a href={card.syllabus} className="btn btn-primary ms-1 mt-3" target="_blank">Download</a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="d-flex justify-content-evenly flex-wrap mt-5 pb-5">
                {[{ img: python, title: "Python", syllabus: syllabusLinks.python }, { img: java, title: "Java", syllabus: syllabusLinks.java }, { img: react, title: "React JS", syllabus: syllabusLinks.react }]
                    .map((card, index) => (
                        <div className="card d-flex flex-column align-items-stretch" style={{ width: '18rem' }} key={index}>
                            <img src={card.img} className="card-img-top" alt="courses" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <div className="mt-auto">
                                    <NavLink to="/register" className="btn btn-primary">Register</NavLink> <br />
                                    <a href={card.syllabus} className="btn btn-primary ms-1 mt-3" target="_blank">Download</a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;
