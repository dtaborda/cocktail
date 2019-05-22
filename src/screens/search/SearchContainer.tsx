import { connect } from 'react-redux';
import { onClose } from '../';
import { filterCocktaiLRequest } from '../../redux/CocktailRedux';
import Search,
  { FilterTypes,
    PropTypes as SearchStateTypes,
  } from './Search';

const mapStateToProps = (state: SearchStateTypes) => ({
  app: state.app,
});

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch: (data: any) => void) => ({
  onFilterCocktailListRequest: (filter: FilterTypes) => dispatch(filterCocktaiLRequest(filter)),
  onCloseSearchModal: () => onClose(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
