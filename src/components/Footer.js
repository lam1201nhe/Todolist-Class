import React from "react";
import styles from "../assets/css/Footer.module.scss";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClearAll = () => {

    localStorage.clear();
    window.location.reload(false);
    // this.props.jobs = ['']
  };

  render() {
    return (
      <div className={styles.flexContainer}>
        <hr width="100%" className={styles.hr} />
        <div className={styles.foot}>
          <p>{this.props.jobs.length} item selected</p>
          <button onClick={this.handleClearAll}>Clear All</button>
        </div>
      </div>
    );
  }
}

export default Footer;
