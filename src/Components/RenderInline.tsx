// import React from 'react';
import katex from 'katex';
// import 'katex/dist/katex.min.css';

// // Define the type for the dictionary array
// type ContentItem = {
//     content: string;
// };

// interface RenderContentProps {
//     items: ContentItem[];
// }

// const RenderInline: React.FC<RenderContentProps> = ({ items = [] }) => {
//     const renderItem = (item: ContentItem, index: number) => {
//         // if (item.type === 'latex') {
//             try {
//                 const html = katex.renderToString(item.content, { throwOnError: false });
//                 return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
//             } catch (error) {
//                 console.error('Error rendering LaTeX:', error);
//                 return <span key={index}>Error rendering LaTeX</span>;
//             }
//         // } else {
//         //     // Plain text
//         //     return <span className='mb-2 py-2' key={index}>{item.content}</span>;
//         // }
//     };

//     return <span className='mb-3'>{Array.isArray(items) ? items.map(renderItem) : null}</span>;
// };


// export default RenderInline;

import { useEffect, useRef, useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";


function formatMathJaxElements(input: any) {
  const textRegex = /\\text\{(.*?)\}/g; // Matches \text{...} and captures content
  let lastIndex = 0;
  let parts = [];

  // Find all text elements and split the input
  input.replace(textRegex, (match :any, content :any, index :any) => {
    // Add math part before this text element (if exists)
    if (index > lastIndex) {
      const mathPart = input.slice(lastIndex, index).trim();
      if (mathPart) {
        parts.push({ type: 'math', content: mathPart });
      }
    }
    
    // Add the text part
    if (content.trim()) {
      parts.push({ type: 'text', content: content });
    }
    
    lastIndex = index + match.length;
    return match;
  });

  // Add any remaining math part after the last text element
  if (lastIndex < input.length) {
    const mathPart = input.slice(lastIndex).trim();
    if (mathPart) {
      parts.push({ type: 'math', content: mathPart });
    }
  }

  return parts;
}

const RenderInline = ({ inputStrings } : {inputStrings : any}) => {
  const [parsedLines, setParsedLines] = useState([]);
  const mathjaxRef = useRef(null);

  useEffect(() => {
    // Parse the input when it changes
    const processInput = () => {
      // Clean up the input strings
      const cleanedInput = inputStrings
        .replace("\\begin{aligned}", "")
        .replace("\\end{aligned}", "")
        .replaceAll("&", "");
      
      // Split by line breaks
      const stringArray = cleanedInput.split("\\\\");

      // Process each line
      const lines = stringArray.map((line :any) => formatMathJaxElements(line));
      setParsedLines(lines);
      // console.log("Formatted latex: ", lines);
    };

    processInput();
  }, [inputStrings]);

  // Trigger MathJax typesetting when content changes
  useEffect(() => {
    if (window.MathJax && mathjaxRef.current && parsedLines.length > 0) {
      // Use a short timeout to ensure DOM is updated
      const timer = setTimeout(() => {
        (window.MathJax as any).typesetPromise([mathjaxRef.current])
          .catch((err :any) => console.error("Typeset failed:", err));
      }, 0);
      
      return () => clearTimeout(timer);
    }
  }, [parsedLines]);

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
        br: '\n', 
        wbr: '', 
        '#comment': ''
      },
    }
  };
  return (
    <div>
    <MathJaxContext version={3} config={config}>
      <div
        ref={mathjaxRef}
        style={{
          overflowWrap: "break-word",
          textAlign: "left",
        }}
      >
        <MathJax dangerouslySetInnerHTML={{__html: inputStrings}}></MathJax>
      </div>
    </MathJaxContext>
    </div>
  );
};
  
  export default RenderInline;
