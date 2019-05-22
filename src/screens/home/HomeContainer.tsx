import { connect } from 'react-redux';
import { cocktailScreen } from '..';
import { cocktailListRequest, cocktaiLRequest } from '../../redux/CocktailRedux';
import * as Types from '../../services/api/api.types';
import Home, { PropTypes as SearchStateTypes } from './Home';

const mapStateToProps = (state: SearchStateTypes) => ({
  app: state.app,
});

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch: (data: any) => void) => ({
  onCocktailListRequest: () => dispatch(cocktailListRequest()),
  onCocktailRequest: (data: Types.Drink, componentId: string) => {
    dispatch(cocktaiLRequest(data));
    cocktailScreen(componentId, data.name);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
