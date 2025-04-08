import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTopicQuestions, setCloneAPI, generateQuestions } from '../httpservice';
import { topics, publications } from "../Data/topicsData";
import { SyncLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import PageLayout from "./PageLayout";

// export let [clickedOnView, setClickedOnView] = useState(false);

interface Props {
    showIt: boolean;
    board: string;
    publication: string;
    grade: string;
    subject: string;
    chapter: string;
    lu: string;
    lu_name: string;
    bloom: string;
    lus: { id: string; name: string; }[];
    question: {
        _id: string;
        qid: string;
        status: string;
        // question: any[];
        // final_answer: [];
        // solution: [];
        // option1: [];
        // dr1: string;
        // option2: [];
        // dr2: string;
        // option3: [];
        // dr3: string;
        question: { content: string }[];
        final_answer: { content: string }[];
        solution: { content: string }[];
        option1: { content: string }[];
        dr1: { content: string }[];
        option2: { content: string }[];
        dr2: { content: string }[];
        option3: { content: string }[];
        dr3: { content: string }[];
    }[];
    viewQue: { question: string; }[];

    onUpdateState: (newState: {
        board: string, publication: string, grade: string, subject: string, chapter: string, lu: string, lu_name: string, bloom: string, question: {
            _id: string;
            qid: string;
            status: string;
            // question: any[];
            // final_answer: [];
            // solution: [];
            // option1: [];
            // dr1: string;
            // option2: [];
            // dr2: string;
            // option3: [];
            // dr3: string;
            question: { content: string }[];
            final_answer: { content: string }[];
            solution: { content: string }[];
            option1: { content: string }[];
            dr1: { content: string }[];
            option2: { content: string }[];
            dr2: { content: string }[];
            option3: { content: string }[];
            dr3: { content: string }[];

        }[],
        viewQue: { question: string; }[],
        lus: { id: string; name: string; }[]
    }) => void;

    onUpdateQuestions: (question: {
        // _id: string;
        question: { content: string }[];
        final_answer: { content: string }[];
        solution: { content: string }[];
        option1: { content: string }[];
        dr1: { content: string }[];
        option2: { content: string }[];
        dr2: { content: string }[];
        option3: { content: string }[];
        dr3: { content: string }[];
    }[]) => void;
    onUpdateClickedOnView: (value: boolean, questions: {}, question: {}, index: number) => void;
}

const parseGeneratedQuestions = (text: string) => {
    const questions: {
      _id: string;
      qid: string;
      status: string;
      question: { content: string }[];
      final_answer: { content: string }[];
      solution: { content: string }[];
      option1: { content: string }[];
      dr1: { content: string }[];
      option2: { content: string }[];
      dr2: { content: string }[];
      option3: { content: string }[];
      dr3: { content: string }[];
    }[] = [];
  
    try {
      // Parse the text into JSON and extract questions array
      console.log("Text to parse:", text);
      const jsonData = JSON.parse(text);
      const questionsData = jsonData.questions;
      console.log("Parsed questions data:", questionsData);
      questionsData.forEach((item: any, index: number) => {
        const { question, options, correct_answer, solution } = item;
        
        // Get the correct answer text
        const correctAnswerText = options[correct_answer];
        
        // Get wrong options by filtering out correct answer
        const wrongOptions = Object.entries(options)
          .filter(([key]) => key !== correct_answer)
          .map(([_, value]) => value);

        questions.push({
          _id: 'Mongo_ObjectID',
          qid: `gen_${index + 1}`,
          status: 'not_reviewed',
          question: [{ content: question as string }],
          final_answer: [{ content: correctAnswerText as string }],
          solution: [{ content: solution as string }],
          option1: [{ content: wrongOptions[0] as string }],
          dr1: [{ content: 'incorrect' }],
          option2: [{ content: wrongOptions[1] as string }],
          dr2: [{ content: 'incorrect' }],
          option3: [{ content: wrongOptions[2] as string }], 
          dr3: [{ content: 'incorrect' }]
        });
      });
    } catch (err) {
      console.error('Invalid JSON input:', err);
    }
  
    return questions;
};
  

// Add new interface for generated questions
interface GeneratedQuestion {
    _id: string;  // Make _id optional since generated questions won't have it initially
    qid: string;
    status: string;
    question: {content: string}[];
    final_answer: {content: string}[];
    solution: {content: string}[];
    option1: {content: string}[];
    dr1: { content: string }[];
    option2: {content: string}[];
    dr2: { content: string }[];
    option3: {content: string}[];
    dr3: { content: string }[];
}

const GetQuesPage: React.FC<Props> = ({ showIt, board, publication, grade, subject, chapter, lu, lu_name, bloom, question, viewQue, onUpdateState, onUpdateClickedOnView, lus }) => {
    const override: React.CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "black",
    };

    let setErrorDisplay = 'none';
    let [loading, setLoading] = useState(false);
    // let [color, setColor] = useState("#ffffff");

    // const [displayDrops, setDisplayDrops] = useState('');
    const boards = ["CBSE", "ICSE"];

    const [grades, setGrades] = useState<string[]>([]);
    const [subjects, setSubjects] = useState<string[]>([]);
    const [chapters, setChapters] = useState<string[]>([]);
    const [topiclist, setLus] = useState<{ id: string; name: string; }[]>(lus ? lus : []);
    const [selectedLU, setSelectedLU] = useState("");
    const blooms = ["Remember", "Understand", "Apply", "Analyse"];
    const [viewQues, setviewQues] = useState<{ question: string; qid: string; status: string }[]>([]);
    const [questions, setQues] = useState<{
        _id: string;
        qid: string;
        status: string;
        // question: any[];
        // final_answer: [];
        // solution: [];
        // option1: [];
        // dr1: string;
        // option2: [];
        // dr2: string;
        // option3: [];
        question: { content: string }[];
        final_answer: { content: string }[];
        solution: { content: string }[];
        option1: { content: string }[];
        dr1: { content: string }[];
        option2: { content: string }[];
        dr2: { content: string }[];
        option3: { content: string }[];
        dr3: { content: string }[];
    }[]>([]);
    let originalid: { [key: string]: string } = {};

    // Inside GetQuesPage component, add new state for generated questions
    const [generatedQuestions, setGeneratedQuestions] = useState<GeneratedQuestion[]>([]);

    const [isDisabled, setIsDisabled] = useState(true);
    const [isGenerateDisabled, setIsGenerateDisabled] = useState(true);
    const [clickedOnView, setClickedOnView] = useState(false);
    const [selectedOption, setSelectedOption] = useState("not_reviewed")
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedText, setGeneratedText] = useState('');
    const abortController = new AbortController();

    useEffect(() => {
        // const items = sessionStorage.getItem('view');
        // if (items) {
        //     setClickedOnView(JSON.parse(items));
        // };
        if (grade && subject && chapter) {
            let tempObj = Object.keys(topics[board][`Class ${grade}`][`${subject}`][`${chapter}`])
            let topicIndex = 1
            const formattedTopics = tempObj.map((topic: any) => {
                const id = `${grade}_${subject}_${chapter}_${topicIndex}`;
                topicIndex++;
                return {
                    id: id,
                    name: topic,
                };
            });
            setLus(formattedTopics);
        }
        console.log("Topics after rendering again:", topiclist)
        onUpdateState({ board, publication, grade, subject, chapter, lu, lu_name, bloom, question, viewQue, lus: topiclist });
        console.log("LU ============= ", lu);
        console.log("Started Again.......................");

    }, []);

    useEffect(() => {
        const savedQuestions = sessionStorage.getItem('savedQuestions') || "";
        console.log("Saved Questions =========================> ", savedQuestions);
        if (savedQuestions) {
            let tempViewQUes: any = []
            const parsedQuestions = JSON.parse(savedQuestions);
            console.log("Parsed Questions =========================> ", parsedQuestions);
            setQues(parsedQuestions);
            // Also process for viewQues
            parsedQuestions.forEach((que_det: any) => {
                console.log("Each object: ", que_det.qid, que_det.question, typeof (que_det.question));
                let queText_str = "";
                if (Array.isArray(que_det.question)) {
                    que_det.question.forEach((que_text: any) => {
                        queText_str += que_text.content || "";
                    });
                }
                tempViewQUes.push({
                    'question': queText_str.replace("\\begin{aligned}", "").replace("\\end{aligned}", ""),
                    'qid': que_det.qid,
                    'status': que_det.status
                });
            });
            setviewQues(tempViewQUes);
        }
        

    }, []);

    useEffect(() => {
        if (board !== "") {
            console.log('selected board ==========> ', board);
            let tempObj = topics[board] ? topics[board] : {};
            console.log("Grades from topidData: ", tempObj);
            const tempgrades = Object.keys(tempObj).map((gradeString) => gradeString.replace("Class ", ""));
            setGrades(tempgrades);
        }
    }, [board]);

    useEffect(() => {
        // getSubjects(grade)
        //     .then((data: any) => {
        //         // console.log("Subjects: ", data);
        //         setSubjects(removeDups(data.subjects));

        //         onUpdateState({ grade, subject, chapter, lu, lu_name, question: questions, viewQue: viewQues });
        //     })
        //     .catch((error: any) => console.error('Error fetching subjects:', error));
        if (grade !== "") {
            console.log('subjectsubject', subject);
            let tempObj = topics[board][`Class ${grade}`] ? topics[board][`Class ${grade}`] : {};
            console.log("Subjects from topidData: ", tempObj);
            const subs = Object.keys(tempObj);
            setSubjects(subs);
        }
        // setLus([]);
        // setChapters([]);
        onUpdateState({ board, publication, grade, subject, chapter, lu, lu_name, bloom, question: questions, viewQue: viewQues, lus: topiclist });
    }, [grade]);

    useEffect(() => {
        console.log("grade: ", grade);
        console.log("subject: ", subject);
        if (grade !== "" && subject !== "") {
            console.log('subjectsubject', subject);
            let tempObj = topics[board][`Class ${grade}`][`${subject}`] ? topics[board][`Class ${grade}`][`${subject}`] : {};
            console.log("Chaps from topidData: ", tempObj, topics[board][`Class ${grade}`]);
            const chaps = Object.keys(tempObj);
            console.log("Setting chapters: ", chaps);
            setChapters(chaps);
            onUpdateState({ board, publication, grade, subject, chapter, lu, lu_name, bloom, question: questions, viewQue: viewQues, lus: topiclist });

        }

    }, [subject]);

    useEffect(() => {
        if (grade && subject && chapter) {
            console.log("is my chapter", chapter)
            let tempObj = Object.keys(topics[board][`Class ${grade}`][`${subject}`][`${chapter}`]);
            console.log("Topics at start: ", tempObj);
            let topicIndex = 1
            const formattedTopics = tempObj.map((topic: any) => {
                const id = `${grade}_${subject}_${chapter}_${topicIndex}`;
                topicIndex++;
                return {
                    id: id,
                    name: topic,
                };
            });
            setLus(formattedTopics);
            
            console.log("Topics :", formattedTopics)
            // if (questions.length === 0 && lu_name, bloom !== "") { handleSubmit(); }
            // setQues([]);
            // setviewQues([]);
            onUpdateState({ board, publication, grade, subject, chapter, lu, lu_name, bloom, question: questions, viewQue: viewQues, lus: formattedTopics });
            // console.log("LUs: ", data.learning_units);

        }
    }, [chapter]);


    let luChanged: boolean = false;
    useEffect(() => { console.log(lu); }, [lu]);
    useEffect(() => { console.log("Updated ViewQues: ", viewQues) }, [viewQues]);

    const fetchGrades = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBoard = event.target.value;
        onUpdateState({ board: selectedBoard, publication: "", grade: "", subject: "", chapter: "", lu: "", lu_name, bloom: "", question, viewQue, lus: topiclist })
    };

    const setPublication = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedPublication = event.target.value;
        onUpdateState({ board, publication: selectedPublication, grade, subject, chapter, lu, lu_name, bloom, question, viewQue, lus: topiclist })
    };

    const fetchSubjects = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGrade = event.target.value;
        onUpdateState({ board, publication, grade: selectedGrade, subject: "", chapter: "", lu: "", lu_name, bloom: "", question, viewQue, lus: topiclist });
    };

    const fetchChapters = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSubject = event.target.value;
        onUpdateState({ board, publication, grade, subject: selectedSubject, chapter:"", lu:"", lu_name, bloom: "", question, viewQue, lus: topiclist });
    };

    const setLUID = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const tempLU = event.target.value;
        setSelectedLU(tempLU);
        console.log("LU select: ", tempLU);
        let tempLU_name: string = "";
        topiclist.map((lu, _) => {
            if (lu.id === tempLU) {
                tempLU_name = lu.name;
            }
        });
        // setQues([]);
        // setviewQues([]);
        // console.log("final print .................");
        luChanged = true;
        onUpdateState({ board, publication, grade, subject, chapter, lu: tempLU, lu_name: tempLU_name, bloom: "", question: questions, viewQue: viewQues, lus: topiclist });
        // getLearningOutcomes(tempLU);
        // setBlooms(["Remember", "Understand", "Apply", "Analyse"]);
        // onUpdateState({ grade, subject, chapter, lu: selectedLU , question, viewQue});
        // setIsDisabled(false);
    };

    const setBloomLevel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBloom = event.target.value;
        onUpdateState({ board, publication, grade, subject, chapter, lu, lu_name, bloom: selectedBloom, question: questions, viewQue, lus: topiclist });
        setIsDisabled(false);
    }

    const fetchLUs = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedChapter = event.target.value;
        onUpdateState({ board, publication, grade, subject, chapter: selectedChapter, lu, lu_name, bloom, question, viewQue, lus: topiclist });
    };

    // const setBloomLevel = (event: any) => {
    //     const selectedBloom = event.target.value;
    //     // console.log("Selected Blooms Level: ", selectedBloom);
    //     onUpdateState({ grade, subject, chapter, lu, lu_name, selectedBloom, question: questions, viewQue: viewQues });
    //     setIsDisabled(false);
    // };

    const handleSubmit = () => {
        setviewQues([]);
        setQues([]);
        setIsDisabled(true);
        setLoading(true);

        setTimeout(() => { }, 2000);
        getTopicQuestions(lu, publication)
            .then((data: any) => {
                setLoading(false);
                setIsDisabled(false);
                if (data.data.length === 0) {
                    // handleShow();
                    // setIsGenerateDisabled(false);

                    if (lu !== "") {
                        const MySwal = withReactContent(Swal)
                        MySwal.fire(<p>No Question Found in the DataBase. Please Click on "Generate" button to generate it!</p>)
                        setIsGenerateDisabled(true);
                    }
                    // else{
                    //     // const MySwal = withReactContent(Swal)
                    //     // MySwal.fire(<p>No Question Found in the DataBase. Please Click on "Generate" button to generate it!</p>)
                    //     setIsGenerateDisabled(false);
                    // }                   
                    setQues([]);
                    setviewQues([]);
                    console.log("============================================Emptying the viewQues because no data arrived.==========================================")
                    onUpdateState({ board, publication, grade, subject, chapter, lu, lu_name, bloom, question: questions, viewQue: viewQues, lus: topiclist });
                } else {
                    setQues(data.data);
                    sessionStorage.setItem('savedQuestions', JSON.stringify(data.data));
                    onUpdateState({ board, publication, grade, subject, chapter, lu, lu_name, bloom, question: data.data, viewQue, lus: topiclist });
                    console.log(data.data);
                    let tempViewQUes = [];
                    for (let que_det of data.data) {
                        console.log("Each object: ", que_det.qid, que_det.question, typeof (que_det.question));
                        let queText_str = "";
                        for (let que_text of que_det.question ? que_det.question : [{ "content": "" }]) {
                            queText_str += que_text.content;
                        }
                        tempViewQUes.push({ 'question': queText_str.replace("\\begin{aligned}", "").replace("\\end{aligned}", ""), 'qid': que_det.qid, 'status': que_det.status });
                    }

                    if (data.data.length < 1) {
                        const MySwal = withReactContent(Swal)
                        MySwal.fire(<p>No Question Found in the DataBase. Please Click on "Generate" button to generate it!</p>)
                        setIsGenerateDisabled(false);
                    }
                    // temp1.push({ 'question': data.data[0].Question })
                    console.log("==================== SetViewQues from HandleSubmit: ==============================================", tempViewQUes);
                    setviewQues(tempViewQUes);
                    onUpdateState({ board, publication, grade, subject, chapter, lu, lu_name, bloom, question, viewQue: viewQues, lus: topiclist });
                    console.log("Questions after you hit close in viewpage:", viewQues);
                }
            })
            .catch((error: any) => { setLoading(false); console.error('Error fetching Questions:', error.response.status, error); if (error.response.status === 403) { toast.error("Invalid User! Please login again."); return; }; if (error.response.status === "500") { toast.error("Internal Error! Please contact Tech Team."); return; } toast.error("Unexpected error occured! Please try again.") });
    };

    const handleGenerate = async () => {
        if (!board || !grade || !subject || !chapter || !lu_name || !bloom) {
          toast.error('Please select all filters first');
          return;
        }
        setQues([]);
        setviewQues([]);
        sessionStorage.setItem('savedQuestions', JSON.stringify([]));
        // setIsDisabled(true);
        setIsGenerating(true);
        setGeneratedText('');
      
        try {
          const stream = await generateQuestions(
            board,
            grade, 
            subject,
            chapter,
            lu_name,
            bloom,
            abortController.signal
          );
      
          let fullText = '';
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            fullText += content;
            setGeneratedText(fullText);
          }
      
          // Parse generated text and update generated questions state
          const parsedQuestions = parseGeneratedQuestions(fullText);
        //   setGeneratedQuestions(parsedQuestions);
          setQues(parsedQuestions);
          sessionStorage.setItem('savedQuestions', JSON.stringify(parsedQuestions));
      
          // Update viewQues with generated questions
          setviewQues(parsedQuestions.map(q => ({
            question: q.question.map(item => item.content).join(''),
            qid: q.qid || '',
            status: 'not_reviewed',
            isCloneOf: ''
          })));
      
                  } catch (error) {
          console.error('Error generating questions:', error);
          toast.error('Failed to generate questions');
        } finally {
          setIsGenerating(false);
        }
      };
      
      const cancelGeneration = () => {
        abortController.abort();
        setIsGenerating(false);
      };

    // const generateQuestions = () => {
    //     //pass
    //     setLoading(true);
    //     let selected_lu = {};
    //     for (let l of lus) {
    //         if (l.id === lu) {
    //             selected_lu = l
    //             break
    //         }
    //         else {
    //             // console.log("==========Something wrong======");
    //         }
    //     }

    //     // console.log("LU data..............", selected_lu);
    //     generateQues(selected_lu, grade, subject, chapter,).then(
    //         (data: any) => {
    //             setLoading(false);
    //             // console.log("Generated Ques ==============> ", data.data);

    //             // setQues(data.data);
    //             onUpdateState({ grade, subject, chapter, lu, lu_name, bloom, question: data.data, viewQue });
    //             let tempViewQUes = [];
    //             let tempQues = [];
    //             for (let que_det of data.data) {
    //                 if (que_det.Blooms_Level === bloom) {
    //                     tempViewQUes.push({ 'question': que_det.Question });
    //                     tempQues.push(que_det);
    //                 }
    //             }
    //             // temp1.push({ 'question': data.data[0].Question })
    //             setviewQues(tempViewQUes);
    //             setQues(tempQues);
    //             onUpdateState({ grade, subject, chapter, lu, lu_name, bloom, question, viewQue: viewQues });
    //             // console.log("Questions:", viewQues);
    //         }
    //     ).catch((error: any) => {
    //         setLoading(false);
    //     })

    //     // setTimeout(() => {setLoading(false); handleSubmit();}, 3000);

    // };

    const viewQuestion = (index: number) => {
        console.log("in Get Ques, ................", index);
        
        // Determine which question array to use
        const selectedQuestions = questions.length > 0 ? questions : generatedQuestions;
        const selectedQuestion = selectedQuestions[index];
        
        // Format the question to match the expected structure
        const formattedQuestion = {
            question: {
                question: selectedQuestion.question,
                final_answer: selectedQuestion.final_answer,
                solution: selectedQuestion.solution,
                option1: selectedQuestion.option1,
                dr1: selectedQuestion.dr1,
                option2: selectedQuestion.option2,
                dr2: selectedQuestion.dr2,
                option3: selectedQuestion.option3,
                dr3: selectedQuestion.dr3
            }
        };

        console.log("IN get ques................: Question ===>>", formattedQuestion);
        setClickedOnView(true);
        onUpdateClickedOnView(true, selectedQuestions, formattedQuestion, index);
    };

    // const handleOptionChange = (e: any) => {
    //     e.preventDefault();
    //     setSelectedOption(e.target.value);
    // }

    const handleIDChange = (e: React.ChangeEvent<HTMLInputElement>,qid: any) => {
        e.preventDefault();
        originalid[qid] = e.target.value;
      };    

    const setClone = (index: any) => {
        console.log("================================= Someone hit set clone button ==================================")
        console.log("ID we got: ", index, originalid[index]);
        if (originalid[index]) {
            toast.info(`Setting Que.${index} as clone of Que.${originalid[index]}`, { autoClose: false });
            setCloneAPI(index.toString(), originalid[index])
                .then(() => {
                    toast.dismiss();
                    toast.success("Clone set!");
                })
                .catch((error: any) => {
                    toast.dismiss();
                    toast.error("Issue in setting clone. Please try again later!")
                }
                );
        } else {
            toast.error("Please enter valid qid!");
        }
    }

    return (
        <PageLayout title="Question Generation and Review">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card p-4">
                        {/* Filter controls */}
                        <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
                            <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '150px' }} value={board} onChange={fetchGrades} disabled={showIt}>
                                <option value="" disabled >Pick a Board</option>
                                {boards.map((board, index) => (
                                    <option key={index}>{board}</option>
                                ))}
                            </select>

                            {/* <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '190px' }} value={publication} onChange={setPublication} disabled={showIt}>
                                <option value="" disabled >Pick a publication</option>
                                {publications[board]?.map((publication: any, index: number) => (
                                    <option key={index}>{publication}</option>
                                ))}
                            </select> */}

                            <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '150px' }} value={grade} onChange={fetchSubjects} disabled={showIt}>
                                <option value="" disabled >Pick a grade</option>
                                {grades.map((grade, index) => (
                                    <option key={index}>{grade}</option>
                                ))}
                            </select>

                            <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '280px' }} value={subject} onChange={fetchChapters} disabled={showIt}>
                                <option value="" disabled >Pick one of the given subjects</option>
                                {subjects.map((subject, index) => (
                                    <option key={index}>{subject}</option>
                                ))}
                            </select>

                            <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '275px' }} value={chapter} onChange={fetchLUs} disabled={showIt}>
                                <option value="" disabled >Pick from the given chapters</option>
                                {chapters.map((chapter, index) => (
                                    <option key={index}>{chapter}</option>
                                ))}
                            </select>

                            <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '255px' }} value={lu} onChange={setLUID} disabled={showIt}>
                                <option value="" disabled>Pick from the given Topics</option>
                                {topiclist.map((lu, index) => (
                                    <option key={index} value={lu.id}>
                                        {lu.name}
                                    </option>
                                ))}
                            </select>
                            <select className="btn dropdown-toggle border border-primary mx-3" style={{ maxWidth: '150px' }} value={bloom} onChange={setBloomLevel} disabled={showIt}>
                                <option value="" disabled >Pick a Bloom</option>
                                {blooms.map((bloom, index) => (
                                    <option key={index}>{bloom}</option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Action buttons */}
                        <div className="d-flex justify-content-center gap-3">
                            {/* <button type="button" className="btn btn-primary" disabled={isDisabled || showIt} onClick={handleSubmit}>
                                Submit
                            </button> */}
                            <button
                                type="button"
                                className="btn btn-success"
                                disabled={isDisabled || showIt || isGenerating}
                                onClick={handleGenerate}
                            >
                                Generate
                            </button>
                            {isGenerating && (
                                <button
                                type="button"
                                className="btn btn-danger"
                                onClick={cancelGeneration}
                                >
                                Cancel
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isGenerating && (
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Generating Questions...</h5>
                        <pre className="generation-output">
                            {generatedText}
                        </pre>
                        </div>
                    </div>
                    </div>
                </div>
            )}

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
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-md-10 mb-2" style={{ backgroundColor: '#f9f9f9' }}>
                    Questions for Topic: &nbsp; <strong> {lu_name} </strong>
                    <hr />
                    {viewQues.map((question, index) => (
                        <div className="row" key={index}>
                            {/* Questions for LU: <strong> {lu} </strong> */}
                            <div className="col-md-11 my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={
                                    question.status === 'not_reviewed' ? 'yellow' :
                                        question.status === 'verified' ? 'green' :
                                            question.status === 'rejected' ? 'red' : 'gray'
                                } className="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                                &nbsp; Que {question.qid}: &nbsp; {question.question} &nbsp; &nbsp;
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-primary btn-sm" value={index} onClick={() => viewQuestion(index)} style={{ margin: "0px 45px 0px 5px" }}>
                                    VIEW
                                </button>
                                {/* <input type="text" name="cloneQid" id="cloneQid" style={{ margin: "0px 5px", width: "75px" }} onChange={(e) => handleIDChange(e, question.qid)} placeholder={question.isCloneOf} />
                                <button className="btn btn-primary btn-sm" value={index} onClick={() => setClone(question.qid)} style={{ margin: "0px 5px" }}>
                                    Set Clone
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="row mt-5 mb-5 d-flex justify-content-center">
                <div className=" sweet-loading d-flex justify-content-center">
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
            </div>

        </PageLayout>
    );
};

export default GetQuesPage;
