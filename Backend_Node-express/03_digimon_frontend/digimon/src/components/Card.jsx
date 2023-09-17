import './Card.css';


// Typescript destructuring - found from 
// https://www.kindacode.com/article/react-typescript-working-with-props-and-types-of-props/
//{image, name, level}: DigimonProps
// export interface DigimonProps {
//   image: string,
//   name: string,
//   level: string
// }

const Card = (props) => {
  const {image, name, level} = props.info;

  return (
    <div className="ui raised card">
      <div className="image">
        <img src={ image } alt={ name } />
      </div>
      <div className="content">
        <a className="header" href="#">{ name }</a>
        <div className="meta">
          <span className="date">Joined in 2022</span>
        </div>
        <div className="description">
          { 'Level: ' + level }
        </div>
      </div>
    </div>
  );
};

export default Card;