import "../css/layout.css"
import ChapterSelection from "./ChapterSelection";
import { useState } from "react";
import chapters from "../Data/chapters";
import QuestionDisplay from "./QuestionDisplay";
import QuestionList from "./QuestionList";
import LearningUnitSelection from "./LearningUnitSelection";
import LearningOutcomes from "./LearningOutcomes";
import Loader from "./Loader";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {getChapLearningUnits, getChapQuestions} from "../httpservice";

// const LMS_BASE_URL = "https://app-dev.acadally.com/webservice/rest/server.php";
const LMS_BASE_URL = "https://app.acadally.com/webservice/rest/server.php";
// const CKI_BASE_URL = "https://cki-api.onrender.com";
const CKI_BASE_URL = "http://127.0.0.1:8000";
const TOKEN = "316e5e3b87ab9a724477c624c9725b95";
// const TOKEN = "217d28c6d4005eb3e0bdce9b14d943f0";
const Layout: React.FC = () => {

    // const [userLoggedIn, setUserLoggedIn] = useState(false);
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    const [isLoading, setIsLoading] = useState(false);

    const [isCorrectChapterSelected, setCorrectChapter] = useState(false);
    const [isCorrectQuestionSelected, setCorrectQuestion] = useState(false);
    const [isLUsReady, setIsLUsReady] = useState(false);
    const [isPLUsReady, setIsPLUsReady] = useState(false);
    const [isLOsReady, setIsLOsReady] = useState(false);
    const [learningUnits, setLearningUnitsList] = useState([]);
    const [questionsStatus, setQuestionStatus] = useState<any[]>([]);
    const [reviewQuestions, setReviewQuestions] = useState([0]);
    const [prereqLearningUnits, setPrereqLearningUnitsList] = useState([]);
    const [questionsList, setQuestionsList] = useState([]);
    const [questionIds, setQuestionIds] = useState({});
    // const [allQuestionsList, setAllQuestionsList] = useState([]);
    const [selectedQuestion, setselectedQuestion] = useState<any>({});
    // const [questionsCache, setQuestionsCache] = useState({}); // Cache for questions data
    const [questionCache, setQuestionCache] = useState({}); // Cache for question data
    const [selectedLearningOutcomes, setLearningOutcomes] = useState({}); // Cache for question data

    const [selectedQuestionReview, setSelectedQuestionReview] = useState("");
    // const [questionTotal, setQuestionTotal] = useState (0);
    // const [userName, setUserName] = useState("");
    const userName = sessionStorage.getItem("userName");

    const [currentLOtext, setLOtext] = useState("");
    const [currentLeapLO, setLeapLO] = useState<any>("");
    const [currrentSelectedLU, setLUtext] = useState<any>({});
    const [clone, setClone] = useState(false);



    return (
        <div className="layout-container">
            {userLoggedIn && (
                <header className="header">
                    <div className="welcome-message">
                        <h2 className="mb-0">Content Knowledge Interface</h2>
                        <div className="clone-feature">
                            <button
                                className="header-button"
                                onClick={openCloneChange}
                            >
                                Update Clone
                            </button>
                            <button
                                className="header-button"
                                onClick={downloadCLoneData}
                            >
                                Export Clone
                            </button>
                        </div>
                    </div>

                    <div className="HUD">
                        <div className="left-column">
                            <h3>
                                <span className="text-muted">LU ID:</span> {currrentSelectedLU.ID}
                            </h3>
                            <h3>
                                <span className="text-muted">LO ID:</span> {currentLeapLO.ID}
                            </h3>
                            <h3>
                                <span className="text-muted">QID:</span> {selectedQuestion.id}
                            </h3>
                        </div>
                        <div className="right-column">
                            <h3>
                                <span className="text-muted">LU Name:</span> {currrentSelectedLU.Name}
                            </h3>
                            <h3>
                                <span className="text-muted">LO Name:</span> {currentLeapLO.Name}
                            </h3>
                            <h3>
                                <span className="text-muted">Review:</span> {selectedQuestionReview}
                            </h3>
                        </div>
                    </div>
                </header>
            )}

            <div className="layout">
                <div className="user-controls">
                    {userLoggedIn && (
                        <>
                            <ChapterSelection onChapterSelect={handleChapterSelect} />
                            {isCorrectChapterSelected && (
                                <div className="side-by-side">
                                    <QuestionList
                                        questionIds={questionIds}
                                        onQuestionSelect={handleQuestionSelect}
                                        taggedQuestions={questionsStatus}
                                        reviewQuestions={reviewQuestions}
                                    />

                                    {isLUsReady && isPLUsReady && (
                                        <>
                                            <LearningUnitSelection
                                                learningUnits={learningUnits}
                                                prerequisiteLUs={prereqLearningUnits}
                                                onLearningUnitSelect={handleLearningUnitSelect}
                                            />

                                            {isLOsReady && (
                                                <LearningOutcomes
                                                    onSave={handleTaggingSaveSelect}
                                                    onSelect={handleLearningOutcomeSelect}
                                                    outcomes={selectedLearningOutcomes}
                                                />
                                            )}

                                            {selectedQuestion && isCorrectQuestionSelected && (
                                                <div className="setClone">
                                                    <h3>Set Clone</h3>
                                                    <div className="d-flex gap-2">
                                                        <button
                                                            className={`clone-button ${selectedQuestion.isclone === "Yes" ? "active" : ""}`}
                                                            onClick={() => setselectedQuestion((prev: any) => ({ ...prev, isclone: "Yes" }))}
                                                        >
                                                            Clone
                                                        </button>
                                                        <button
                                                            className={`clone-button ${selectedQuestion.isclone === "No" ? "active" : ""}`}
                                                            onClick={() => setselectedQuestion((prev: any) => ({ ...prev, isclone: "No" }))}
                                                        >
                                                            Original
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div className="question-display">
                    {isCorrectQuestionSelected ? (
                        <QuestionDisplay
                            question={selectedQuestion}
                            lo={currentLOtext}
                        />
                    ) : (
                        <div className="text-center text-muted py-5">
                            <h4>Select a question to view details</h4>
                        </div>
                    )}
                </div>
            </div>

            {isLoading && <Loader />}
            <ToastContainer />
        </div>
    );

    function setQuestionClone(data: any) {
        const apiUrl = "https://cki-api.onrender.com/change_clone"

        // define request body
        const requestBody = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        }
        console.log(requestBody);

        // Making the request
        fetch(apiUrl, requestBody)
            .then(response => response.json()
                .then(data => {
                    // Handling response
                    if (!response.ok) {
                        throw new Error("Error: " + (data.message || "Unknown error"));
                    }
                    toast.success("Updated the question!");
                })
                .catch(error => {
                    console.error("Error occured:", error);
                    toast.error("Something went wrong");
                }));
    }

    async function openCloneChange() {
        //creating custom sweetalert modal
        const { value: cloneFormValues } = await Swal.fire({
            title: "Update Clone/Original",
            html: `
            Please enter Question ID:<br>
              <input id="swal-input1" class="swal2-input modal" type= "text"><br><br>

            Pick one:<br>
              <select name="IsClone" id="swal-input2" class="swal2-input modal">
                <option value="" default>--</option>
                <option value="true">Clone</option>
                <option value="false">Original</option>
              </select><br><br>

            `,
            focusConfirm: false,
            preConfirm: () => {
                return {
                    "qid": (document.getElementById("swal-input1") as HTMLInputElement).value,
                    "isclone": (document.getElementById("swal-input2") as HTMLSelectElement).value
                };
            },
            showCloseButton: true,
        });

        if (cloneFormValues) {
            const data = JSON.stringify(cloneFormValues);
            console.log("Data from swal popup: ", data);
            setQuestionClone(data);

        }
    }

    function downloadCLoneData() {
        toast.info("Please wait while file is being downloaded!", {
            position: "top-right",
            autoClose: 2500,
        });
        const endpoint = "https://cki-api.onrender.com/get_list_of_clone";
        fetch(endpoint)
            .then((response) => response.json())
            .then((cloneData) => {
                console.log("Response for download ==================> ", cloneData);

                // check if json is empty
                if (cloneData.length === 0) {
                    return '';
                }


                // convert the json into csv
                const headers = cloneData["column_names"].join(',') + '\n';
                const rows = cloneData["data"]
                    .map((row: any) => {
                        // map each row to CSV format
                        return cloneData["column_names"].map((field: any) =>
                            row[field] === null || row[field] === undefined ? '' : row[field]
                        ).join(',');
                    })
                    .join('\n');

                const totalCSV = headers + rows;

                if (totalCSV === '') {
                    alert('No data to export');
                } else {
                    // creating CSV file and initiating download
                    const blob = new Blob([totalCSV], { type: 'text/csv;charset=utf-8;' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.setAttribute('download', 'clone_data.csv');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            })
            .catch(error => {
                console.error("Error occured: ", error);
            })
    }

    function handleLearningOutcomeSelect(selectedLO: any) {
        setLeapLO(selectedLO);

    }


    function handleTaggingSaveSelect(comment: any) {
        const apiUrl = CKI_BASE_URL + "/tag_question";
        const requestBody = {
            review: comment,
            loid: currentLeapLO.ID,
            qid: selectedQuestion.id,
            user: userName,
            isClone: selectedQuestion.isclone
        };

        // Define the request options
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        };

        // Make the POST request
        fetch(apiUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                // Handle the response data as needed
                alert("Tagging of Q " + selectedQuestion.id + " saved successfully to LO " + currentLeapLO.ID);

                console.log("Tagging saved successfully:", data);
            })
            .catch(error => {
                console.error("Error saving tagging:", error);
            });
    }

    function handleLearningUnitSelect(selectedLU: any) {
        if (selectedLU !== null) {
            if (false) {
                // If data is already in the cache, use it
            } else {
                // Data is not in the cache, fetch it from the API
                setIsLoading(true);

                fetchLearningOutcomes(selectedLU.ID);
            }
            // const currentQuestionData = questionCache[questionId];
            // Handle the data as needed (e.g., set state)
            // setselectedQuestion(currentQuestionData);
            // setCorrectQuestion(true);

        }
        setLUtext(selectedLU);
        setLeapLO({});
        // setLeapLO(selectedLO);

        // Example: update state or perform an action based on the selected LU.
    };

    function handleQuestionSelect(questionId: any, LoName: any) {
        let currentQuestionData;
        if (questionId !== null) {
            setLOtext(LoName);
            if ((questionCache as any)[questionId]) {
                currentQuestionData = (questionCache as any)[questionId];
                console.log("Current Question: ", currentQuestionData);
                setselectedQuestion(currentQuestionData);
                setCorrectQuestion(true);
                // If data is already in the cache, use it
            } else {
                // Data is not in the cache, fetch it from the API
                // currentQuestionData = fetchQuestionData(questionId);
            }
            // window.scrollTo({ top: 0, behavior: 'smooth' });
            setLeapLO({});
            setLUtext({});
            // fetchQuestionStatus(questionId);
            setSelectedQuestionReview("");

            for (let index = 0; index < reviewQuestions?.length; index++) {
                const element: any = reviewQuestions[index];
                if (element.ID === questionId) {
                    setSelectedQuestionReview(element.Review);
                }
            }

            // const currentQuestionData = questionCache[questionId];
            // Handle the data as needed (e.g., set state)
            // setselectedQuestion(currentQuestionData);
            // setCorrectQuestion(true);

        }
    }


    function handleChapterSelect(chapterName: any) {
        const chapterId = chapterNameToId(chapterName);
        if (chapterId !== null) {
            setIsLoading(true);
            // getChapterwiseQuestionTotal();
            // if (questionsCache[chapterName]) {
            //     // If data is already in the cache, use it
            //     currentQuestionsData = questionsCache[chapterName];
            //     setQuestionsList(currentQuestionsData);
                setCorrectChapter(true);
            //     setIsLoading(false);


            // } else {
            // Data is not in the cache, fetch it from the API
            // if (chapterId !== 0) {
            fetchQuestionsData(chapterName);
            // }
            // }
            // const currentQuestionsData = questionsTempData.data;
            // Handle the data as needed (e.g., set state)
            // fetchQuestionsStatus(chapterName);

            // Implement cache for LU
            setLeapLO("");
            setLUtext({});
            setReviewQuestions([0]);

            fetchLearningUnits(chapterName);
            fetchPrereqLearningUnits(chapterName);
            // fetchReviewQuestions(chapterName);
            setIsLoading(false);
        }
    }



    function fetchQuestionsData(chapterName: any) {
        // const endpoint = LMS_BASE_URL + `?moodlewsrestformat=json&wstoken=`+TOKEN+`&wsfunction=local_webservice_asset_get_questions&chapterid=${chapterNameToId(chapterName)}`;
        // const lms_chapter_name = LeapChapterNameToLmsChapterName(chapterName);
        const chapterId: any = chapterNameToId(chapterName);
        console.log("Chapter name in LMS: ", chapterName, "\n", "All questions sample: ", questionsList[0]);
        // allQuestionsList // all question data
        // return fetch(endpoint)
        let grade;
        if (chapterId ===  40 || chapterId === 510 || chapterId === 420 || chapterId === 421 ||  (chapterId >= 600 && chapterId <= 699)) {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername.slice(0, -3)}&grade=6`);
            grade = "6";
            chapterName = chapterName.slice(0, -3);

        } else if (chapterId ===  392 || chapterId === 527 || chapterId === 255||chapterId === 532 ||  (chapterId >= 700 && chapterId <= 799)) {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername.slice(0, -3)}&grade=7`);
            grade = "7";
            chapterName = chapterName.slice(0, -3);

        } else if (chapterId === 19925 ||  (chapterId >= 800 && chapterId <= 899)) {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername.slice(0, -3)}&grade=8`);
            grade = "8";
            chapterName = chapterName.slice(0, -3);

        } else if (chapterId >= 900 && chapterId <= 999) {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername.slice(0, -3)}&grade=9`);
            grade = "9";
            chapterName = chapterName.slice(0, -3);

        } else if (chapterId >= 1000 && chapterId <= 1099) {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername.slice(0, -3)}&grade=10`);
            grade = "10";
            chapterName = chapterName.slice(0, -3);
        }    
         else {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername}`);
            grade = ""
            chapterName = chapterName
        }

        getChapQuestions(grade, chapterName)
            .then((response: any)  => {
                console.log("Questions ====================================>", response.data);
                setQuestionsList(response.data.question_data);
                let tempQids:any = {};
                let taggedQues: any[] = [];
                response.data.question_data.forEach((ques: any) => {
                    ques.lu_id in tempQids ? tempQids[ques.lu_id].push(ques.question_id) : tempQids[ques.lo_id] = [ques.question_id];
                    if (ques.status == "verified"){
                        taggedQues.push(ques.question_id);
                    }
                });
                setQuestionIds(tempQids);
                setQuestionStatus(taggedQues);
            })
            .catch((error) => {
                console.error("Error fetching questions:", error);
            });
        // console.log(lms_chapter_name);
        // const filteredQuestions = allQuestionsList.filter((question: any) => {
        //     const pathParts = question.path.split('/');
        //     console.log("Path Parts: ", pathParts);
        //     if (lms_chapter_name === '/') {
        //         return question.path === "";
        //     } else if (lms_chapter_name.grade && lms_chapter_name.chapter_name) {
        //         if (pathParts.length > 4 && pathParts[4] && pathParts.length > 2 && pathParts[2]) {
        //             console.log("In second case: ", pathParts[4]);
        //             return pathParts[4].toString().toLowerCase() === lms_chapter_name.chapter_name.toString().toLowerCase() &&
        //                 pathParts[2].includes(lms_chapter_name.grade);
        //         }
        //         return false;
        //     }

        //     if (pathParts.length > 4 && pathParts[4]) {
        //         console.log("In last case: ", pathParts[4])
        //         return pathParts[4].toString().toLowerCase() === lms_chapter_name.toString().toLowerCase();
        //     }

        //     return false;
        // });

        // console.log("Filtered questions: ", filteredQuestions);

        // setQuestionsList(filteredQuestions);
    };

    // function fetchQuestionData(questionId: any) {
    //     // Trigger an API call to the LMS to get question details by question ID.
    //     const endpoint = LMS_BASE_URL + `?moodlewsrestformat=json&wstoken=` + TOKEN + `&wsfunction=local_webservice_get_question&qid=${questionId}`;
    //     return fetch(endpoint)
    //         .then((response) => response.json())
    //         .then((questionsData) => {
    //             if (questionsData.data.length > 0) {
    //                 setQuestionCache({
    //                     ...questionCache,
    //                     [questionId]: questionsData.data[0],
    //                 });
    //                 setselectedQuestion(questionsData.data[0]);
    //                 setCorrectQuestion(true);
    //                 return questionsData.data[0];

    //             } else {
    //                 setCorrectQuestion(false);
    //                 return null;
    //             }
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching question:", error);
    //         });
    // }

    // function getChapterwiseQuestionTotal() {
    //     for (let index = 0; index < chapters.length; index++) {
    //         const chapterName = chapters[index].name;
    //         const currentQuestionsData = fetchQuestionsData(chapterName, true);

    //     }
    // }

    // function fetchQuestionStatus(qid: any) {
    //     const endpoint = CKI_BASE_URL + `/question?qid=${qid}`;
    //     fetch(endpoint)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             // setQuestionCache({
    //             //     ...questionCache,
    //             //     [questionId]: questionsData.data[0],
    //             // });
    //             setLeapLO(response.learning_outcome);
    //             setLUtext(response.learning_unit);
    //             fetchLearningOutcomes(response.learning_unit.ID)
    //             // setSelectedQuestionReview(response.question.Review);

    //             // setIsLUsReady(true);

    //             // return luData.learning_units;
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching learning units:", error);
    //         });
    // }

    // function fetchReviewQuestions(chapter: any) {
    //     const chapterId: any = chapterNameToId(chapter);
    //     let endpoint
    //     if (chapterId === 40 || chapterId === 510|| (chapterId >= 600 && chapterId <= 699)) {
    //         endpoint = encodeURI(CKI_BASE_URL + `/review_questions?chapter=${chapter.slice(0, -3)}&grade=6`);

    //     } else if (chapterId === 392 || chapterId === 527 || (chapterId >= 700 && chapterId <= 799)) {
    //         endpoint = encodeURI(CKI_BASE_URL + `/review_questions?chapter=${chapter.slice(0, -3)}&grade=7`);

    //     } else if (chapterId === 19925 || (chapterId >= 800 && chapterId <= 899)) {
    //         endpoint = encodeURI(CKI_BASE_URL + `/review_questions?chapter=${chapter.slice(0, -3)}&grade=8`);

    //     } else if (chapterId >= 900 && chapterId <= 999) {
    //         endpoint = encodeURI(CKI_BASE_URL + `/review_questions?chapter=${chapter.slice(0, -3)}&grade=9`);
    //     } 
    //     else if (chapterId >= 1000 && chapterId <= 1099) {
    //         endpoint = encodeURI(CKI_BASE_URL + `/review_questions?chapter=${chapter.slice(0, -3)}&grade=10`);
    //     } else {
    //         endpoint = encodeURI(CKI_BASE_URL + `/review_questions?chapter=${chapter}`);
    //     }
    //     fetch(endpoint)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             // setQuestionCache({
    //             //     ...questionCache,
    //             //     [questionId]: questionsData.data[0],
    //             // });
    //             setReviewQuestions(response.question_ids_with_review);
    //             console.log(response.question_ids_with_review);

    //             // setIsLUsReady(true);

    //             // return luData.learning_units;
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching question review status:", error);
    //         });
    // }

    // function fetchQuestionsStatus(chapter: any) {
    //     const chapterId: any = chapterNameToId(chapter);

    //     let endpoint
    //     if (chapterId === 40 || chapterId === 510|| (chapterId >= 600 && chapterId <= 699)) {
    //         endpoint = encodeURI(CKI_BASE_URL + `/questions_status?chapter=${chapter.slice(0, -3)}`);

    //     } else if (chapterId === 392 || chapterId === 527||(chapterId >= 700 && chapterId <= 799)) {
    //         endpoint = encodeURI(CKI_BASE_URL + `/questions_status?chapter=${chapter.slice(0, -3)}`);
    //     } else if (chapterId >= 800 && chapterId <= 899) {
    //         endpoint = encodeURI(CKI_BASE_URL + `/questions_status?chapter=${chapter.slice(0, -3)}`);
    //     } else if (chapterId >= 900 && chapterId <= 999) {
    //         endpoint = encodeURI(CKI_BASE_URL + `/questions_status?chapter=${chapter.slice(0, -3)}`);
    //     }
    //     else if (chapterId >= 1000 && chapterId <= 1099) {
    //         endpoint = encodeURI(CKI_BASE_URL + `/questions_status?chapter=${chapter.slice(0, -3)}`);
    //     }
    //     else {
    //         endpoint = encodeURI(CKI_BASE_URL + `/questions_status?chapter=${chapter}`);

    //     }
    //     // const endpoint = CKI_BASE_URL + `/questions_status?chapter=${chapter}`;
    //     fetch(endpoint)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             // setQuestionCache({
    //             //     ...questionCache,
    //             //     [questionId]: questionsData.data[0],
    //             // });
    //             if (response.questionIdList) {
    //                 setQuestionStatus(response.questionIdList)
    //                 console.log(response.questionIdList);
    //             }
    //             setCorrectChapter(true);


    //             // setIsLUsReady(true);

    //             // return luData.learning_units;
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching question data units:", error);
    //         });
    // }

    function fetchLearningUnits(chaptername: any) {
        const chapterId: any = chapterNameToId(chaptername);
        let grade;
        if (chapterId ===  40 || chapterId === 510 || chapterId === 420 || chapterId === 421 ||  (chapterId >= 600 && chapterId <= 699)) {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername.slice(0, -3)}&grade=6`);
            grade = "6";
            chaptername = chaptername.slice(0, -3);

        } else if (chapterId ===  392 || chapterId === 527 || chapterId === 255||chapterId === 532 ||  (chapterId >= 700 && chapterId <= 799)) {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername.slice(0, -3)}&grade=7`);
            grade = "7";
            chaptername = chaptername.slice(0, -3);

        } else if (chapterId === 19925 ||  (chapterId >= 800 && chapterId <= 899)) {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername.slice(0, -3)}&grade=8`);
            grade = "8";
            chaptername = chaptername.slice(0, -3);

        } else if (chapterId >= 900 && chapterId <= 999) {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername.slice(0, -3)}&grade=9`);
            grade = "9";
            chaptername = chaptername.slice(0, -3);

        } else if (chapterId >= 1000 && chapterId <= 1099) {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername.slice(0, -3)}&grade=10`);
            grade = "10";
            chaptername = chaptername.slice(0, -3);
        }else {
            // endpoint = encodeURI(CKI_BASE_URL + `/learning_units?chapter=${chaptername}`);
            grade = ""
            chaptername = chaptername
        }

        getChapLearningUnits(grade, chaptername)
            .then((response: any) => {
                // setQuestionCache({
                //     ...questionCache,
                //     [questionId]: questionsData.data[0],
                // });
                console.log("LU data after api call: ", response);
                const allLos = response.data.learning_units.flatMap((item: any) => item.los).sort();

                // const sortedLearningUnits = response.data.learning_units.sort((a: any, b: any) => {
                //     return a.ID.localeCompare(b.ID);
                // });

                console.log("Sorted LUs: ", allLos);
                setLearningUnitsList(allLos);
                setIsLUsReady(true);

                // return luData.learning_units;
            })
            .catch((error) => {
                console.error("Error fetching learning units:", error);
            });
    }

    function fetchPrereqLearningUnits(chaptername: any) {
        const chapterId: any = chapterNameToId(chaptername);
        let endpoint
        if (chapterId === 40 || chapterId === 510 || chapterId === 420 || chapterId === 421||(chapterId >= 600 && chapterId <= 699)) {
            endpoint = encodeURI(CKI_BASE_URL + `/learning_units_prerequisites?chapter=${chaptername.slice(0, -3)}&grade=6`);

        } else if (chapterId === 392 || chapterId === 527 || chapterId === 255 || chapterId === 532 ||(chapterId >= 700 && chapterId <= 799))  {
            endpoint = encodeURI(CKI_BASE_URL + `/learning_units_prerequisites?chapter=${chaptername.slice(0, -3)}&grade=7`);

        }
        else if (chapterId === 19925|| (chapterId >= 800 && chapterId <= 899)) {
            endpoint = encodeURI(CKI_BASE_URL + `/learning_units_prerequisites?chapter=${chaptername.slice(0, -3)}&grade=8`);

        } else if (chapterId >= 900 && chapterId <= 999) {
            endpoint = encodeURI(CKI_BASE_URL + `/learning_units_prerequisites?chapter=${chaptername.slice(0, -3)}&grade=9`);

        } else if (chapterId >= 1000 && chapterId <= 1099) {
            endpoint = encodeURI(CKI_BASE_URL + `/learning_units_prerequisites?chapter=${chaptername.slice(0, -3)}&grade=10`);

        }
        else {
            endpoint = encodeURI(CKI_BASE_URL + `/learning_units_prerequisites?chapter=${chaptername}`);

        }
        return fetch(endpoint)
            .then((response) => response.json())
            .then((pluData) => {
                // setQuestionCache({
                //     ...questionCache,
                //     [questionId]: questionsData.data[0],
                // });
                const sortedLearningUnits = pluData.learning_units.sort((a: any, b: any) => {
                    return a.ID.localeCompare(b.ID);
                });
                setPrereqLearningUnitsList(sortedLearningUnits);
                setIsPLUsReady(true);
                return pluData.learning_units;
            })
            .catch((error) => {
                console.error("Error fetching learning units:", error);
            });
    }

    function fetchLearningOutcomes(luid: any) {
        const endpoint = CKI_BASE_URL + `/learning_outcomes?luid=${luid}`;
        fetch(endpoint)
            .then((response) => response.json())
            .then((loData) => {
                // setQuestionCache({
                //     ...questionCache,
                //     [questionId]: questionsData.data[0],
                // });
                const sortedLearningOutcomes = loData.learning_outcomes.sort((a:any, b: any) => {
                    return a.ID.localeCompare(b.ID);
                });
                setLearningOutcomes(sortedLearningOutcomes);
                setIsLoading(false);

                setIsLOsReady(true);

                // return luData.learning_units;
            })
            .catch((error) => {
                console.error("Error fetching learning units:", error);
            });
    }
    function chapterNameToId(name: any) {
        const chapter = chapters.find((chap: any) => chap.name === name);
        return chapter ? chapter.id : null;
    }
    function LeapChapterNameToLmsChapterName(name: any) {
        const chapter: any = chapters.find((chap: any) => chap.name === name);

        return chapter && chapter.lms_chapter ? chapter.grade ? { "grade": chapter.grade, "chapter_name": chapter.lms_chapter } : chapter.lms_chapter : chapter.name;
    }
};

export default Layout;