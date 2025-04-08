import React, { useEffect, useState } from "react";
import { MathJaxContext } from "better-react-mathjax";
import "../App.css";
import { topics } from "../Data/topicsData";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { saveInDB, deleteQues } from "../httpservice";
import "katex/dist/katex.min.css";
import { toast } from 'react-toastify';
// import LatexRenderer from './LatexRenderer';
import RenderInline from "./RenderInline";
import Swal from "sweetalert2";

type ContentItem = {
  content: string;
};

// Update the question interface to handle both DB and generated questions
interface QuestionData {
  _id?: string;
  qid: string;
  status: string;
  question: ContentItem[];
  final_answer: ContentItem[];
  solution: ContentItem[];
  option1: ContentItem[];
  dr1: ContentItem[] | string;
  option2: ContentItem[];
  dr2: ContentItem[] | string;
  option3: ContentItem[];
  dr3: ContentItem[] | string;
  topic_name?: string;
  topic_id?: string;
  comment?: string;
}

// Update Props interface
interface Props {
  onUpdateClickedOnView: (newValue: boolean) => void;
  quest: {
    question: QuestionData;
  };
  board: string;
  allQues: QuestionData[];
  lus: { id: string; name: string; }[];
  grade: string;
  subject: string;
  chapter: string;
  index: number;
  onUpdateState: (newState: any) => void;
}

interface QueState {
  question: {
    qid: string;
    question: ContentItem[];
    final_answer: ContentItem[];
    solution: ContentItem[];
    option1: ContentItem[];
    dr1: ContentItem[];
    option2: ContentItem[];
    dr2: ContentItem[];
    option3: ContentItem[];
    dr3: ContentItem[];
  };
}

interface LUDetails {
  LUID: string;
  LU_text: string;
  lo: string[];
}

const getContent = (data: ContentItem[] | string | undefined): string => {
  if (!data) return '';
  if (typeof data === 'string') return data;
  if (Array.isArray(data) && data.length > 0) {
    return data[0].content;
  }
  return '';
};

const ViewPage: React.FC<Props> = ({
  onUpdateClickedOnView,
  onUpdateState,
  lus,
  board,
  // los,
  allQues,
  grade,
  subject,
  chapter,
  index,
}) => {
  const [que, setQue] = useState<QueState>({
    question: {
      qid: "",
      question: [],
      final_answer: [],
      solution: [],
      option1: [],
      dr1: [],
      option2: [],
      dr2: [],
      option3: [],
      dr3: [],
    },
  });


  // const [formData, setFormData] = useState<any>({});
  const [saveDisabled, setSaveDisabled] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(index);
  // const [changedTopic, setChangedTopic] = useState<string>("");
  const [ludata, setLuData] = useState<LUDetails[]>([]);
  // const [selectedLU, setSelectedLU] =useState<string>("");
  // const [lo, setLo] = useState<string[]>([]);

  // useEffect(() => {
  //   // console.log("Got values from app ==================> ", allQues, index, allQues[currentIndex]);

  // }, []);

  const MathJaxConfig = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
      ],

    },
    options: {
      includeHtmlTags: {         //  HTML tags that can appear within math
        br: '\n', wbr: '', '#comment': ''
      },
    }
  };

  useEffect(() => {
    if (allQues.length > 0) {
      const currentQuestion = allQues[currentIndex];
      setQue({
        question: {
          qid: currentQuestion.qid,
          question: Array.isArray(currentQuestion.question) ? currentQuestion.question : [],
          final_answer: Array.isArray(currentQuestion.final_answer) ? currentQuestion.final_answer : [],
          solution: Array.isArray(currentQuestion.solution) ? currentQuestion.solution : [],
          option1: Array.isArray(currentQuestion.option1) ? currentQuestion.option1 : [],
          dr1: Array.isArray(currentQuestion.dr1) ? currentQuestion.dr1 :
            typeof currentQuestion.dr1 === 'string' ? [{ content: currentQuestion.dr1 }] : [],
          option2: Array.isArray(currentQuestion.option2) ? currentQuestion.option2 : [],
          dr2: Array.isArray(currentQuestion.dr2) ? currentQuestion.dr2 :
            typeof currentQuestion.dr2 === 'string' ? [{ content: currentQuestion.dr2 }] : [],
          option3: Array.isArray(currentQuestion.option3) ? currentQuestion.option3 : [],
          dr3: Array.isArray(currentQuestion.dr3) ? currentQuestion.dr3 :
            typeof currentQuestion.dr3 === 'string' ? [{ content: currentQuestion.dr3 }] : []
        }
      });
    }
  }, [currentIndex, allQues]);

  useEffect(() => {
    // setLo(los);
    console.log("In view page =======================> ", allQues[currentIndex]);
    let tempLuObject = topics[board][`Class ${grade}`][`${subject}`][`${chapter}`][`${allQues[currentIndex]["topic_name"]}`];
    console.log("LU Details =========================> ", tempLuObject);
    setLuData(tempLuObject);
  }, []);

  const handleCLosePage = () => {
    onUpdateClickedOnView(false);
    // console.log("IN view page.........", onUpdateClickedOnView);
    // console.log("In view page ======================>");
  };

  const handleSubmit = (e: any) => {
    console.log(
      "=================== handleSubmit is running.... ======================="
    );
    e.preventDefault();

    const form = e.target;
    const formdata = new FormData(form);
    // // console.log(formData);
    const formJson = Object.fromEntries(formdata.entries());
    // console.log("Form Data", formJson);
    // let temp: any = formJson;
    // setQue(temp);
    if (allQues[currentIndex]["_id"]) {
      formJson["_id"] = allQues[currentIndex]["_id"] as string;
    }
    console.log("FormJson in view page: ", formJson)
    // console.log("In view page...........", allQues[currentIndex]);
    let tempQuestion: any[] = [];
    let index1: number = 0;
    while (index1 < (allQues[currentIndex]?.question ?? []).length) {
      // if (`${index1}Quetext` in formJson) {
      //   tempQuestion.push({
      //     type: "text",
      //     content: formJson[`${index1}Quetext`],
      //   });
      // }
      if (`${index1}Quelatex` in formJson) {
        tempQuestion.push({
          // type: "latex",
          content: formJson[`${index1}Quelatex`] ,
        });
      }

      index1 += 1;
    }

    let tempAnswer: any[] = [];
    let index2: number = 0;
    while (
      index2 <
      (allQues[currentIndex].final_answer
      ).length
    ) {
      // if (`${index2}Anstext` in formJson) {
      //   tempAnswer.push({
      //     type: "text",
      //     content: formJson[`${index2}Anstext`],
      //   });
      // }
      if (`${index2}Anslatex` in formJson) {
        tempAnswer.push({
          // type: "latex",
          content: formJson[`${index2}Anslatex`] ,
        });
      }

      index2 += 1;
    }

    let tempExplain: any[] = [];
    let index3: number = 0;
    while (
      index3 <
      (allQues[currentIndex].solution).length
    ) {
      // if (`${index3}Exptext` in formJson) {
      //   tempExplain.push({
      //     type: "text",
      //     content: formJson[`${index3}Exptext`],
      //   });
      // }
      if (`${index3}Explatex` in formJson) {
        console.log("Data when pushed view changes: ======================>", formJson[`${index3}Explatex`])
        tempExplain.push({
          // type: "latex",
          content: formJson[`${index3}Explatex`] ,
        });
      }

      index3 += 1;
    }

    let tempOpt1: any[] = [];
    let index4: number = 0;
    while (
      index4 <
      (allQues[currentIndex].option1).length
    ) {
      // if (`${index4}Opt1text` in formJson) {
      //   tempOpt1.push({ type: "text", content: formJson[`${index4}Opt1text`] });
      // }
      if (`${index4}Opt1latex` in formJson) {
        tempOpt1.push({
          // type: "latex",
          content: formJson[`${index4}Opt1latex`] ,
        });
      }

      index4 += 1;
    }

    let tempOpt2: any[] = [];
    let index5: number = 0;
    while (
      index5 <
      (allQues[currentIndex].option2).length
    ) {
      // if (`${index5}Opt2text` in formJson) {
      //   tempOpt2.push({ type: "text", content: formJson[`${index5}Opt2text`] });
      // }
      if (`${index5}Opt2latex` in formJson) {
        tempOpt2.push({
          // type: "latex",
          content: formJson[`${index5}Opt2latex`] ,
        });
      }

      index5 += 1;
    }

    let tempOpt3: any[] = [];
    let index6: number = 0;
    while (
      index6 <
      (allQues[currentIndex].option3).length
    ) {
      // if (`${index6}Opt3text` in formJson) {
      //   tempOpt3.push({ type: "text", content: formJson[`${index6}Opt3text`] });
      // }
      if (`${index6}Opt3latex` in formJson) {
        tempOpt3.push({
          // type: "latex",
          content: formJson[`${index6}Opt3latex`] ,
        });
      }

      index6 += 1;
    }

    let tempDR1: any[] = [];
    let index7: number = 0;
    while (
      index7 <
      (allQues[currentIndex].dr1).length
    ) {
      // if (`${index7}DR1text` in formJson) {
      //   tempDR1.push({ type: "text", content: formJson[`${index7}DR1text`] });
      // }
      if (`${index7}DR1latex` in formJson) {
        tempDR1.push({
          // type: "latex",
          content: formJson[`${index7}DR1latex`] 
        });
      }

      index7 += 1;
    }

    let tempDR2: any[] = [];
    let index8: number = 0;
    while (
      index8 <
      (allQues[currentIndex].dr2).length
    ) {
      // if (`${index8}DR2text` in formJson) {
      //   tempDR2.push({ type: "text", content: formJson[`${index8}DR2text`] });
      // }
      if (`${index8}DR2latex` in formJson) {
        tempDR2.push({
          // type: "latex",
          content: formJson[`${index8}DR2latex`] 
        });
      }

      index8 += 1;
    }

    let tempDR3: any[] = [];
    let index9: number = 0;
    while (
      index9 <
      (allQues[currentIndex].dr3).length
    ) {
      // if (`${index9}DR3text` in formJson) {
      //   tempDR3.push({ type: "text", content: formJson[`${index9}DR3text`] });
      // }
      if (`${index9}DR3latex` in formJson) {
        tempDR3.push({
          // type: "latex",
          content: formJson[`${index9}DR3latex`] 
        });
      }

      index9 += 1;
    }

    // console.log("After clicking on View Changes ==========> ", tempQuestion, tempAnswer);
    allQues[currentIndex] = {
      _id: formJson["_id"]?.toString(),
      qid: allQues[currentIndex].qid,
      topic_id: allQues[currentIndex].topic_id,
      topic_name: allQues[currentIndex].topic_name,
      status: allQues[currentIndex].status,
      question: tempQuestion,
      final_answer: tempAnswer,
      solution: tempExplain,
      option1: tempOpt1,
      dr1: tempDR1,
      option2: tempOpt2,
      dr2: tempDR2,
      option3: tempOpt3,
      dr3: tempDR3,
    };

    // setQue(allQues[currentIndex]);
    // console.log("second ====> ", allQues[currentIndex], que);

    // los[0]['outcomes'][`${allQues[currentIndex].Blooms_Level.toLowerCase()}`] = formJson.lo;
    onUpdateState({
      question: allQues[currentIndex],
      // lo: los[0]['outcomes'][`${allQues[currentIndex].Blooms_Level}`]
    });

    setSaveDisabled(false);
  };
  const getLOs = async (tempLU: any) => {
    console.log("Inside getLOs", tempLU);
    let tempLuObject2 = topics[board][`Class ${grade}`][`${subject}`][`${chapter}`][`${allQues[currentIndex]["topic_name"]}`];
    let tempLO: string[] = [];
    tempLuObject2.forEach((element: any) => {
      if (element.LUID === tempLU.split(":")[0].trim()) {
        console.log("LUID: ", tempLU.split(":")[0].trim())
        tempLO = element.lo;
      };
    });

    let loOptions = tempLO.map((lo, index) => (
      `<option key="${index}" value="${lo}" style="width: 30px;">${lo}</option>`
    )).join('');

    console.log("lo options: ", loOptions);
    return loOptions;
  };

  const PublishToDb = (e: React.FormEvent) => {
    e.preventDefault();

    const userConfirmed = window.confirm(
      "Are you sure you want to save these changes & publish them to the database?"
    );
    console.log("UserCOnfirmed: ", userConfirmed, ludata);
    if (userConfirmed) {
      ludata
        ? (async () => {
          const optionsLU = ludata.map((lu, index) => (
            `<option key="${index}" value="${lu.LUID} : ${lu.LU_text}">${lu.LU_text}</option>`
          )).join('');

          const lo = topics[board][`Class ${grade}`][`${subject}`][`${chapter}`][`${allQues[currentIndex]["topic_name"]}`][0]["lo"].map((templo: string, index: any) => (
            `<option key="${index}" value="${templo}">${templo}</option>`
          )).join('');
          const { value: formValues } = await Swal.fire({
            title: "Enter Details",
            html: `
        <select id="lu" class="swal2-input" style="width: 400px; margin-bottom: 20px; border: solid 0.5px #D9D9D9; background-color: #FFFFFF; color: #545454; border-radius: 4px;">
          ${optionsLU}
        </select>
        <select id="lo" class="swal2-input" style="width: 400px; border: solid 0.5px #D9D9D9; background-color: #FFFFFF; color: #545454; border-radius: 4px;">
          ${lo}
        </select>
        <input id="comment" class="swal2-input" placeholder="Your feedback pls....">
      `,
            focusConfirm: false,
            showCloseButton: true,
            showDenyButton: true,
            preConfirm: () => {
              const input1 = (document.getElementById("lo") as HTMLInputElement)?.value || '';
              const input2 = (document.getElementById("lu") as HTMLSelectElement)?.value || '';
              const input3 = (document.getElementById("comment") as HTMLInputElement)?.value || '';
              return [input1, input2, input3];
            },
            didOpen: () => {
              const selectElementLU = document.getElementById("lu") as HTMLSelectElement;
              const selectElementLO = document.getElementById("lo") as HTMLSelectElement;

              selectElementLU?.addEventListener("change", async () => {
                const selectedLU = selectElementLU.value;
                const loOptions = await getLOs(selectedLU);

                // Update the LO select box with new options
                selectElementLO.innerHTML = loOptions;

                // const selectElement = document.getElementById("lu") as HTMLSelectElement;
                // selectElement?.addEventListener("change", getLOs);
              });
            }
          });

          // const selectElement = document.getElementById("lu") as HTMLSelectElement;
          // if (selectElement) {
          //   selectElement.addEventListener("change", getLOs);
          // }

          if (formValues) {
            toast.info("Please wait while we publish the content... ⏱️", { autoClose: false });
            const [lo_val, lu_val, comment] = formValues;
            console.log("Whole Ques data: ==============>", allQues[currentIndex]);
            console.log("LU from publish form =============> ", lu_val);
            console.log("LO from publish form =============> ", lo_val);
            console.log("Comment from publish form ============>", comment);
            allQues[currentIndex]["comment"] = comment;

            await saveInDB(allQues[currentIndex], lu_val, lo_val, comment)
              .then((data) => {
                console.log("Data saved successfully");
                allQues[currentIndex].status = 'verified';
                toast.dismiss();
                nextQues();
                toast.success("Data published successfully! 🎉")
              })
              .catch((error) => {
                console.error("Error saving data: ", error);
                toast.dismiss();
                toast.error("Failed to publish data 😔 Please contact Tech Team! 🧑🏻‍💻");
              });
          }
          else {
            console.log("User did not provide feedback.");
          }
        })()
        : toast.info("Issue with data. Please contact Tech Team!");
    }
  };

  const RejectQuestion = (e: any) => {
    e.preventDefault();

    let questionDeleteConfirmed = window.confirm(
      "Are you sure you want to Delete this question from the database?"
      // We might not be able to recover it for you once deleted!"
    );

    // console.log("User's confirmation: ", questionDeleteConfirmed);
    let inputValue = "";

    if (questionDeleteConfirmed === true) {
      // console.log(allQues[currentIndex]);

      Swal.fire({
        title: "Enter your Feedback",
        input: "text",
        width: "500px",
        inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write something!";
          }
        }
      }).then((res: any) => {
        if (res.value) {
          inputValue = res.value;
          console.log("Feedback: ", inputValue);

          if (inputValue.trim() !== "") {
            toast.info("Please wait while we mark the question 'Rejected'... ❌", { autoClose: false });

            deleteQues(
              allQues[currentIndex]._id
                ? allQues[currentIndex]._id
                : (allQues[currentIndex].question as any)._id,
              inputValue
            )
              .then((data: any) => {
                toast.dismiss();
                allQues[currentIndex].status = 'rejected';
                console.log("Rejection API response: ", data.data);
                nextQues();
                toast.success("Question marked for Rejection 🤝");
              })
              .catch((error) => {
                toast.dismiss();
                console.log("Rejection API error: ", error);
                toast.error("Failed to reject question 😔 Please contact Tech Team! 🧑🏻‍💻");
              });
          } else {
            console.log("Feedback: No feedback provided.");
            console.log(" ================ Got no feedback! ===============");
          }
        }
      })


    }
  };

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
      let tempLuObject = topics[board][`Class ${grade}`][`${subject}`][`${chapter}`][`${allQues[currentIndex]["topic_name"]}`];
      console.log("LU Details =========================> ", tempLuObject);
      setLuData(tempLuObject);
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
      let tempLuObject = topics[board][`Class ${grade}`][`${subject}`][`${chapter}`][`${allQues[currentIndex]["topic_name"]}`];
      console.log("LU Details =========================> ", tempLuObject);
      setLuData(tempLuObject);
    }
  };

  const setNewTopic = (e: any) => {
    e.preventDefault();
    // setChangedTopic(e.target.value);

    allQues[currentIndex]["topic_name"] = e.target.value;
    lus.forEach(element => {
      if (element.name === e.target.value) {
        allQues[currentIndex]["topic_id"] = element.id;
      }
    });

    console.log("Topic changed in question data :", allQues[currentIndex]);
    let tempLuObject = topics[board][`Class ${grade}`][`${subject}`][`${chapter}`][`${allQues[currentIndex]["topic_name"]}`];
    console.log("LU Details =========================> ", tempLuObject);
    setLuData(tempLuObject);
    // setSaveDisabled(true);
  }

  // Update content rendering helper function
  const getContent = (data: ContentItem[] | string | undefined): string => {
    if (!data) return '';
    if (typeof data === 'string') return data;
    if (Array.isArray(data) && data.length > 0) {
      return data[0].content;
    }
    return '';
  };

  // console.log("Indexxxxxxxxxxxxx =============> ", index)
  console.log("Data in ViewPage: ", allQues[currentIndex], currentIndex, lus);
  console.log('test===================2', allQues[currentIndex].solution[0]["content"]);
  console.log('test===================3', allQues[currentIndex].question);

  return (
    <div className="container-fluid">
      {/* <div className="row text-center mb-2">
      </div> */}
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 p-2">
          <form name="ReviewForm" method="post" onSubmit={handleSubmit}>
            <h4 className="ps-2 mt-1" style={{ textDecoration: "underline" }}>
              Editable Questions
            </h4>

            <div className="rendering col-md-11 p-2 card mb-2">
              <p className="mt-0 mb-1 fw-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={
                  allQues[currentIndex].status === 'not_reviewed' ? 'yellow' :
                    allQues[currentIndex].status === 'verified' ? 'green' :
                      allQues[currentIndex].status === 'rejected' ? 'red' : 'gray'
                } className="bi bi-circle-fill" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg> &nbsp;
                Qid: {allQues[currentIndex].qid}
              </p>
              <p className="mt-1 mb-1 fw-medium">
                <strong>Comment: &nbsp; </strong>{allQues[currentIndex].comment}
              </p>

              <div>
                <span>
                  <strong>Topic: &nbsp;</strong>
                </span>
                <select className="btn dropdown-toggle border border-secondary mx-2 mt-1" name="" id="" value={allQues[currentIndex]["topic_name"]} onChange={setNewTopic}>
                  {lus.map((lu, index) => (
                    <option key={index}>
                      {lu.name}
                    </option>
                  ))}

                </select>
              </div>
            </div>

            <div className="rendering col-md-11 p-2 card mb-2">
              <p className="mt-0 mb-1 fw-medium">Question:</p>

              <span className="p-2" style={{ border: "solid black 1px" }}>
                {allQues[currentIndex].question?.map(
                  (que_parts: any, index: number) =>
                    que_parts.type === "text" ? (
                      <textarea
                        className="border-0 shadow-0"
                        key={`${index}-${que_parts.content}`} // Unique key
                        name={`${index}Quetext`}
                        id={`${index}Quetext`}
                        style={{
                          width: "570px",
                            height: "auto",
                            maxWidth: "570px",
                            border: "solid black 1px",
                            padding: "6px"
                        }}
                        onChange={() => setSaveDisabled(true)}
                        defaultValue={que_parts.content}
                      />
                    ) : (
                      <textarea
                        className="border-0 shadow-0"
                        key={`${index}-${que_parts.content}`} // Unique key
                        name={`${index}Quelatex`}
                        id={`${index}Quelatex`}
                        style={{
                          width: "570px",
                            height: "auto",
                            maxWidth: "570px",
                            border: "solid black 1px",
                            padding: "6px"
                        }}
                        onChange={() => setSaveDisabled(true)}
                        defaultValue={que_parts.content.replace("\\begin{aligned}", "").replace("\\end{aligned}", "")}
                      />
                    )
                )}
              </span>
            </div>
            <div className="col-md-11 p-2 card mb-2">
              <p className="mt-0 mb-0 pb-1 fw-medium">Correct Answer: </p>
              <div className="row">
                <div className="col-md-1 mt-1 mb-1">
                  <label
                    htmlFor="Correct_Answer"
                    className="fw-bold p-2"
                    style={{
                      backgroundColor: "#489d03",
                      color: "white",
                      width: "40px",
                    }}
                  >
                    <span style={{ marginLeft: "5px" }}>A</span>
                  </label>
                </div>

                <div className="col-md-11 mt-1 mb-1">
                  {/* <p
                    className=""
                    style={{ border: "solid black 1px", padding: "6px" }}
                  > */}
                    {allQues[currentIndex]?.final_answer?.map(
                      (ans_parts: any, index: number) =>
                        ans_parts.type === "text" ? (
                          <input
                            className="border-0 shadow-0"
                            key={`${index}-${ans_parts.content}`}
                            name={`${index}Anstext`}
                            id={`${index}Anstext`}
                            style={{
                              width: "570px",
                            height: "auto",
                            maxWidth: "570px",
                            border: "solid black 1px",
                            padding: "6px",
                            }}
                            onChange={() => setSaveDisabled(true)}
                            defaultValue={ans_parts.content}
                          />
                        ) : (
                          <input
                            className="border-0 shadow-0"
                            key={`${index}-${ans_parts.content}`}
                            name={`${index}Anslatex`}
                            id={`${index}Anslatex`}
                            style={{
                              width: "570px",
                            height: "auto",
                            maxWidth: "570px",
                            border: "solid black 1px",
                            padding: "6px"
                            }}
                            onChange={() => setSaveDisabled(true)}
                            // defaultValue={ans_parts.content}
                            defaultValue={ans_parts.content.replace("\\begin{aligned}", "").replace("\\end{aligned}", "")}
                          />
                        )
                    )}
                  {/* </p> */}
                </div>
              </div>

              <p className="mt-1 pt-2 mb-1 fw-medium">Options: </p>
              <div className="row">
                <div className="col-md-1 mt-1 mb-1">
                  <label
                    htmlFor="option1"
                    className="fw-bold p-2"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "40px",
                    }}
                  >
                    <span style={{ marginLeft: "5px" }}>B</span>
                  </label>
                </div>
                <div className="col-md-11 mt-1 mb-1">
                  {/* <p style={{ border: "solid black 1px", padding: "6px" }}> */}
                    {allQues[currentIndex]?.option1?.map(
                      (opt_parts: any, index: any) =>
                        opt_parts.type === "text" ? (
                          <input
                            className="border-0 shadow-0"
                            key={`${index}-${opt_parts.content}`}
                            name={`${index}Opt1text`}
                            id={`${index}Opt1text`}
                            style={{
                              width: `${(opt_parts.content.length + 1) * 7 + 10
                                }px`,
                              maxWidth: "570px",
                            }}
                            onChange={() => setSaveDisabled(true)}
                            defaultValue={opt_parts.content}
                          />
                        ) : (
                          <input
                            className="border-0 shadow-0"
                            key={`${index}-${opt_parts.content}`}
                            name={`${index}Opt1latex`}
                            id={`${index}Opt1latex`}
                            style={{
                              width: "570px",
                            height: "auto",
                            maxWidth: "570px",
                            border: "solid black 1px",
                            padding: "6px"
                            }}
                            onChange={() => setSaveDisabled(true)}
                            defaultValue={opt_parts.content.replace("\\begin{aligned}", "").replace("\\end{aligned}", "")}
                          />
                        )
                    )}
                  {/* </p> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-1 mt-1 mb-1">
                  <label
                    htmlFor="dr1"
                    className="fw-bold p-2"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "40px",
                    }}
                  >
                    <span>DR</span>
                  </label>
                </div>
                <div className="col-md-11 mt-1 mb-1">
                  {/* <p
                    className=""
                    style={{ border: "solid black 1px", padding: "6px" }}
                  > */}
                    {Array.isArray(allQues[currentIndex]?.dr1)
                      ? (allQues[currentIndex]?.dr1 as ContentItem[]).map(
                        (dr_parts: ContentItem, index: number) => (
                          <input
                            className="border-0 shadow-0"
                            key={`${index}-${dr_parts.content}`}
                            name={`${index}DR1latex`}
                            id={`${index}DR1latex`}
                            style={{
                              width: "570px",
                            height: "auto",
                            maxWidth: "570px",
                            border: "solid black 1px",
                            padding: "6px"
                            }}
                            onChange={() => setSaveDisabled(true)}
                            defaultValue={dr_parts.content.replace("\\begin{aligned}", "").replace("\\end{aligned}", "")}
                          />
                        )
                      )
                      : null
                    }
                  {/* </p> */}
                </div>
              </div>

              <div className="row">
                <div className="col-md-1 mt-1 mb-1">
                  <label
                    htmlFor="option2"
                    className="fw-bold p-2"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "40px",
                    }}
                  >
                    <span style={{ marginLeft: "5px" }}>C</span>
                  </label>
                </div>
                <div className="col-md-11 mt-1 mb-1">
                  {/* <p
                    className=""
                    style={{ border: "solid black 1px", padding: "6px" }}
                  > */}
                    {allQues[currentIndex]?.option2?.map(
                      (opt_parts: any, index: any) =>
                        opt_parts.type === "text" ? (
                          <input
                            className="border-0 shadow-0"
                            key={`${index}-${opt_parts.content}`}
                            name={`${index}Opt2text`}
                            id={`${index}Opt2text`}
                            style={{
                              
                            }}
                            onChange={() => setSaveDisabled(true)}
                            defaultValue={opt_parts.content}
                          />
                        ) : (
                          <input
                            className="border-0 shadow-0"
                            key={`${index}-${opt_parts.content}`}
                            name={`${index}Opt2latex`}
                            id={`${index}Opt2latex`}
                            style={{
                              width: "570px",
                            height: "auto",
                            maxWidth: "570px",
                            border: "solid black 1px",
                            padding: "6px"
                            }}
                            onChange={() => setSaveDisabled(true)}
                            defaultValue={opt_parts.content.replace("\\begin{aligned}", "").replace("\\end{aligned}", "")}
                          />
                        )
                    )}
                  {/* </p> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-1 mt-1 mb-1">
                  <label
                    htmlFor="dr2"
                    className="fw-bold p-2"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "40px",
                    }}
                  >
                    <span>DR</span>
                  </label>
                </div>
                <div className="col-md-11 mt-1 mb-1">
                  {/* <p
                    className=""
                    style={{ border: "solid black 1px", padding: "6px" }}
                  > */}
                    {Array.isArray(allQues[currentIndex]?.dr2)
                      ? (allQues[currentIndex]?.dr2 as ContentItem[]).map(
                        (dr_parts: ContentItem, index: number) => (
                          <input
                            className="border-0 shadow-0"
                            key={`${index}-${dr_parts.content}`}
                            name={`${index}DR2latex`}
                            id={`${index}DR2latex`}
                            style={{
                              width: "570px",
                            height: "auto",
                            maxWidth: "570px",
                            border: "solid black 1px",
                            padding: "6px"
                            }}
                            onChange={() => setSaveDisabled(true)}
                            defaultValue={dr_parts.content.replace("\\begin{aligned}", "").replace("\\end{aligned}", "")}
                          />
                        )
                      )
                      : null
                    }
                  {/* </p> */}
                </div>
              </div>

              <div className="row">
                <div className="col-md-1 mt-1 mb-1">
                  <label
                    htmlFor="option3"
                    className="fw-bold p-2"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "40px",
                    }}
                  >
                    <span style={{ marginLeft: "5px" }}>D</span>
                  </label>
                </div>
                <div className="col-md-11 mt-1 mb-1">
                  {/* <p
                    className=""
                    style={{ border: "solid black 1px", padding: "6px" }}
                  > */}
                    {allQues[currentIndex]?.option3?.map(
                      (opt_parts: any, index: number) =>
                        opt_parts.type === "text" ? (
                          <input
                            // className="border-0 shadow-0"
                            key={`${index}-${opt_parts.content}`}
                            name={`${index}Opt3text`}
                            id={`${index}Opt3text`}
                            style={{
                              // width: `${(opt_parts.content.length + 1) * 7 + 10
                              //   }px`,
                              width: "570px",
                              height: "auto",
                              maxWidth: "570px",
                              border: "solid black 1px",
                              padding: "6px"
                            }}
                            onChange={() => setSaveDisabled(true)}
                            defaultValue={opt_parts.content}
                          />
                        ) : (
                          <input
                            className="border-0 shadow-0"
                            key={`${index}-${opt_parts.content}`}
                            name={`${index}Opt3latex`}
                            id={`${index}Opt3latex`}
                            style={{
                              width: "570px",
                              height: "auto",
                              maxWidth: "570px",
                              border: "solid black 1px",
                              padding: "6px"
                            }}
                            onChange={() => setSaveDisabled(true)}
                            defaultValue={opt_parts.content.replace("\\begin{aligned}", "").replace("\\end{aligned}", "")}
                          />
                        )
                    )}
                  {/* </p> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-1 mt-1 mb-1">
                  <label
                    htmlFor="dr3"
                    className="fw-bold p-2 mt-1"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "40px",
                    }}
                  >
                    <span>DR</span>
                  </label>
                </div>

                <div className="col-md-11 mt-1 mb-1">
                  {/* <p
                    className=""
                    style={{ border: "solid black 1px", padding: "6px" }}
                  > */}
                    {Array.isArray(allQues[currentIndex]?.dr3)
                      ? (allQues[currentIndex]?.dr3 as ContentItem[]).map(
                        (dr_parts: ContentItem, index: number) => (
                          <input
                            className="border-0 shadow-0"
                            key={`${index}-${dr_parts.content}`}
                            name={`${index}DR3latex`}
                            id={`${index}DR3latex`}
                            style={{
                              width: "570px",
                              height: "auto",
                              maxWidth: "570px",
                              border: "solid black 1px",
                            }}
                            onChange={() => setSaveDisabled(true)}
                            defaultValue={dr_parts.content.replace("\\begin{aligned}", "").replace("\\end{aligned}", "")}
                          />
                        )
                      )
                      : null
                    }
                  {/* </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-11 p-2 card mb-2">
              <p className=" mt-0 mb-1 fw-medium">Solution:</p>
              <span className="ms-2 p-2" style={{ border: "solid black 1px" }}>
                {allQues[currentIndex]?.solution?.map(
                  (exp_parts: any, index: number) =>
                    exp_parts.type === "text" ? (
                      // <p className="icon-container">
                        <textarea
                          className="border-0 shadow-0"
                          key={`${index}-${exp_parts.content}`}
                          name={`${index}Exptext`}
                          id={`${index}Exptext`}
                          rows={5}
                          style={{
                            // width: `${(opt_parts.content.length + 1) * 7 + 10
                            //   }px`,
                            width: "570px",
                            height: "auto",
                            maxWidth: "570px",
                            border: "solid black 1px",
                            padding: "6px"
                          }}
                          onChange={() => setSaveDisabled(true)}
                          defaultValue={exp_parts.content}
                        />
                      // </p>
                    ) : (
                      // <p>
                        <textarea
                          className="border-0 shadow-0"
                          key={`${index}-${exp_parts.content}`}
                          name={`${index}Explatex`}
                          id={`${index}Explatex`}
                          rows={5}
                          style={{
                            // width: `${(opt_parts.content.length + 1) * 7 + 10
                            //   }px`,
                            width: "570px",
                            height: "auto",
                            maxWidth: "570px",
                            border: "solid black 1px",
                            padding: "6px"
                          }}
                          onChange={() => setSaveDisabled(true)}
                          defaultValue={exp_parts.content.replace("\\begin{aligned}", "").replace("\\end{aligned}", "")}
                        />
                      // </p>
                    )
                )}
              </span>
            </div>

            <div className="btns col-md-11 pt-2 px-2 mb-5">
              <button
                className="btn btn-secondary mx-2 button"
                onClick={handleCLosePage}
                type="button"
              >
                Close
              </button>
              <button className="btn btn-success mx-2 button" type="submit">
                View Changes
              </button>
              <button
                className="btn btn-primary mx-2 button"
                onClick={PublishToDb}
                disabled={saveDisabled}
                type="button"
              >
                Save & Publish
              </button>
              <button
                className="btn btn-danger mx-2 button"
                onClick={RejectQuestion}
                type="button"
              >
                Reject
              </button>
              {/* <button className="btn btn-info mx-2 button" onClick={nextQues} type="button">Next</button> */}
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
            </div>
          </form>
        </div>

        <div className="rendering col-md-6 p-2 ">
          <MathJaxContext version={3} config={MathJaxConfig}>
            <h4 className="ps-2 mt-1" style={{ textDecoration: "underline" }}>
              Rendered Questions
            </h4>
            <div className="row rendered mb-5" style={{ overflow: "hidden" }}>
              <div className="col-md-11 p-2 card mb-2">
                {/* <p className="mt-0 mb-1 fw-medium">Question:</p>
              <textarea
                className="question p-1"
                rows={3}
                defaultValue={que.Question}
                readOnly 
              ></textarea> */}
                <p className="m-0 pb-1 fw-medium">Question:</p>
                <div className="que ps-2" style={{ border: "solid black 1px", lineHeight: "35px" }}>
                  <RenderInline
                    inputStrings={
                      getContent(allQues[currentIndex]?.question)
                    }
                  ></RenderInline>
                  {/* <MathJax>
                  {
                  allQues[currentIndex].question[0]["content"]
                      ? allQues[currentIndex].question[0]["content"]
                      : allQues[currentIndex].question.question
                      }
                </MathJax> */}

                </div>
              </div>
              <div className="col-md-11 p-2 card">
                <p className="m-0 pb-1 fw-medium">Correct Answer:</p>
                <div className="row mb-3" style={{ lineHeight: '35px' }}>
                  <label
                    htmlFor="correctAnswer"
                    className="col-md-1 fw-bold p-2 text-center"
                    style={{
                      backgroundColor: "#489d03",
                      color: "white",
                      width: "6.3%",
                    }}
                  >
                    <span>A</span>
                  </label>
                  <span
                    className="col-md-11 ms-2 p-2">
                    <RenderInline
                      inputStrings={
                        getContent(allQues[currentIndex]?.final_answer)
                      }
                    ></RenderInline>
                  </span>
                </div>

                <p className="mb-1 pb-0 fw-medium">Options:</p>
                {/* <label htmlFor="option2" className="fw-bold">B</label> */}
                <div className="rendering row mb-3" style={{ lineHeight: '35px' }}>
                  <label
                    htmlFor="option1"
                    className="col-md-1 fw-bold p-2 mt-1 text-center"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "6.3%",
                    }}
                  >
                    <span>B </span>
                  </label>
                  <span
                    className="col-md-11 ms-2 p-2"
                  >
                    <RenderInline
                      inputStrings={
                        getContent(allQues[currentIndex]?.option1)
                      }
                    ></RenderInline>
                  </span>
                </div>

                <div className="my-2 row mb-3" style={{ lineHeight: '16px' }} >
                  <label
                    htmlFor="dr1"
                    className="col-md-1 fw-bold p-2 mt-1"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "6.3%",
                    }}
                  >
                    <span>DR</span>
                  </label>
                  <span
                    className="col-md-11 ms-2 mt-1 p-2" style={{}}
                  >
                    <RenderInline
                      inputStrings={
                        Array.isArray(allQues[currentIndex]?.dr1)
                          ? (allQues[currentIndex]?.dr1 as ContentItem[])[0]?.content || ''
                          : typeof allQues[currentIndex]?.dr1 === 'string'
                            ? allQues[currentIndex]?.dr1
                            : ''
                      }
                    />
                  </span>
                </div>

                <div className="row mb-3" style={{ lineHeight: '35px' }}>
                  <label
                    htmlFor="option2"
                    className="cold-md-1 fw-bold p-2 mt-1 text-center"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "6.3%",
                    }}
                  >
                    <span>C</span>
                  </label>
                  <span
                    className="col-md-11 ms-2 p-2"
                  >
                    <RenderInline
                      inputStrings={
                        getContent(allQues[currentIndex]?.option2)
                      }
                    ></RenderInline>
                  </span>
                </div>

                <div className="my-2 row mb-3" style={{ lineHeight: '16px' }}>
                  <label
                    htmlFor="dr2"
                    className="col-md-1 fw-bold p-2 mt-1"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "6.3%",
                    }}
                  >
                    <span>DR</span>
                  </label>
                  <span
                    className="col-md-11 ms-2 mt-1 p-2" style={{}}
                  >
                    <RenderInline inputStrings={
                      getContent(allQues[currentIndex]?.dr2)
                    }></RenderInline>
                  </span>
                </div>

                <div className="row mb-3" style={{ lineHeight: '35px' }}>
                  <label
                    htmlFor="option3"
                    className="col-md-1 fw-bold p-2 mt-1 text-center"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "6.3%",
                    }}
                  >
                    <span>D</span>
                  </label>
                  <span
                    className="col-md-11 ms-2 p-2"
                  >
                    <RenderInline
                      inputStrings={
                        getContent(allQues[currentIndex]?.option3)
                      }
                    ></RenderInline>

                  </span>
                </div>


                <div className="my-2 row mb-3" style={{ lineHeight: '16px' }}>
                  <label
                    htmlFor="dr3"
                    className="col-md-1 fw-bold p-2 mt-1"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "6.3%",
                    }}
                  >
                    <span>DR</span>
                  </label>
                  <span
                    className="col-md-11 ms-2 mt-1 p-2"
                  >
                    <RenderInline inputStrings={getContent(allQues[currentIndex]?.dr3)}></RenderInline>
                  </span>
                </div>
              </div>
              <div className="col-md-11 p-2 mt-2 mb-2 card">
                <p className=" mt-0 mb-1 fw-medium">Solution:</p>
                <div className="rendering p-2" style={{ lineHeight: "35px" }}>
                  <RenderInline
                    inputStrings={
                      getContent(allQues[currentIndex]?.solution)
                    }
                  ></RenderInline>
                </div>
              </div>  
            </div>
          </MathJaxContext>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
