import React from "react";
import styles from '../assets/css/Checkbox.module.scss'

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //Thieu chu job khi get props
    this.props.completeTodo(this.props.job.id);
  }

  render() {
    const { job } = this.props;
    return (
      <>
          <input
            value={job.text}
            type="checkbox"
            className={styles.circle}
            defaultChecked={this.props.job.isComplete ? "checked" : ""}
            onChange={this.handleChange}
          />
      </>
    );
  }
}

export default Checkbox;
