import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import topics from "../Data/allTopicData";
import { getTopics, getDBQuestions, generateQues } from '../httpservice';
import { SyncLoader } from 'react-spinners';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// export let [clickedOnView, setClickedOnView] = useState(false);

interface Props {
    // showIt: boolean;
    count: string;
    grade: string;
    subject: string;
    chapter: string;
    lu: string;
    lu_name: string;
    bloom: string;
    question: {
        _id: string;
        blooms_level: string;
        question: any[];
        correct_answer: [];
        explanation: [];
        option1: [];
        option2: [];
        option3: [];
    }[];
    viewQue: { question: string; }[];

    onUpdateState: (newState: {
        count: string, grade: string, subject: string, chapter: string, lu: string, lu_name: string, bloom: string, question: {
            _id: string;
            blooms_level: string;
            question: any[];
            correct_answer: [];
            explanation: [];
            option1: [];
            option2: [];
            option3: [];
        }[],
        viewQue: { question: string; }[],
    }) => void;

    onUpdateQuestions: (question: {
        // _id: string;
        blooms_level: string;
        question: any[];
        correct_answer: [];
        explanation: [];
        option1: [];
        option2: [];
        option3: [];
    }[]) => void;
    onUpdateClickedOnView: (value: boolean, questions: {}, question: {}, index: number) => void;
}


const GetQuesPage: React.FC<Props> = ({ count, grade, subject, chapter, lu, lu_name, bloom, question, viewQue, onUpdateState, onUpdateClickedOnView }) => {
    const override: React.CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "black",
    };

    let [loading, setLoading] = useState(false);
    // let [color, setColor] = useState("#ffffff");

    // const [displayDrops, setDisplayDrops] = useState('');

    const [grades, setGrades] = useState<string[]>([]);
    const [subjects, setSubjects] = useState<string[]>([]);
    const [chapters, setChapters] = useState<string[]>([]);
    const [lus, setLus] = useState<{ id: string; name: string; }[]>([]);
    const [selectedLU, setSelectedLU] = useState("");
    const blooms = ["Remember", "Understand"];
    const [viewQues, setviewQues] = useState<{ question: string; }[]>([]);
    const [questions, setQues] = useState<{
        _id: string;
        blooms_level: string;
        question: any[];
        correct_answer: [];
        explanation: [];
        option1: [];
        option2: [];
        option3: [];
    }[]>([]);

    const [isDisabled, setIsDisabled] = useState(true);
    const [isGenerateDisabled, setIsGenerateDisabled] = useState(true);

    const [clickedOnView, setClickedOnView] = useState(false);
    // const [selectedOption, setSelectedOption] = useState("not_reviewed")
    // const showSwal = () => {
    //     withReactContent(Swal).fire({
    //       title: <i>Input something</i>,
    //       input: 'text',
    //       inputValue,
    //       preConfirm: () => {
    //         setInputValue(Swal.getInput()?.value || '')
    //       },
    //     })
    //   }

    const removeDups = (arr: []): [] => {
        const uniqueArr: [] = [];
        const seen = new Map<string, boolean>();

        for (const num of arr) {
            if (!seen.has(num)) {
                uniqueArr.push(num);
                seen.set(num, true);
            }
        }

        return uniqueArr;
    };

    useEffect(() => {
        fetchGrades();

    }, []);

    useEffect(() => {
        localStorage.setItem('view', JSON.stringify(clickedOnView));
    }, [clickedOnView]);

    // useEffect(() => {
    //     const items = localStorage.getItem('view');
    //     if (items) {
    //         setClickedOnView(JSON.parse(items));
    //     };
    //     console.log("LU ============= ", lu);
    // }, []);

    useEffect(() => {
        // getSubjects(grade)
        //     .then((data: any) => {
        //         // console.log("Subjects: ", data);
        //         setSubjects(removeDups(data.subjects));

        //         onUpdateState({count, grade, subject, chapter, lu, lu_name, bloom, question: questions, viewQue: viewQues });
        //     })
        // .catch((error: any) => console.error('Error fetching subjects:', error));


        if (subject === '') {
            let tempSubjects = []
            for (let i = 0; i < topics.length; i++) {
                if (topics[i]["grade"] === grade) {
                    tempSubjects.push(topics[i]["subject"]);

                }
            }
            setSubjects(tempSubjects);
        }
        else {
            let tempSubjects = []
            for (let i = 0; i < topics.length; i++) {
                if (topics[i]["grade"] === grade) {
                    tempSubjects.push(topics[i]["subject"]);

                }
            }
            setSubjects(tempSubjects);

            let tempChapters = []
            for (let i = 0; i < topics.length; i++) {
                if ((topics[i]["grade"] === grade) && (topics[i]["subject"] === subject)) {
                    for (let j = 0; j < topics[i]["chapters"].length; j++) {
                        tempChapters.push(topics[i]["chapters"][j]["name"]);
                    }
                }
            }
            setChapters(tempChapters)
        }
    }, [grade]);

    useEffect(() => {
        // getChapters(grade, subject)
        //     .then((data: any) => {
        //         // console.log("Chapters: ", data);
        //         let chaps = removeDups(data.chapters);
        //         // console.log(chaps);
        //         setChapters(chaps);
        //         // setBlooms(["Remember", "Understand", "Apply", "Analyse"]);

        //         // setQues([]);
        //         // setviewQues([]);
        //         onUpdateState({count, grade, subject, chapter, lu, lu_name, bloom, question: questions, viewQue: viewQues });
        //     })
        //     .catch((error: any) => console.error('Error fetching chapters:', error));

        let tempChapters = []
        for (let i = 0; i < topics.length; i++) {
            if ((topics[i]["grade"] === grade) && (topics[i]["subject"] === subject)) {
                for (let j = 0; j < topics[i]["chapters"].length; j++) {
                    tempChapters.push(topics[i]["chapters"][j]["name"]);
                }
            }
        }
        setChapters(tempChapters)
    }, [subject]);

    useEffect(() => {
        if (chapter !== '') {
            setLoading(true);
            getTopics(grade, subject, chapter)
                .then((data: any) => {
                    setLoading(false);
                    console.log("Topics: ", data);
                    let temp = [];
                    for (let det of data.data) {
                        temp.push({ id: det.topic_id, name: det.topic_name });
                    }
                    setLus(temp);
                    // setBlooms(["Remember", "Understand", "Apply", "Analyse"]);

                    if (questions.length === 0) { handleSubmit(); }
                    // setQues([]);
                    // setviewQues([]);
                    onUpdateState({ count, grade, subject, chapter, lu, lu_name, bloom, question: questions, viewQue: viewQues });
                    // console.log("LUs: ", data.learning_units);
                })
                .catch((error: any) => {
                    setLoading(false);
                    console.error('Error fetching LUs:', error)
                });

        }

        // let tempTopics = []
        // for(let i = 0; i<topics.length; i++){
        //     if(topics[i]["grade"] === grade && topics[i]["subject"] === subject){
        //         for(let j = 0; j<topics[i]["chapters"].length; j++){
        //             if(topics[i]["chapters"][j]["name"] == chapter){
        //                 tempTopics = topics[i]["chapters"][j]["topics"];
        //             }
        //         }
        //     }
        // }
        // setLus(tempTopics);
    }, [chapter]);

    useEffect(() => {
        setQues(question);

        // onUpdateState({ grade, subject, chapter, lu, bloom, question: question, viewQue: viewQue });
        // console.log("Received question prop in GetQuesPage:", question);
        let tempViewQues: any[] = [];
        for (let que of question) {
            let que_str = '';
            // let part: { type: string; content: string; }[];
            for (let part of que.question) {
                // console.log("IMportant ==================> ", part)
                que_str += part.content
            }
            tempViewQues.push({ question: que_str });
        }
        // console.log("Extracted ViewQues: ", tempViewQues);
        setviewQues(tempViewQues);
    }, [question]);

    useEffect(() => { console.log(blooms); }, [blooms]);

    useEffect(() => { console.log("Updated ViewQues: ", viewQues) }, [viewQues]);



    useEffect(() => {
        // Any side effect that depends on props, e.g., re-fetch data if props change
        console.log("Updated values in App.tsx: ", onUpdateState);
    }, [onUpdateState]);

    const fetchGrades = () => {
        // getGrades()
        //     .then((data: any) => {
        //         // console.log("Grades: ", data);
        //         let grades = data.grades.sort((n1: string, n2: string) => {
        //             if (n1 > n2) {
        //                 return 1;
        //             }
        //             if (n1 < n2) {
        //                 return -1;
        //             }
        //             return 0;
        //         });
        //         setGrades(data.grades);
        //     })
        //     .catch((error: any) => console.error('Error fetching grades:', error));
        let temp: string[] = [];
        for (let i = 0; i < topics.length; i++) {
            if (temp.includes(topics[i]["grade"]) == false) {
                temp.push(topics[i]["grade"]);
            }
        }
        setGrades(temp);
        console.log("Grades: ", grades);
    };

    const fetchSubjects = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGrade = event.target.value;
        onUpdateState({ count, grade: selectedGrade, subject, chapter, lu, lu_name, bloom, question, viewQue });
    };

    const fetchChapters = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSubject = event.target.value;
        onUpdateState({ count, grade, subject: selectedSubject, chapter, lu, lu_name, bloom, question, viewQue });
    };

    const setLUID = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const tempLU = event.target.value;
        setSelectedLU(tempLU);
        console.log("LU select: ", tempLU);
        let tempLU_name: string = "";
        lus.map((lu, _) => {
            if (lu.id === tempLU) {
                tempLU_name = lu.name;
            }
        });
        // setQues([]);
        // setviewQues([]);
        // console.log("final print .................");
        onUpdateState({ count, grade, subject, chapter, lu: tempLU, lu_name: tempLU_name, bloom, question: questions, viewQue: viewQues });
        if (bloom !== "") {
            console.log("========================= Blooms: ", bloom);
            setIsDisabled(false);
        }
        // getLearningOutcomes(tempLU);
        // setBlooms(["Remember", "Understand", "Apply", "Analyse"]);
        // onUpdateState({ grade, subject, chapter, lu: selectedLU , question, viewQue});
        // setIsDisabled(false);
    };

    const fetchLUs = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedChapter = event.target.value;
        // setSubjecttest(selectedChapter);
        onUpdateState({ count, grade, subject, chapter: selectedChapter, lu, lu_name, bloom, question, viewQue });
    };

    const setBloomLevel = (event: any) => {
        const selectedBloom = event.target.value;
        // console.log("Selected Blooms Level: ", selectedBloom);
        onUpdateState({ count, grade, subject, chapter, lu, lu_name, bloom: selectedBloom, question: questions, viewQue: viewQues });
        setIsDisabled(false);
    };

    const setCount = (event: any) => {
        const countValue = event.target.value;
        onUpdateState({ count: countValue, grade, subject, chapter, lu, lu_name, bloom, question: questions, viewQue })
    }

    const handleSubmit = () => {
        console.log("=============== Inside handle submit =====================");
        if (questions.length === 0 && isDisabled === false) {
            setLoading(true);
        }
        setTimeout(() => { }, 3000);
        getDBQuestions(selectedLU ? selectedLU : lu)
            .then((data: any) => {
                console.log("Questions: ", data);
                setLoading(false);
                if (data.data.length === 0) {
                    // handleShow();
                    // setIsGenerateDisabled(false);

                    if (lu !== "" || bloom !== "") {
                        const MySwal = withReactContent(Swal)
                        MySwal.fire(<p>No Question Found in the DataBase. Please Click on "Generate" button to generate it!</p>)
                        setIsGenerateDisabled(false);
                    }
                    else {
                        setIsGenerateDisabled(true);
                    }
                    setQues([]);
                    setviewQues([]);
                    onUpdateState({ count, grade, subject, chapter, lu, lu_name, bloom, question: questions, viewQue: viewQues });
                } else {
                    setQues(data.data);
                    console.log("After setting questions: ", data.data);
                    onUpdateState({ count, grade, subject, chapter, lu, lu_name, bloom, question: data.data, viewQue });
                    let tempViewQUes = [];
                    let tempQues = [];
                    for (let que_det of data.data) {
                        if (que_det.blooms_level === bloom) {
                            setIsGenerateDisabled(true);
                            let queText_str = "";
                            for (let que_text of que_det.question) {
                                queText_str += que_text.content;
                            }
                            tempViewQUes.push({ 'question': queText_str });
                            tempQues.push(que_det);

                        }

                    }

                    if (tempQues.length < 1) {
                        const MySwal = withReactContent(Swal)
                        MySwal.fire(<p>No Question Found in the DataBase. Please Click on "Generate" button to generate it!</p>)
                        setIsGenerateDisabled(false);
                    }
                    // temp1.push({ 'question': data.data[0].Question })
                    setviewQues(tempViewQUes);
                    setQues(tempQues);
                    onUpdateState({ count, grade, subject, chapter, lu, lu_name, bloom, question, viewQue: viewQues });
                    setIsGenerateDisabled(false);
                    // console.log("Questions:", viewQues);
                }
            })
            .catch((error: any) => console.error('Error fetching Questions:', error));
    };

    const generateQuestions = () => {
        setLoading(true);

        console.log("Provided Topic for generation..............", selectedLU ? selectedLU : lu);
        generateQues(count, selectedLU ? selectedLU : lu, grade, subject, chapter, bloom).then(
            (data: any) => {
                setLoading(false);
                // console.log("Generated Ques ==============> ", data.data);

                // setQues(data.data);
                onUpdateState({ count, grade, subject, chapter, lu, lu_name, bloom, question: data.data, viewQue });
                let tempViewQUes = [];
                let tempQues = [];
                for (let que_det of data.data) {
                    if (que_det.blooms_level === bloom) {
                        tempViewQUes.push({ 'question': que_det.question });
                        tempQues.push(que_det);
                    }
                }
                // temp1.push({ 'question': data.data[0].Question })
                setviewQues(tempViewQUes);
                setQues(tempQues);
                onUpdateState({ count, grade, subject, chapter, lu, lu_name, bloom, question, viewQue: viewQues });
                // console.log("Questions:", viewQues);
                handleSubmit();
                // setTimeout(() => {setLoading(false); handleSubmit();}, 2000);
            }
        ).catch((error: any) => {
            console.log("Error occured: ", error);
            setLoading(false);
        })
        // handleSubmit();
    };


    const viewQuestion = (index: any) => {
        // console.log("in Get Ques, ................", index);
        // console.log("IN get ques................: Question ===>>", questions[index]);
        setClickedOnView(true);
        onUpdateClickedOnView(true, questions, questions[index], index);
    };

    // const handleOptionChange = (e: any) => {
    //     e.preventDefault();
    //     setSelectedOption(e.target.value);
    // }

    return (
        <div className="col-lg-12">
            {loading && (
                <div className=" sweet-loading" style={{ position: 'absolute', zIndex: '1', top: '50%', right: '50%' }}>
                    <SyncLoader
                        color={"black"}
                        loading={loading}
                        cssOverride={override}
                        size={15}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        speedMultiplier={1}
                    />
                </div>
            )}

            <div style={{ position: 'relative', zIndex: 0, filter: loading ? 'blur(5px)' : 'none', }}>
                <div className="col-md-12 mt-5">
                    <h2 className="text-center">
                        Please select
                        <span className="fw-bold"> Grade</span>,
                        <span className="fw-bold"> Subject</span>,
                        <span className="fw-bold"> Chapter </span>, and
                        other details
                        to generate MCQs
                    </h2>
                </div>

                <div className="row mb-2">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 d-flex justify-content-center py-2 mt-4">
                        <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '150px' }} value={grade} onChange={fetchSubjects} >
                            <option value="" disabled >Pick a grade</option>
                            {[...grades].map((grade_list, index) => (
                                <option key={index}>{grade_list ? grade_list : grade}</option>
                            ))}
                        </select>

                        <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '260px' }} value={subject} onChange={fetchChapters} >
                            <option value="" disabled >Pick one of the given subjects</option>
                            {subjects.map((subject_list, index) => (
                                <option key={index}>{subject_list ? subject_list : subject}</option>
                            ))}
                        </select>

                        <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '252px' }} value={chapter} onChange={fetchLUs} >
                            <option value="" disabled >Pick from the given chapters</option>
                            {chapters.map((chapter_list, index) => (
                                <option key={index}>{chapter_list ? chapter_list : chapter}</option>
                            ))}
                        </select>

                        <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '235px' }} value={lu} onChange={setLUID} >
                            <option value="" disabled>Pick from the given Topics</option>
                            {lus.map((lu, index) => (
                                <option key={index} value={lu.id}>
                                    {lu.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row mt-1">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 d-flex justify-content-center">
                        <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '250px' }} value={bloom} onChange={setBloomLevel} >
                            <option value="" disabled >Pick from the given Bloom's Levels</option>
                            {blooms.map((bloom, index) => (
                                <option key={index} value={bloom}>{bloom}</option>
                            ))}
                        </select>

                        <input className="btn border border-primary mx-3" style={{ maxWidth: '260px' }} placeholder="Questions to generate (1 - 10)" value={count} type="text" name="count" id="count" onChange={setCount} />
                    </div>
                    <div className="col-md-1"></div>
                </div>

                {/* <div className="row mt-4">
                <div className="col-md-5"> <hr /> </div>
                <div className="col-md-2">
                    <h3 className="text-center">OR</h3>
                </div>
                <div className="com-md-5"> <hr /> </div>
            </div> */}

                {/* <div className="row d-flex justify-content-center mt-4">
                <label htmlFor="qID" style={{maxWidth: '265px'}}> <p className="fw-bold m-0 p-0">Question ID</p>
                    <input className="form-control" type="text" name="qID" id="qID" placeholder="Enter thge 'Question ID' Here" />
                </label>
            </div> */}

                <div className="row d-flex justify-content-center mt-3">
                    <button type="button" className="btn btn-primary me-3" style={{ width: '125px' }} disabled={isDisabled} onClick={handleSubmit}>
                        Submit
                    </button>
                    <button className="btn btn-primary btn-sm float-end ms-2" style={{ width: '125px' }} disabled={isGenerateDisabled} onClick={generateQuestions}>
                        GENERATE
                    </button>
                    {/* <button className="btn btn-primary btn-sm float-end ms-2" style={{ width: '125px' }} disabled={isGenerateDisabled || showIt} onClick={generateQuestions}>
                    GENERATE
                </button> */}
                </div>


                <div className="row mt-4 d-flex">
                    {/* <div className="radio"> */}

                    {/* </div> */}
                    {/* <input type="radio" name="typeOfQuestionsBasedOnReview" id="typeOfQuestionsBased" value={"not_reviewed"} />
                <label htmlFor="typeOfQuestionsBasedOnReview">HTML</label> */}
                    {/* <label className="d-inline-flex">
                    <input type="radio" value="not_reviewed" checked={selectedOption === "not_reviewed"} onChange={handleOptionChange}/>
                    For Review
                </label>
                <label className="d-inline-flex">
                    <input type="radio" value="accepted" checked={selectedOption === "accepted"} onChange={handleOptionChange} />
                    Accepted
                </label>  */}
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-md-10 mb-2" style={{ backgroundColor: '#f9f9f9' }}>
                        Questions for Topic: &nbsp; <strong> {lu_name} </strong>
                        <hr />
                        {viewQues.map((question, index) => (
                            <div className="row" key={index}>
                                {/* Questions for LU: <strong> {lu} </strong> */}
                                <div className="col-md-12 my-2">
                                    Que {index + 1}: &nbsp; {question.question} &nbsp; &nbsp;
                                    <button className="btn btn-primary btn-sm float-end" value={index} onClick={() => viewQuestion(index)}>
                                        VIEW
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default GetQuesPage;