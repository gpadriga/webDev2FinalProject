import React from 'react';
import './App.css';
// import { Provider } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Header from "./components/Header";
import DisplayPosts from "./components/DisplayPosts.js"
import Footer from "./components/Footer";
// import question from "./images/question.png"
import { connect } from "react-redux";

import AskQuestion from "./components/AskQuestion";
import DisplayQuestions from "./components/DisplayQuestions";
import UserQuestions from "./components/IndividualUserQuestion";
import EditUserQues from "./components/editUserQues";
import DeleteUserQues from "./components/deleteUserQues";
//import SideNavBar from './components/SideNavBar';
import SingleQuestion from "./components/SingleQuestion";
import SearchQuestions from "./components/SearchQuestion";
import Error404Page from './components/Error404Page';
//import Error400Page from './components/Error400Page';
import Error500Page from './components/Error500Page';
import Graph from './components/Graph';

// function App(props) {
class App extends React.Component {

  componentDidMount() {
    // console.log(this.props);
  }

  render() {

    return (
      <div  className="displayPostBody">
        <Router history={history}>

          <Header />
          {this.props.auth.email ? <AskQuestion></AskQuestion> : null}
          {/* <SideNavBar></SideNavBar> */}
          <SearchQuestions></SearchQuestions>
          
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br /> */}
          <Switch>
            <Route path="/" exact component={DisplayPosts}></Route>
            <Route path="/askQuestion" component={DisplayQuestions}></Route>
            <Route path="/userQuestions" component={UserQuestions}></Route>
            <Route path="/editUserQues/:quesId" component={EditUserQues}></Route>
            <Route path="/deleteUserQues/:quesId" component={DeleteUserQues}></Route>
            <Route path="/singleQuestion/:quesId" component={SingleQuestion}></Route>
            <Route path="/BarData" component={Graph}></Route>
            <Route path="/serverError" component={Error500Page}></Route>
            <Route path="**" component={Error404Page} status={404}></Route>
           
          </Switch>
        </Router>

        <Footer></Footer>

      </div>


    );
  }
}

// export default App;

const mapStateToProps = (state) => {

  // console.log("app connect")
  // console.log(state);

  return { auth: state.auth };

}

export default connect(mapStateToProps)(App);
