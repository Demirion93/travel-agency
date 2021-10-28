import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addTags, removeTags, changeToDuration, changeFromDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addTags: tags => dispatch(addTags(tags)),
  removeTags: tags => dispatch(removeTags(tags)),
  changeFromDuration: duration => dispatch(changeFromDuration(duration)),
  changeToDuration: duration => dispatch(changeToDuration(duration)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
