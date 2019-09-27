import React from 'react';
import exerciseImg from '../images/exercise.png';
import circlesImg from '../images/circles.png';
import './styles/Card.css';


class Card extends React.Component {
  /*constructor(props){
    super(props);
    this.state = {
      image: 'https://www.designevo.com/res/templates/thumb_small/blue-sportswoman-and-black-male-athlete.png'
    }
  }*/

  /*componentDidMount(){
    setTimeout (() => {
    this.setState({
      image: 'https://img.freepik.com/free-vector/flat-design-fitness-logo-template_23-2148203461.jpg?size=338&ext=jpg'
    })
    }, 5000)
  }*/

  render(){
    const { title, description, img, leftColor, rightColor} = this.props;
    return (
      <div className="card mx-auto Fitness-Card"  style ={{
        backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
      }}>
       
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={img}  className="float-right" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description} </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
