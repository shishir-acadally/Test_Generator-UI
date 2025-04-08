import React, { FunctionComponent, useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { publications, topics } from "../Data/topicsData";
import { toast } from 'react-toastify';
import { extractQuestions } from "../httpservice";

const QuestionGeneration: React.FC = () => {
    const boards = Object.keys(publications);
    let test = topics["CBSE"]["Class 10"]["Mathematics"]["Quadratic Equations"] as Record<string, any>;
    console.log(Object.keys(test).reduce((acc: any, topic) => {
        acc[topic] = test[topic].map((item: any) => item.LU_text);
        return acc;
    }, {}))

    const [board, setBoard] = useState<string>(boards[0]);
    const [pubData, setPubData] = useState<string[]>([]);
    const [pub, setPub] = useState<string>('');
    const [grades, setGrades] = useState<string[]>(Object.keys(topics[board] || {}));
    const [grade, setGrade] = useState<string>('');
    const [subjects, setSubjects] = useState<string[]>(Object.keys(topics[board]?.[grade] || {}));
    const [sub, setSub] = useState<string>('');
    const [chaps, setChaps] = useState<string[]>(Object.keys(topics[board]?.[grade]?.[sub] || {}));
    const [chap, setChap] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // Handle board value change
    const setboardvalue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const newBoard = e.target.value;
        setBoard(newBoard);
        // Update the other fields when board changes
        setPubData(publications[newBoard] || []);
        setPub("");
        setGrades(Object.keys(topics[newBoard] || {}));
        setGrade("");
    };

    const setpubvalue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setPub(e.target.value);
    };



    const setgradevalue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const newGrade = e.target.value;
        setGrade(newGrade);
        setSubjects(Object.keys(topics[board]?.[newGrade] || {}));
        setSub("");
        setChaps(Object.keys(topics[board]?.[newGrade]?.[sub] || {}));
        setChap("");
    };

    const setsubvalue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setSub(e.target.value);
        setChap("");
        setChaps(Object.keys(topics[board]?.[grade]?.[sub] || {}));
    };

    const setchapvalue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setChap(e.target.value);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const generateQuestions = async () => {
        if (board && pub && grade && sub && chap) {

            if (!selectedFile) {
                toast.error('Please select a file to upload');
                return;
            }

            if (selectedFile?.name !== `${board.toLowerCase()}_${pub.toLowerCase()}_${grade.split(" ")[1]}_${sub.toLowerCase()}_${chap.toLowerCase()}.pdf`) {
                toast.error(`File name should be in right format! ${board.toLowerCase()}_${pub.toLowerCase()}_${grade.split(" ")[1]}_${sub.toLowerCase()}_${chap.toLowerCase()}.pdf`);
            }

            // create payload for api
            const formdata = new FormData();
            formdata.append('board', board);
            formdata.append('publication', pub);
            formdata.append('grade', grade.split(" ")[1]);
            formdata.append('subject', sub);
            formdata.append('chapter_name', chap);
            formdata.append("topic_data", JSON.stringify(topics[board][grade][sub][chap]));
            formdata.append('chapter_pdf', selectedFile)

            console.log("Payload for generating data: =============================>");
            formdata.forEach((value, key) => {
                console.log(key + " - " + value);
            });

            extractQuestions(formdata)
            .then((data: any) => {
                console.log("Response from api: ", data);
                toast.success(data);
            })
            .catch((error: any) => {
                console.log("Error from api: ", error);
                toast.error(error);
            })
        } else {
            toast.error("Please enter all values!")
        }
    }


    // Update the state when board, grade, or sub changes
    useEffect(() => {
        setPubData(publications[board] || []);
        setGrades(Object.keys(topics[board] || {}));
        setSubjects(Object.keys(topics[board]?.[grade] || {}));
        setChaps(Object.keys(topics[board]?.[grade]?.[sub] || {}));
    }, [board, grade, sub,]);

    return (
        <div>
            <div className="col-md-12 d-flex justify-content-center py-2 mt-4">
                <div className="error-show" style={{ color: "red", fontSize: "15px" }}></div>
                <select className="btn dropdown-toggle border border-primary mx-2" style={{ maxWidth: '200px' }} value={board} onChange={setboardvalue}>
                    <option value="" disabled>Select a Board</option>
                    {boards.map((board, index) => (
                        <option key={index} value={board}>{board}</option>
                    ))}
                </select>

                <select className="btn dropdown-toggle border border-primary mx-2" style={{ maxWidth: '200px' }} value={pub} onChange={setpubvalue}>
                    <option value="" disabled>Select a Publication</option>
                    {pubData.map((pub, index) => (
                        <option key={index} value={pub}>{pub}</option>
                    ))}
                </select>

                <select className="btn dropdown-toggle border border-primary mx-2" style={{ maxWidth: '200px' }} value={grade} onChange={setgradevalue}>
                    <option value="" disabled>Select a Grade</option>
                    {grades.map((grade, index) => (
                        <option key={index} value={grade}>{grade}</option>
                    ))}
                </select>

                <select className="btn dropdown-toggle border border-primary mx-2" style={{ maxWidth: '200px' }} value={sub} onChange={setsubvalue}>
                    <option value="" disabled>Select a Subject</option>
                    {subjects.map((sub, index) => (
                        <option key={index} value={sub}>{sub}</option>
                    ))}
                </select>

                <select className="btn dropdown-toggle border border-primary mx-2" style={{ maxWidth: '170px' }} value={chap} onChange={setchapvalue}>
                    <option value="" disabled>Select a Chapter</option>
                    {chaps.map((chap, index) => (
                        <option key={index} value={chap}>{chap}</option>
                    ))}
                </select>
            </div>

            <div className="col-md-12 d-flex justify-content-center form-floating py-2 mt-4">
                <div className="mx-2">
                    {/* <label htmlFor="formFile" className="form-label">Upload file containing question.</label> */}
                    <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
                </div>
                <div className="mx-2">
                    <button type="button" className="btn btn-primary me-3" style={{ width: '125px' }} onClick={generateQuestions}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionGeneration;
