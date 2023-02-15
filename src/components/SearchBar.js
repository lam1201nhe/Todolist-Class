import React from "react";
import styles from "../assets/css/SearchBar.module.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  searchChange = (e) => {
      this.props.handleChange(e.target.value);
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Add new list item"
          value={this.props.input}
          onChange={this.searchChange}
          className={styles.bar}
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </>
    );
  }
}

export default SearchBar;
