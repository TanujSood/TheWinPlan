import React, { useState } from "react";
import './css/strategy_card.css'

class Card extends React.Component {
   render() {
      return (
         <div>
            <div className="container">
            <div className="card">
               <div className="circle">
                  <div class="card-head">
                     <img className="card_img" src={this.props.imgurl} alt={this.props.alt}></img>
                  </div>
               </div>
               <div className="card-body">
                  <div className="product-desc">
                  <span className="product-title">
                           {this.props.title}
                  </span>
                  <span className="product-caption">
                     <ReadMore>{this.props.description}</ReadMore>
                  </span>
                  
                  </div>
               </div>
            </div>
            </div>
         </div>
      );
   }
}
export default Card;

const ReadMore = ({ children }) => {
   const text = children;
   const [isReadMore, setIsReadMore] = useState(true);
   const toggleReadMore = () => {
     setIsReadMore(!isReadMore);
   };
   return (
     <p className="text">
       {isReadMore ? text.slice(0, 380) : text}
       <span onClick={toggleReadMore} className="read-more">
         {isReadMore ? " ...Read more" : " Show less"}
       </span>
     </p>
   );
 };