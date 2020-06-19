import React from 'react';
import { Link } from 'react-router-dom';
import classes from './search_fields.module.css';

class SearchFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  update() {
    return (e) => {
      this.setState({
        search: e.target.value,
      });
    };
  }

  handleSubmit() {

  }

  render() {
    const { search } = this.state;

    return (
      <div className={classes.searchFieldMain}>
        <div className={classes.searchFieldBox}>
          <div className={classes.searchFieldBanner}>
            <h1>Find Your Next Coach</h1>
          </div>
          <div className={classes.search}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="What sport would you like to work on"
                onChange={(e) => this.setState({ search: e.target.value })}
              />
              <div>
                <ul>

                </ul>
              </div>
            </form>
          </div>
          <div className={classes.searchFieldButtons}>
            <div className={classes.buttonsR1}>
              <Link to="/sports/1">Football</Link>
              <Link to="/sports/2">Basketball</Link>
              <Link to="/sports/3">Soccer</Link>
            </div>
            <div className={classes.buttonsR2}>
              <Link to="/sports/4">Tennis</Link>
              <Link to="/sports/5">Golf</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default SearchFields;
