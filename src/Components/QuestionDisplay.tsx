// src/components/QuestionDisplay.js
import React from "react";
import "../css/QuestionDisplay.css";
import '../App.css'
import convertTextWithMathML from "../utils/mathml"
import MathJaxComponent from "./RenderInline"
import { MathJaxContext } from 'better-react-mathjax'

function decodeHtmlEntities(html: any) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.documentElement.textContent;
};

function getOptionsWithLatex(option: any) {
  if (option.fraction === "1.0000000") {
    return <MathJaxComponent inputStrings={option.option ? decodeHtmlEntities(option.option) : ""} />;
  } else {
    return <MathJaxComponent inputStrings={option.option ? decodeHtmlEntities(option.option) : ""} /> ;
  }
}

function getOptionsWithHtml(option: any) {
  if (option.fraction === "1.0000000") {
    return convertTextWithMathML(option.option) + " : Correct";
  } else {
    return convertTextWithMathML(option.option) + " : Incorrect";
  }
};

const QuestionDisplay = ({ question, lo }: { question: any, lo: any }) => {
  console.log("Current Question: ", question);
  const config = {
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
      includeHtmlTags: {
        br: '\n', wbr: '', '#comment': ''
      },
    }
  };

  return (
    <div className="question-display">
      <h3>Question Details</h3>
      <p><strong>ID:</strong> {question.id}</p>
      <p><strong>LO:</strong> {lo}</p>
      <p><strong>Clone:</strong> {question.isclone === "Yes" ? "Yes" : "No"}</p>
      <p><strong>Question:</strong> {question.name}</p>
      <MathJaxContext version={3} config={config}>
        <div className="p-4 latexoutput" style={{ border: '1px black' }}>
          {question.islatex === "true" ? (<MathJaxComponent inputStrings={question.questiontext ? decodeHtmlEntities(question.questiontext) : ""} />) : <p dangerouslySetInnerHTML={{ __html: convertTextWithMathML(question.questiontext ? question.questiontext : "") }}></p>}
        </div>


        {/* <p className="latexoutput" dangerouslySetInnerHTML={{ __html: question['islatex'] === "true" ? katex.renderToString(decodeHtmlEntities(question.questiontext || ""), { throwOnError: false, output: 'mathml'}) : convertTextWithMathML(question.questiontext?question.questiontext:"") }} /> */}
        {/* <p dangerouslySetInnerHTML={{ __html: convertTextWithMathML(question.questiontext?question.questiontext:"") }}></p> */}

        <p><strong>Options:</strong></p>
        <ul>
          {question.options.map((option: any, index: any) => {
            if (!option.option) return null;
            const isLatex = question.islatex === "true";
            // const correctnessLabel = option.fraction === "1.0000000" ? " : Correct" : " : Incorrect";
            // const htmlContent = isLatex ? getOptionsWithLatex(option) : getOptionsWithHtml(option);
            // console.log("Options content: ", htmlContent)
            return isLatex? <li key={index}>{getOptionsWithLatex(option)}</li> : <li key={index} dangerouslySetInnerHTML={{ __html: getOptionsWithHtml(option)  }}></li>;
          })}
        </ul>

        <strong>solution:</strong>
        {/* <p className="latexoutput" dangerouslySetInnerHTML={{ __html: question['islatex'] === "true" ? katex.renderToString(decodeHtmlEntities(question.solution || ""), { throwOnError: false, output: 'mathml',  }): convertTextWithMathML(question.solution?question.solution:"") }}></p> */}
        <div className="p-4 latexoutput" style={{ border: '1px black' }}>
          {question.islatex === "true" ? (<MathJaxComponent inputStrings={question.solution ? decodeHtmlEntities(question.solution) : ""} />) : <p dangerouslySetInnerHTML={{ __html: convertTextWithMathML(question.solution ? question.solution : "") }}></p>}
        </div>
      </MathJaxContext>
    </div>

  );
};

export default QuestionDisplay;