import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { getQuestionWithId } from './httpservice';
import ViewPage from './Components/ViewQuestion';
import GetQuesPage from './Components/GetQuestions';
import Login from './Components/LoginPage';
import LogOutButton from './Components/LogoutButton';
import QuestionGeneration from './Components/QuestionGeneration';
import withReactContent from 'sweetalert2-react-content';
import Layout from './Components/layout';
import Swal from 'sweetalert2';
import { ToastContainer } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import CountDashboard from './Components/CountDashboard';
import "@fontsource/poppins/300.css"; // Light weight
import "@fontsource/poppins/700.css"; // Bold weight

// Add these type definitions at the top
interface QuestionData {
  _id?: string;
  qid: string;
  status: string;
  question: {content: string}[];
  final_answer: {content: string}[];
  solution: {content: string}[];
  option1: {content: string}[];
  dr1: string | {content: string}[];
  option2: {content: string}[];
  dr2: string | {content: string}[];
  option3: {content: string}[];
  dr3: string | {content: string}[];
  topic_name?: string;
  topic_id?: string;
}

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md row py-3" style={{ backgroundColor: '#e3f2fd', width: '110%' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="AcadAllyLogo.png" alt="Acadally Logo" style={{ width: '150px' }} />
        </a>
        
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav me-auto">
            {sessionStorage.getItem('userLoggedIn') === 'true' && (
              <span className="text-center navbar-text fw-bold fs-4" style={{position:'relative', left: '350px'}}>
                Welcome, {sessionStorage.getItem('userName')}!
              </span>
            )}
          </div>
          
          <div className="navbar-nav gap-1">
            <a className="nav-link btn btn-light px-3" 
               href="https://docs.google.com/document/d/1hh8mUaVzAf1JGTsjOEP87prUEngQ1jWDjigZuZiOdqs/edit"
               target="_blank"
               rel="noopener noreferrer">
              Latex Reference
            </a>

            {sessionStorage.getItem('userLoggedIn') === 'true' && (
              <>
                <a className="nav-link btn btn-light px-3" 
                   href={sessionStorage.getItem('userWhere') === 'cki' ? "/cri" : "/cki"}
                   onClick={() => sessionStorage.setItem("userWhere", 
                            sessionStorage.getItem('userWhere') === 'cki' ? "cri" : "cki")}>
                  Go to {sessionStorage.getItem('userWhere') === 'cki' ? "CRI" : "CKI"}
                </a>
                
                <a className="nav-link btn btn-light px-3" href="/dashboard">
                  Dashboard
                </a>
                
                <LogOutButton />
              </>
            )}
          </div>
        </div> */}
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  const [clickedOnView, setClickedOnView] = useState(false);
  const [chosenQues, setChosenQues] = useState<{
    question: QuestionData;
  }>({
    question: {
      qid: '',
      status: 'not_reviewed',
      question: [],
      final_answer: [],
      solution: [],
      option1: [],
      dr1: [],
      option2: [],
      dr2: [],
      option3: [],
      dr3: []
    }
  });
  const [board, setBoard] = useState('');
  const [publication, setPublication] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [chapter, setChapter] = useState('');
  const [lu, setLU] = useState('');
  const [lu_name, setLuName] = useState('');
  const [lus, setLus] = useState<{ id: string; name: string; }[]>([]);
  const [los, setLOs] = useState<{}>({});
  const [qid, setQid] = useState('');
  const [bloom, setBloom] = useState('');
  const [question, setQuestion] = useState<any[]>([]);
  const [viewQue, setViewQue] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [allQues, setAllQues] = useState<QuestionData[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  // useEffect(() => {
  //   setQuestion(question);
  //   let tempViewQues = [];
  //   for (let que of question) {
  //     if (que.Blooms_Level === bloom) {
  //       tempViewQues.push({ question: que.Question });
  //     }
  //   }
  //   setViewQue(tempViewQues);
  // }, [question]);

  // useEffect(() => {
  //   // console.log("Updated question in App:", question);
  //   // getLOs(lu);
  // }, [lu]);

  useEffect(() => {
    if (qid && clickedOnView === false && isChecked === true) {
      getQuestionWithId(qid)
        .then((data: any) => {
          if (data.data.length === 0) {
            const MySwal = withReactContent(Swal)
            MySwal.fire(<p>No Question Found in the DataBase.</p>)
          }
          else {
            console.log("Data recieved: ", data.data);
            setLuName(data.data[0]["LU"])
            let data_updated = data.data.map((dict: any) => removeKeysFromDict(dict, ["LU"]));
            setQuestion(data_updated);
          }
        })
        .catch((error: any) => {
          console.error("Error fetching question:", error);
        });
    }
  }, [clickedOnView])


  const handleChildUpdate = (newState: any) => {
    setGrade(newState.grade);
    setBoard(newState.board);
    setPublication(newState.publication);
    setSubject(newState.subject);
    setChapter(newState.chapter);
    console.log("LU in app.tsx: ", newState.lu);
    setLU(newState.lu);
    // getLearningOutcomes(newState.lu);
    setLus(newState.lus)
    setLuName(newState.lu_name);
    console.log("LU name in app.tsx: ", newState.lu_name);
    setBloom(newState.bloom);
    setQuestion(newState.questions);
    setViewQue(newState.viewQue);
  };

  const handleChildUpdate3 = (value: boolean, questions: any, quest: any, index: number) => {
    setClickedOnView(value);
    setAllQues(questions);
    setChosenQues(quest);
    setIndex(index);
  };

  const removeKeysFromDict = (dict: { [key: string]: any }, keysToRemove: string[]): { [key: string]: any } => {
    return Object.keys(dict)
      .filter(key => !keysToRemove.includes(key))
      .reduce((newDict, key) => {
        newDict[key] = dict[key];
        return newDict;
      }, {} as { [key: string]: any });
  };

  // const getQuesWithID = (e: any) => {
  //   e.preventDefault();
  //   const formDet = new FormData(e.target);
  //   const formDetails = Object.fromEntries(formDet.entries());
  //   setQid(formDetails.qid as string)

  //   getQuestionWithId(formDetails.qid as string)
  //     .then((data: any) => {
  //       if (data.data.length === 0) {
  //         const MySwal = withReactContent(Swal)
  //         MySwal.fire(<p>No Question Found in the DataBase.</p>)
  //       }
  //       else {
  //         console.log("Data recieved: ", data.data);
  //         setLuName(data.data[0]["LU"])
  //         let data_updated = data.data.map((dict: any) => removeKeysFromDict(dict, ["LU"]));
  //         setQuestion(data_updated);
  //       }
  //     })
  //     .catch((error: any) => {
  //       console.error("Error fetching question:", error);
  //     });

  //   // getLearningOutcomes(formDetails.qid as string);
  // };

  // const getLearningOutcomes = (lu_id: string) => {
  //   if (lu_id && (lu_id !== lu)) {
  //     getLOs(lu_id)
  //       .then((data: any) => {
  //         if (data.data.length === 0) {
  //           const MySwal = withReactContent(Swal)
  //           MySwal.fire(<p>No Learning Outcomes Found in the DataBase.</p>)
  //         }
  //         else {
  //           console.log("Data recieved: ", data.data);
  //           setLOs(data.data);
  //         }
  //       })
  //   }
  // }


  // Function to handle the switch change
  // const handleChange = (event: any) => {
  //   setIsChecked(event.target.checked);
  // };


  return (
    <Router>
      <div className="container-fluid">
        <ToastContainer />

        <div className="row d-flex">
          <div className="col-lg-12 d-flex">
            <NavBar />
          </div>


          <Routes>
            
            <Route
              path='/'
              element={
                !sessionStorage.getItem('userLoggedIn') ? (
                  <Login />
                ) : (
                  <Navigate to="/cri" />
                )
              }
            />
            <Route
              path='/cri'
              element={
                (
                  <div className="col-lg-12">
                    {clickedOnView ? (
                      <div className='row'>
                        <ViewPage
                          allQues={allQues}
                          index={index}
                          board={board}
                          lus={lus}
                          grade={grade}
                          subject={subject}
                          chapter={chapter}
                          quest={chosenQues}
                          onUpdateClickedOnView={setClickedOnView}
                          onUpdateState={setChosenQues}
                        />
                      </div>
                    ) : (
                      <div className="row">
                        <GetQuesPage
                          showIt={isChecked}
                          board={board}
                          publication={publication}
                          grade={grade}
                          subject={subject}
                          chapter={chapter}
                          lu={lu}
                          lu_name={lu_name}
                          bloom={bloom}
                          lus={lus ? lus : []}
                          question={question}
                          viewQue={viewQue}
                          onUpdateState={handleChildUpdate}
                          onUpdateQuestions={setQuestion}
                          onUpdateClickedOnView={handleChildUpdate3}
                        />
                      </div>
                    )}
                  </div>
                )}
              />
            <Route
              path='/dashboard'
              element= {
                (<div className='dashboard'>
                  <CountDashboard />
                </div>)
              }
            />  
            <Route
              path='/cki'
              element= {
                (<div className='dashboard mt-5'>
                  <Layout />
                </div>)
              }
            /> 
            {/*
            <Route
              path='/generate-questions'
              element={
                !sessionStorage.getItem('access_token') ? (
                  <Navigate to="/" />
                ) : (
                  <QuestionGeneration />
                )
              }
            />*/}
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;