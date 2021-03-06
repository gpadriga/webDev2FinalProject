import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserQuestions } from "../action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import NoContent from "./NoContent";
import '../style/IndividualQuesitons.css'

class IndividualUserQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showComments: null
        };
    }

    async componentDidMount() {

        await this.props.getUserQuestions(this.props.auth.userId);

    }

    openComments = (e) => {
        // e.preventDefault();
        this.setState({ showComments: e });


    }


    commentsIndi = async (comments) => {
        // console.log("indi comments");
        // console.log(comments[0]);
        var comm = [];

        for (let prop in comments) {
            let indi = comments[prop];
            // console.log(indi);
            comm.push(
                <div className="box1" key={indi._id}>
                    <p>{indi.comment}</p>
                    <div className="clsUsername">
                        <div className="spacer"></div>
                        <p>- {indi.userId}</p>
                    </div>
                </div>
            );
        }

        // comm = comments.map(element => {
        //     return (
        //         <div className="box1" key={element._id}>
        //             <p>{element.comment}</p>
        //             <div className="clsUsername">
        //                 <div className="spacer"></div>
        //                 <p>- {element.userId}</p>
        //             </div>
        //         </div>
        //     )

        // });

        // console.log(comm);
        // console.log("return")
        return <h1>hello</h1>;

    }

    render() {

        var userquestions = this.props.questions;
        // console.log("render")
        // console.log(userquestions);

        var questions = [];

        if (this.props.questions !== undefined) {

            for (let prop in userquestions) {
                let indiQuestion = userquestions[prop];
                if (indiQuestion != null) {
                    questions.push(

                        // <div className="centerAlign">
                        <div >
                            {/* <div className="userBody"> */}
                            <div key={indiQuestion.quesId}>
                                <div className="box" onClick={() => this.openComments.bind(this)(indiQuestion.quesId)}>
                                    {/* <div  onClick={() => this.openComments.bind(this)(indiQuestion.quesId)}> */}
                                    {/* <div className="content"> */}
                                    <div className="text-center">
                                        <h2 className="myIndiTitle">{indiQuestion.title}</h2>
                                        <p className="indiDescription">
                                            {indiQuestion.description}

                                        </p>
                                    </div>
                                    {/* <div className="float-right"> */}
                                    <div className="row text-center">
                                        <div className="userDateTime  col-lg-2">
                                            <div >
                                                <FontAwesomeIcon className="" icon={faCalendarAlt} /> | {indiQuestion.date}

                                            </div>
                                            <div>
                                                <FontAwesomeIcon className="" icon={faClock} /> | {indiQuestion.time} {indiQuestion.time > 12 ? <span>AM</span> : <span>PM</span>}

                                            </div>

                                        </div>

                                        {indiQuestion.answers === 0 ?

                                            (
                                                <div className="col-lg-10 btnEditDelete " >
                                                    <div class="forButtons">
                                                        <Link to={`/editUserQues/${indiQuestion.quesId}`}><button className="btn btn-primary">Edit</button></Link>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <Link to={`/deleteUserQues/${indiQuestion.quesId}`}><button className="btn btn-primary">Delete</button></Link>
                                                    </div>
                                                    <br />
                                                    <div>
                                                        
                                                    </div>
                                                </div>
                                            )
                                            : null

                                        }


                                    </div>



                                </div>

                                <br />

                                {/* {( this.state.showComments) ? */}
                                <div>

                                    {
                                        // (this.state.showComments === indiQuestion.quesId) ?


                                        // this.commentsIndi(indiQuestion.comments)
                                        
                                        // <h3 className="text-center">No comments for this Question</h3>

                                        // <div className="box1">
                                        //     <p>Comments</p>
                                        //     <div className="clsUsername">
                                        //         <div className="spacer"></div>
                                        //         <p>-Username</p>
                                        //     </div>
                                        // </div>
                                        // :
                                        indiQuestion.comments.length === 0 ?

                                            <h3 className="text-center myIndiQuestions">No comments for this Question</h3>
                                            :
                                            <h3 className="text-center myIndiQuestions">{`There are ${indiQuestion.comments.length} answers. Please search on above search field for answers.`}</h3>
                                    }

                                </div>

                            </div>
                            <hr />
                        </div>

                    );
                }
            }

            // console.log(questions);
        }
        else {
            questions = (<div>

                <NoContent></NoContent>

            </div>)

        }


        return (
            // <div className="centerAlign">
            //     <div className="userBody">
            //         <div className="box" onClick={this.openComments}>
            //             <div className="content">
            //                 <h2>Title</h2>
            //                 <p>
            //                     Description

            //             </p>
            //             </div>
            //         </div><br />

            //         {(this.state && this.state.showComments) ?
            //             <div className="box1">
            //                 <p>Comments</p>
            //                 <div className="clsUsername">
            //                     <div className="spacer"></div>
            //                     <p>-Username</p>
            //                 </div>
            //             </div>
            //             :
            //             null
            //         }
            //     </div>
            // </div>

            <div>
                <hr />
                <div className="text-center">
                    <h1 className="individualH1">
                        Here are your all the questions which you posted
                </h1>
                    <h3 className="redH3">
                        Note : You can only edit and delete your Question when there are zero answers.
                </h3>
                </div>

                <div className="container">
                    <hr className="indiHR"/>
                    {questions}
                </div>

            </div>



        )
    }
}


const mapStsteToProps = (state) => {

    // console.log("individual question");
    var arr = [];
    for (let prop in state.questions.question) {
        arr.push(state.questions.question[prop]);
    }

    return {
        auth: state.auth,
        questions: arr
    };
}

// export default IndividualUserQuestion;

export default connect(mapStsteToProps, { getUserQuestions })(IndividualUserQuestion);