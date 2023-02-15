import React from "react";
import SearchBar from "./SearchBar";
// import SearchingItem from "./SearchingItem"
import styles from "../assets/css/Todoform.module.scss";

class Todoform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.input === ""){
      alert("Please enter something")
      return
    }
    this.props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: this.state.input,
      date: new Date().toLocaleDateString(),
    });
    // this.state.input = "";
    this.setState({input: ''});
  }

  handleChange(children) {
    this.setState({ input: children });
  }


  render() {
    const input = this.state.input;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <SearchBar
          input={input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/*<SearchingItem />*/}
      </form>
    );
  }
}

export default Todoform;
