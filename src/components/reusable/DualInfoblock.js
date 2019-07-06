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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              incidunt totam. Voluptates obcaecati consequuntur fuga, dolor
              molestias voluptas nesciunt architecto animi aliquam nobis harum
              id similique cupiditate odit fugiat rem eaque assumenda alias
              delectus suscipit repellat facilis vero, ratione ipsam! Ducimus
              minus explicabo id maiores similique corporis expedita blanditiis
              atque cum quam fugiat nisi repellat vel vero distinctio, velit
              necessitatibus.delectus suscipit repellat facilis vero, ratione ipsam! Ducimus
              minus explicabo id maiores similique corporis expedita blanditiis
              atque cum quam fugiat nisi repellat vel vero distinctio, velit
              necessitatibus.delectus suscipit repellat facilis vero, ratione ipsam! Ducimus
              minus explicabo id maiores similique corporis expedita blanditiis
              atque cum quam fugiat nisi repellat vel vero distinctio, velit
              necessitatibus.delectus suscipit repellat facilis vero, ratione ipsam! Ducimus
              minus explicabo id maiores similique corporis expedita blanditiis
              atque cum quam fugiat nisi repellat vel vero distinctio, velit
              necessitatibus.delectus suscipit repellat facilis vero, ratione ipsam! Ducimus
              minus explicabo id maiores similique corporis expedita blanditiis
              atque cum quam fugiat nisi repellat vel vero distinctio, velit
              necessitatibus.
            </p>
          </div>
          <div className="col-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Our leader</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  dignissimos velit molestias reiciendis consequuntur laborum
                  est eosquasi possimus. Quae, officia ex.
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
