import React from "react";
import "./announce.styles.scss";
const announce = [
  "FREE SHIPPING + RETURNS, FREE MEMBERSHIP, EXCLUSIVE PRODUCTS",
  "SAVE UP TO 40%",
  "NEW MEMBER GET 10%",
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};
class Announce extends React.Component {
   constructor(){
       super();
       this.state = {
           current_idex: 0
       }
   }
   mySlide = null
   increaseIndex = () => {
    this.setState({
      current_idex: this.state.current_idex == announce.length - 1 ? 0 : this.state.current_idex + 1
    })
   }
   nextArrow = () => {
    clearInterval(this.mySlide);
    this.increaseIndex();
    this.mySlide = setInterval(this.increaseIndex,5000);
   } 
   backArrow = () => {
    clearInterval(this.mySlide);
    this.setState({
      current_idex: this.state.current_idex == 0 ? announce.length - 1 : this.state.current_idex - 1
    })
    this.mySlide = setInterval(this.increaseIndex,5000);
   }
   componentDidMount() {
        this.mySlide = setInterval(()=> {
            this.setState({
                current_idex: this.state.current_idex == announce.length - 1 ? 0 : this.state.current_idex + 1
            })
        },5000);
     }
   
   componentWillUnmount() {
       clearInterval(this.mySlide);
   }
   render(){
        const {current_idex} = this.state;
        return (
          <div className="announce">
             <div className="arrow_item" onClick={this.backArrow}>
                <i className="fas fa-chevron-left"></i>
             </div>
             <div className='announce_text arrow_item'>
                  {announce[current_idex]}
             </div>
             <div className="arrow_item" onClick={this.nextArrow}>
               <i className="fas fa-chevron-right"></i>
             </div>
            
          </div>
        );
      };
   
}

export default Announce;
