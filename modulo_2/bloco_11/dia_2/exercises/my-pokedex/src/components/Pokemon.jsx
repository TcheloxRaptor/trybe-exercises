import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render(){
    const { id, name, type, averageWeight, image, moreInfo } = this.props.pokemon;
    return (
      <div className="pokemon-container">
        <h2>#{id}</h2>
        <img src={image} alt={name} />
        <p className="pokemon-name">{name}</p>
        <p className="pokemon-type">{type}</p>
        <p className="pokemon-averageWeight"><strong>Weight:</strong>{` ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <h4 className="pokemon-moreInfo">More info:</h4>
        <a href={moreInfo} className="pokemon-link"><em>Click here</em></a>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
