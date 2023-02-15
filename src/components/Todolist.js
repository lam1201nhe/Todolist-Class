import React from "react";
import Todoform from "./Todoform";
import Todoitem from "./Todoitem";
import Footer from "./Footer";
import styles from "../assets/css/Todolist.module.scss";
import JobsList from './JobsList'

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    const getItem = JSON.parse(localStorage.getItem("jobs"));
    this.state = {
      jobs: getItem ?? [],
    };
    // this.listRef = React.createRef();
    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  // listRef = this.state.jobs;

  //Add new Job
  addTodo(job) {
    this.setState((prev) => {
      this.pushLocalStorage([...prev.jobs, job], true);
      return {
        ...prev,
        jobs: [...prev.jobs, job],
      };
    });
// hello guy
  }

  //Complete Job
  completeTodo(id) {
    let updateTodo = this.state.jobs.map((job) => {
      if (job.id === id) {
        job.isComplete = !job.isComplete;
      }
      return job;
    });
    this.setState({ jobs: updateTodo });
    this.pushLocalStorage(updateTodo, false);
  }

  //Load Data and Set
  pushLocalStorage = (jobs, check) => {
    if (check) {
      var newJobs = jobs;
      var jsonJob = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJob);
    } else {
      localStorage.clear();
      var newJob = jobs;
      var jsonJob = JSON.stringify(newJob);
      localStorage.setItem("jobs", jsonJob);
    }
  };

  render() {
    return (
      <div className={styles.todolist}>
        <div className={styles.todoform}>
          <header className={styles.title}>Daily To Do List</header>
          <Todoform onSubmit={this.addTodo} />

          <div className={styles.todoitem}>
            {/*<h1  onClick={() => console.log(this.listRef.current)}>Yeah sure</h1>*/}
            <Todoitem
                jobs={this.state.jobs}
                jobsRef={this.listRef}
                completeTodo={this.completeTodo} />
          </div>
          <Footer jobs={this.state.jobs} />
        </div>
      </div>
    );
  }
}

export default Todolist;
