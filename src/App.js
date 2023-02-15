import React, {Fragment} from "react";
import Todolist from "./components/Todolist";
import styles from './assets/css/App.module.scss';

const App = () => {

    return (
        <Fragment>
            <div className={styles.todoapp}>
                <Todolist/>
            </div>
        </Fragment>
    );

};

export default App;
