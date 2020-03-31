import React, { Component } from 'react'
import Heading from "../reusable/Heading"
import Img from "gatsby-image"


export default class Bundelcart extends Component {
    constructor(props){
        super(props)
        this.state={
            bundles: props.bundles.edges,
            
        }
    }
    render() {
        //console.log(this.state.courses)

        return (
            <section className= "py-5" >
                <div className="container">
                   <Heading title="Bundles"/>
                   <div className="row">
                       {this.state.bundles.map(({node})=>{
                           return(
                               <div
                                   key={node.id}
                                   className="col-11 col-md-6 d-flex mx-auto my-3">
                                       <Img fixed={node.image.fixed}  />
                                       <div className="flex-grow-1 px-3">
                                           <div className="d-flex justify-content-between">
                                               <h6 className="mb-0">{node.title}</h6>
                                               <h6 className="mb-0 text-success">${node.price}</h6>
                                           </div>
                                           <p className="text-muted">
                                               
                                           </p>
                                           <button 
                                           data-item-id={node.id}
                                           data-item-name={node.title}
                                           data-item-price={node.price}
                                           data-item-url="https://ecommerc.netlify.com/ "
                                           data-item-image={node.image.fixed.src}
                                           className="btn btn-warning snipcart-add-item">Join now</button>

                                       </div>
                                   
                               </div>
                           )
                       })

                       }
                       
                       
                    
                   </div>    
                
                
                </div>
                
                
                
            </section>
        )
    }
}
