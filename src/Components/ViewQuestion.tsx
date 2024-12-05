import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "katex/dist/katex.min.css";
import RenderInline from "./RenderInline";
import Swal from "sweetalert2";

type ContentItem = {
  type: "text" | "latex";
  content: string;
};

// interface QueState {
//   question: {
//     blooms_level: string;
//     question: any[];
//     correct_answer: [];
//     explanation: [];
//     option1: [];
//     option2: [];
//     option3: [];
//   };
// }

interface Props {
  // onUpdateClickOnNext: {}
  onUpdateClickedOnView: (newValue: boolean) => void;
  quest: any;
  allQues: any;
  lu_name: string;
  index: any;

  onUpdateState: (newState: {
    question: {
      blooms_level: string;
      question: ContentItem[];
      correct_answer: ContentItem[];
      explanation: ContentItem[];
      option1: ContentItem[];
      option2: ContentItem[];
      option3: ContentItem[];
    };
  }) => void;
}

const ViewPage: React.FC<Props> = ({
  onUpdateClickedOnView,
  onUpdateState,
  // lu_name,
  allQues,
  index,
}) => {
  // const [que, setQue] = useState<QueState>({
  //   question: {
  //     blooms_level: "",
  //     question: [],
  //     correct_answer: [],
  //     explanation: [],
  //     option1: [],
  //     option2: [],
  //     option3: []
  //   },
  // });

  // const [lo, setLo] = useState<any>({});

  // const [formData, setFormData] = useState<any>({});
  // const [saveDisabled, setSaveDisabled] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(index);

  // useEffect(() => {
  //   // console.log("Got values from app ==================> ", allQues, index, allQues[currentIndex]);

  // }, []);

  // useEffect(() => {
  //   if (allQues.length > 0) {
  //     setQue(allQues[currentIndex]);
  //     // setFormData(allQues[currentIndex]);
  //     // setLo(los);
  //   }
  // }, [currentIndex, allQues]);

  useEffect(() => {
    // setLo(los);
  }, []);

  const handleCLosePage = () => {
    onUpdateClickedOnView(false);
    // console.log("IN view page.........", onUpdateClickedOnView);
    // console.log("In view page ======================>");
  };

  // const handleSubmit = (e: any) => {
  //   console.log(
  //     "=================== handleSubmit is running.... ======================="
  //   );
  //   e.preventDefault();

  //   const form = e.target;
  //   const formdata = new FormData(form);
  //   // // console.log(formData);
  //   const formJson = Object.fromEntries(formdata.entries());
  //   // console.log("Form Data", formJson);
  //   // let temp: any = formJson;
  //   // setQue(temp);
  //   formJson["_id"] = allQues[currentIndex]["_id"];
  //   console.log("FormJson in view page: ", formJson)
  //   // console.log("In view page...........", allQues[currentIndex]);
  //   let tempQuestion: any[] = [];
  //   let index1: number = 0;
  //   while (index1 < (allQues[currentIndex]?.Question ?? []).length) {
  //     if (`${index1}Quetext` in formJson) {
  //       tempQuestion.push({
  //         type: "text",
  //         content: formJson[`${index1}Quetext`],
  //       });
  //     }
  //     if (`${index1}Quelatex` in formJson) {
  //       tempQuestion.push({
  //         type: "latex",
  //         content: formJson[`${index1}Quelatex`],
  //       });
  //     }

  //     index1 += 1;
  //   }

  //   let tempAnswer: any[] = [];
  //   let index2: number = 0;
  //   while (
  //     index2 <
  //     (allQues[currentIndex].Correct_Answer
  //       ? allQues[currentIndex].Correct_Answer
  //       : allQues[currentIndex].question.Correct_Answer
  //     ).length
  //   ) {
  //     if (`${index2}Anstext` in formJson) {
  //       tempAnswer.push({
  //         type: "text",
  //         content: formJson[`${index2}Anstext`],
  //       });
  //     }
  //     if (`${index2}Anslatex` in formJson) {
  //       tempAnswer.push({
  //         type: "latex",
  //         content: formJson[`${index2}Anslatex`],
  //       });
  //     }

  //     index2 += 1;
  //   }

  //   let tempExplain: any[] = [];
  //   let index3: number = 0;
  //   while (
  //     index3 <
  //     (allQues[currentIndex].Explanation
  //       ? allQues[currentIndex].Explanation
  //       : allQues[currentIndex].question.Explanation
  //     ).length
  //   ) {
  //     if (`${index3}Exptext` in formJson) {
  //       tempExplain.push({
  //         type: "text",
  //         content: formJson[`${index3}Exptext`],
  //       });
  //     }
  //     if (`${index3}Explatex` in formJson) {
  //       tempExplain.push({
  //         type: "latex",
  //         content: formJson[`${index3}Explatex`],
  //       });
  //     }

  //     index3 += 1;
  //   }

  //   let tempOpt1: any[] = [];
  //   let index4: number = 0;
  //   while (
  //     index4 <
  //     (allQues[currentIndex].option1
  //       ? allQues[currentIndex].option1
  //       : allQues[currentIndex].question.option1
  //     ).length
  //   ) {
  //     if (`${index4}Opt1text` in formJson) {
  //       tempOpt1.push({ type: "text", content: formJson[`${index4}Opt1text`] });
  //     }
  //     if (`${index4}Opt1latex` in formJson) {
  //       tempOpt1.push({
  //         type: "latex",
  //         content: formJson[`${index4}Opt1latex`],
  //       });
  //     }

  //     index4 += 1;
  //   }

  //   let tempOpt2: any[] = [];
  //   let index5: number = 0;
  //   while (
  //     index5 <
  //     (allQues[currentIndex].option2
  //       ? allQues[currentIndex].option2
  //       : allQues[currentIndex].question.option2
  //     ).length
  //   ) {
  //     if (`${index5}Opt2text` in formJson) {
  //       tempOpt2.push({ type: "text", content: formJson[`${index5}Opt2text`] });
  //     }
  //     if (`${index5}Opt2latex` in formJson) {
  //       tempOpt2.push({
  //         type: "latex",
  //         content: formJson[`${index5}Opt2latex`],
  //       });
  //     }

  //     index5 += 1;
  //   }

  //   let tempOpt3: any[] = [];
  //   let index6: number = 0;
  //   while (
  //     index6 <
  //     (allQues[currentIndex].option3
  //       ? allQues[currentIndex].option3
  //       : allQues[currentIndex].question.option3
  //     ).length
  //   ) {
  //     if (`${index6}Opt3text` in formJson) {
  //       tempOpt3.push({ type: "text", content: formJson[`${index6}Opt3text`] });
  //     }
  //     if (`${index6}Opt3latex` in formJson) {
  //       tempOpt3.push({
  //         type: "latex",
  //         content: formJson[`${index6}Opt3latex`],
  //       });
  //     }

  //     index6 += 1;
  //   }

  //   let tempDR1: any[] = [];
  //   let index7: number = 0;
  //   while (
  //     index7 <
  //     (allQues[currentIndex].dr1
  //       ? allQues[currentIndex].dr1
  //       : allQues[currentIndex].question.dr1
  //     ).length
  //   ) {
  //     if (`${index7}DR1text` in formJson) {
  //       tempDR1.push({ type: "text", content: formJson[`${index7}DR1text`] });
  //     }
  //     if (`${index7}DR1latex` in formJson) {
  //       tempDR1.push({ type: "latex", content: formJson[`${index7}DR1latex`] });
  //     }

  //     index7 += 1;
  //   }

  //   let tempDR2: any[] = [];
  //   let index8: number = 0;
  //   while (
  //     index8 <
  //     (allQues[currentIndex].dr2
  //       ? allQues[currentIndex].dr2
  //       : allQues[currentIndex].question.dr2
  //     ).length
  //   ) {
  //     if (`${index8}DR2text` in formJson) {
  //       tempDR2.push({ type: "text", content: formJson[`${index8}DR2text`] });
  //     }
  //     if (`${index8}DR2latex` in formJson) {
  //       tempDR2.push({ type: "latex", content: formJson[`${index8}DR2latex`] });
  //     }

  //     index8 += 1;
  //   }

  //   let tempDR3: any[] = [];
  //   let index9: number = 0;
  //   while (
  //     index9 <
  //     (allQues[currentIndex].dr3
  //       ? allQues[currentIndex].dr3
  //       : allQues[currentIndex].question.dr3
  //     ).length
  //   ) {
  //     if (`${index9}DR3text` in formJson) {
  //       tempDR3.push({ type: "text", content: formJson[`${index9}DR3text`] });
  //     }
  //     if (`${index9}DR3latex` in formJson) {
  //       tempDR3.push({ type: "latex", content: formJson[`${index9}DR3latex`] });
  //     }

  //     index9 += 1;
  //   }

  //   // console.log("After clicking on View Changes ==========> ", tempQuestion, tempAnswer);
  //   allQues[currentIndex] = {
  //     _id: formJson["_id"],
  //     Blooms_Level: formJson.Blooms_Level,
  //     Question: tempQuestion,
  //     Correct_Answer: tempAnswer,
  //     Explanation: tempExplain,
  //     option1: tempOpt1,
  //     dr1: tempDR1,
  //     option2: tempOpt2,
  //     dr2: tempDR2,
  //     option3: tempOpt3,
  //     dr3: tempDR3,
  //   };

  //   // setQue(allQues[currentIndex]);
  //   // console.log("second ====> ", allQues[currentIndex], que);

  //   onUpdateState({
  //     question: allQues[currentIndex],
  //     // lo: los[0]['outcomes'][`${allQues[currentIndex].Blooms_Level}`]
  //   });

  //   setSaveDisabled(false);
  // };

  // const PublishToDb = (e: any) => {
  //   e.preventDefault();

  //   let userConfirmed = window.confirm(
  //     "Are you sure you want to save these changes & publish them to the database?"
  //   );
  //   // console.log("User's confirmation: ", userConfirmed);
  //   // console.log("I updateDB: ", formData.question, allQues[currentIndex]);
  //   let inputValue = "";
  //   if (userConfirmed === true) {
  //     Swal.fire({
  //       title: "Enter your Feedback",
  //       input: "text",
  //       inputValue,
  //       showCancelButton: true,
  //       inputValidator: (value) => {
  //         if (!value) {
  //           return "You need to write something!";
  //         }
  //       }
  //     }).then((res: any) => {
  //       if (res.value) {
  //         inputValue = res.value;
  //         console.log("Feedback: ", inputValue);

  //         saveInDB(allQues[currentIndex], inputValue)
  //           .then((data: any) => {
  //             // console.log(data.result);
  //           })
  //           .finally(() => {
  //             handleCLosePage();
  //             // nextQues();
  //           });
  //       }
  //       else {
  //         console.log("Feedback: ", inputValue);
  //         console.log(" ================ Got no feedback! ===============");

  //         saveInDB(allQues[currentIndex], inputValue)
  //           .then((data: any) => {
  //             console.log(data.result);
  //           })
  //           .finally(() => {
  //             handleCLosePage();
  //             // nextQues();
  //           });
  //       }
  //     })

  //   }
  // };

  // const RejectQuestion = (e: any) => {
  //   e.preventDefault();

  //   let questionDeleteConfirmed = window.confirm(
  //     "Are you sure you want to Delete this question from the database?"
  //     // We might not be able to recover it for you once deleted!"
  //   );

  //   // console.log("User's confirmation: ", questionDeleteConfirmed);
  //   let inputValue = "";

  //   if (questionDeleteConfirmed === true) {
  //     // console.log(allQues[currentIndex]);

  //     Swal.fire({
  //       title: "Enter your Feedback",
  //       input: "text",
  //       inputValue,
  //       showCancelButton: true,
  //       inputValidator: (value) => {
  //         if (!value) {
  //           return "You need to write something!";
  //         }
  //       }
  //     }).then((res: any) => {
  //       if (res.value) {
  //         inputValue = res.value;
  //         console.log("Feedback: ", inputValue);

  //         deleteQues(
  //           allQues[currentIndex]["_id"]
  //             ? allQues[currentIndex]["_id"]
  //             : allQues[currentIndex].question["_id"], inputValue
  //         )
  //           .then((data: any) => {
  //             console.log(data.result);
  //           })
  //           .finally(() => {
  //             handleCLosePage();
  //             // nextQues();
  //           });
  //       }
  //       else {
  //         console.log("Feedback: ", inputValue);
  //         console.log(" ================ Got no feedback! ===============");

  //         deleteQues(
  //           allQues[currentIndex]["_id"]
  //             ? allQues[currentIndex]["_id"]
  //             : allQues[currentIndex].question["_id"], inputValue
  //         )
  //           .then((data: any) => {
  //             console.log(data.result);
  //           })
  //           .finally(() => {
  //             handleCLosePage();
  //             // nextQues();
  //           });
  //       }
  //     })


  //   }
  // };

  const nextQues = () => {
    if (currentIndex < allQues.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      console.log(
        "Navigating to question index: ",
        newIndex,
        " Question Data: ",
        allQues[newIndex]
      );
    } else {
      Swal.fire("No more questions");
    }
  };

  const PrevQues = () => {
    if (currentIndex !== 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      console.log(
        "Navigating to question index: ",
        newIndex,
        " Question Data: ",
        allQues[newIndex]
      );
    }
  };

  // console.log("Indexxxxxxxxxxxxx =============> ", index)
  console.log("LOs in ViewPage: ", allQues[currentIndex].Blooms_Level, currentIndex);

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-md-11 p-2 text-center">
          <h4 className="ps-2 mt-1" style={{ textDecoration: "underline" }}>
            Question
          </h4>
        </div>
      </div>
      <div className="row d-flex mb-1">
        <div className="col-md-3"></div>
        <div className="col-md-6 justify-content-center p-2 card mt-3 mb-2">
          {/* <p className="mt-0 mb-1 fw-medium">Question:</p>
              <textarea
                className="question p-1"
                rows={3}
                defaultValue={que.Question}
                readOnly 
              ></textarea> */}
          <p className="m-0 pb-1 fw-medium">Question:</p>
          <div style={{ border: "solid black 1px" }}>
            <RenderInline
              items={
                allQues[currentIndex].question
                  ? allQues[currentIndex].question
                  : allQues[currentIndex].question.question
              }
            ></RenderInline>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row d-flex mb-1">
        <div className="col-md-3"></div>
        <div className="col-md-6 justify-content-center p-2 card">
          <p className="m-0 pb-1 fw-medium">Correct Answer:</p>
          <div className="mb-3">
            <label
              htmlFor="correctAnswer"
              className="fw-bold p-2"
              style={{
                backgroundColor: "#489d03",
                color: "white",
                width: "30px",
              }}
            >
              <span>A</span>
            </label>
            {/* <span className="fw-bold p-2" style={{ backgroundColor: '#489d03', color: 'white' }}>A</span> */}
            {/* <input
                  className="option1 mb-2 p-1 ms-2"
                  type="text"
                  placeholder="Correct Answer"
                  defaultValue={que.Correct_Answer}
                  readOnly // Ensure input is read-only if you don't need to edit
                /> */}
            <span
              className="ms-2 p-2"
              style={{ border: "solid black 1px" }}
            >
              <RenderInline
                items={
                  allQues[currentIndex].correct_answer
                    ? allQues[currentIndex].correct_answer
                    : allQues[currentIndex].question.correct_answer
                }
              ></RenderInline>
            </span>
          </div>

          <p className="mb-1 pb-0 fw-medium">Options:</p>
          {/* <label htmlFor="option2" className="fw-bold">B</label> */}
          <div>
            <label
              htmlFor="option1"
              className="fw-bold p-2 mt-1"
              style={{
                backgroundColor: "grey",
                color: "white",
                width: "30px",
              }}
            >
              <span>B</span>
            </label>
            {/* <span className="fw-bold p-2" style={{ backgroundColor: 'grey', color: 'white' }}>B</span> */}
            {/* <input
                  id="option2"
                  className="option2 mb-1 p-1 ms-2"
                  type="text"
                  placeholder="Option 2"
                  // defaultValue={que.option1}
                  readOnly
                /> */}
            <span
              className="ms-2 p-2"
              style={{ border: "solid black 1px" }}
            >
              <RenderInline
                items={
                  allQues[currentIndex].option1
                    ? allQues[currentIndex].option1
                    : allQues[currentIndex].question.option1
                }
              ></RenderInline>
            </span>
          </div>

          <div>
            <label
              htmlFor="option2"
              className="fw-bold p-2 mt-1"
              style={{
                backgroundColor: "grey",
                color: "white",
                width: "30px",
              }}
            >
              <span>C</span>
            </label>
            {/* <span className="fw-bold p-2" style={{ backgroundColor: 'grey', color: 'white' }}>C</span> */}
            {/* <input
                  className="option3 mb-1 p-1 ms-2"
                  type="text"
                  placeholder="Option 3"
                  // defaultValue={que.option2}
                  readOnly
                /> */}
            <span
              className="ms-2 p-2"
              style={{ border: "solid black 1px" }}
            >
              <RenderInline
                items={
                  allQues[currentIndex].option2
                    ? allQues[currentIndex].option2
                    : allQues[currentIndex].question.option2
                }
              ></RenderInline>
            </span>
          </div>

          <div>
            <label
              htmlFor="option3"
              className="fw-bold p-2 mt-1"
              style={{
                backgroundColor: "grey",
                color: "white",
                width: "30px",
              }}
            >
              <span>D</span>
            </label>
            {/* <span className="fw-bold p-2" style={{ backgroundColor: 'grey', color: 'white' }}>D</span> */}
            {/* <input
                  className="option4 mb-1 p-1 ms-2"
                  type="text"
                  placeholder="Option 4"
                  // defaultValue={que.option3}
                  readOnly
                /> */}
            <span
              className="ms-2 p-2"
              style={{ border: "solid black 1px" }}
            >
              <RenderInline
                items={
                  allQues[currentIndex].option3
                    ? allQues[currentIndex].option3
                    : allQues[currentIndex].question.option3
                }
              ></RenderInline>
            </span>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row d-flex mb-1">
        <div className="col-md-3"></div>
        <div className="col-md-6 p-2 mt-2 mb-2 card">
          <p className=" mt-0 mb-1 fw-medium">Solution:</p>
          {/* <textarea
                className="solution p-1"
                rows={5}
                // defaultValue={que.Explanation}
                readOnly
              ></textarea> */}
          <div className="p-2" style={{ border: "solid black 1px" }}>
            <RenderInline
              items={
                allQues[currentIndex].explanation
                  ? allQues[currentIndex].explanation
                  : allQues[currentIndex].question.explanation
              }
            ></RenderInline>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row d-flex">
        <div className="col-md-3"></div>
        <div className="col-md-6 justify-content-center">
          <i
            className="bi bi-chevron-left ms-3"
            style={{
              background: "grey",
              cursor: "pointer",
              padding: "10px",
              borderRadius: "19px",
              marginTop: "20px",
            }}
            onClick={PrevQues}
          ></i>
          <i
            className="bi bi-chevron-right ms-2"
            style={{
              background: "grey",
              cursor: "pointer",
              padding: "10px",
              borderRadius: "19px",
              marginTop: "20px",
            }}
            onClick={nextQues}
          ></i>

          <button
                className="btn btn-secondary mx-2 button"
                style={{position: "relative", left: "535px"}}
                onClick={handleCLosePage}
                type="button"
              >
                Close
          </button>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default ViewPage;
