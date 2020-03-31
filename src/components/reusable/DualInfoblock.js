import React from "react"
import Heading from "./Heading"
export default function DualInfoblock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading}></Heading>
        <div className="row">
          <div className="mx-auto col-8">
            <p className="text-white lead mb-5">
              Why Us?

This website is the platform which connects students and teachers from different sections of society. Here, students will find video lectures, written notes and 24 hour guidance from the teachers connected to us remotely. Proper login system for students and teachers and formalized notes for studying various programming languages starting from basic Python, C, C++, Java, Web development, Android App development, Data Structures and Algorithms to advanced levels at least cost ever makes this website more approachable and budget friendly to use. 

Our Team

Harshita Garg
Sanchi Bansal 
Harshit Sachdeva
            </p>
          </div>
          <div className="col-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://code.org/shared/images/social-media/codeorg2019_social.png"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Our leader</h5>
                <p className="card-text">
                  This website is the platform which connects students and teachers from different sections of society. Here, students will find video lectures, written notes and 24 hour guidance from the teachers connected to us remotely. Proper login system for students and teachers and formalized notes for studying various programming languages starting from basic Python, C, C++, Java, Web development, Android App development, Data Structures and Algorithms to advanced levels at least cost ever makes this website more approachable and budget friendly to use. 
                </p>
                <a href="#" className="btn btn-primary">
                  a message for you
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
