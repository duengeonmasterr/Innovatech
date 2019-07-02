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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dignissimos ipsa nesciunt dicta, ducimus aspernatur dolore ullam
              voluptate corporis laudantium natus libero tempore! Possimus
              debitis atque molestiae vero, enim ut?
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
