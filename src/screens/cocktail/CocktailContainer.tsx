import { connect } from 'react-redux';
import Cocktail, { PropsTypes as CocktailStateTypes } from './Cocktail';

const mapStateToProps = (state: CocktailStateTypes) => ({
  app: state.app,
});

export default connect(mapStateToProps)(Cocktail);
