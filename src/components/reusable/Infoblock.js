import React from "react"
import Heading from "./Heading"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              This website is the platform which connects students and teachers from different sections of society. Here, students will find video lectures, written notes and 24 hour guidance from the teachers connected to us remotely. Proper login system for students and teachers and formalized notes for studying various programming languages starting from basic Python, C, C++, Java, Web development, Android App development, Data Structures and Algorithms to advanced levels at least cost ever makes this website more approachable and budget friendly to use. 
            </p>
            <a href="/aboutus/">
                <button className="btn btn-warning btn-lg">{heading}</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
