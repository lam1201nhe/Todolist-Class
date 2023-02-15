import React from "react";
import Checkbox from "./Checkbox";
import styles from "../assets/css/Todoitem.module.scss";

class Todoitem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {jobsRef ,jobs} = this.props;
    return (
        jobs.map((job, index) => (
          <div className={styles.label} key={index}>
            <label className={job.isComplete ? `${styles.ticked}` : `${styles.notick}`} >
              <Checkbox
                key={job.id}
                job={job}
                completeTodo={this.props.completeTodo}
              />
              {job.text}
            </label>
          </div>
        ))
    );
  }
}

export default Todoitem;
