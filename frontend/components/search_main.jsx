import React from 'react';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from './search_main.module.css';
// import { fetchCoachSearch } from '../actions/coaching_sessions_search_actions';

class SearchFields extends React {
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   value: "",
    // }
  }

  // update(field) {
  //   return (e) => this.setState({ [field]: e.currentTarget.value });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();

  // }

  handleClick(field) {
    e.preventDefault();
    <Redirect to={`/sports/${field}`} />
  }


    return (
      <div>
        <div>
          <h1>Find Your Next Coach</h1>
        </div>
        {/* <div>
          <form className={classes.searchForm} onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="I want to train..." 
              onChange={this.update(this.state.value)} 
              value={this.state.value} />
          </form>
        </div> */}
        <div>
          <button type="submit" onClick={()=>this.handleClick(1)}>Football</button>
          <button type="submit" onClick={()=>this.handleClick(2)}>Basketball</button>
          <button type="submit" onClick={()=>this.handleClick(3)}>Soccer</button>
          <button type="submit" onClick={()=>this.handleClick(4)}>Tennis</button>
          <button type="submit" onClick={()=>this.handleClick(5)}>Golf</button>
        </div>
      </div>
    );
  
}

export default SearchFields;
// const mapState = (state) => ({

// });

// const mapDispatch = (dispatch) => ({
//   searchSport: (sportId) => dispatch(fetchCoachSearch(sportId)),
// });

// export default connect(
//   mapState, mapDispatch,
// )(SearchFields);
