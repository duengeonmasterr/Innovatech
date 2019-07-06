import React from 'react'
import Heading from "../reusable/Heading"

export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us" />
           <div className="col-10 col-sm-8 mx-auto">
               <form action="https://formspree.io/harshitsachdeva98@gmail.com"  method="POST">
                  <div className="form-group">
                      <input  type="text" id="name" name="name"  placeholder="your name" className="form-control"/>

                  </div>
                  <div className="form-group">
                      <input  type="Email" id="email" name="email"  placeholder="your email address" className="form-control"/>

                  </div>
                  <div className="form-group">
                      <input  type="phone no" id="mobile" name="mobile"  placeholder="contact no" className="form-control"/>

                  </div>
                  <div className="form-group">
                      <textarea  type="text" id="description" name="description"  placeholder="description" className="form-control"/>

                  </div>
                  <button type="submit" className="btn btn-outline-info btn-block">submit</button>
               </form>
           </div>
        </section>
    )
}
