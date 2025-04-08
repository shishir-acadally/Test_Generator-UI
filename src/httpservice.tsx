import axios from 'axios';
import { topics } from './Data/topicsData';
import OpenAI from 'openai';

const get_API_URL = 'https://leap-uat.acadally.com/learning_units';
const Ques_API_URL = 'https://cms-backend-ogq4.onrender.com';
// const Ques_API_URL = 'http://127.0.0.1:8000'
const API_TOKEN = '698a2fc38522a684193eb0af8b44f1c4';

// Function to fetch grades
export const getGrades = () => {
  const url = `${get_API_URL}?token=${API_TOKEN}`;
  return axios.get(url).then(response => response.data);
};

// Function to fetch subjects based on grade
export const getSubjects = (grade: any) => {
  const url = `${get_API_URL}?grade=${grade}&token=${API_TOKEN}`;
  // console.log(url);
  return axios.get(url).then(response => response.data);
};

// Function to fetch chapters based on grade and subject
export const getChapters = (grade: any, subject: any) => {
  const url = `${get_API_URL}?grade=${grade}&subject=${subject}&token=${API_TOKEN}`;
  // console.log(url);
  return axios.get(url).then(response => response.data);
};

// Function to fetch learning units based on grade, subject, and chapter
export const getLUs = (grade: string, subject: string, chapter: string) => {
  let lus = topics[`Class${grade}`][subject][chapter]
  return lus;
};

export const getTopicQuestions = (topic_name: string, publication: string) => {
  const url = `${Ques_API_URL}/DBQues`;

  if (publication === "All Publications") {
    publication = "";
  }
  const requestBody = { "topic_name": topic_name, "publication": publication, "qid": "" };
  return axios.post(url, requestBody).then(res => res.data);
}

export const getQuestionWithId = (que_Id: string) => {
  const url = `${Ques_API_URL}/DBQues`
  // console.log("Url for getting data form database: ",url);
  const requestBody = { "topic_name": "", "publication": "", "qid": que_Id };
  return axios.post(url, requestBody).then(res => res.data);
}

export const saveInDB = (formJson: any, lu: string, lo: string, comment: string) => {
  const url = `${Ques_API_URL}/updateQues`
  // console.log("Url for updating questions: ", url);
  // console.log("Inp Argument: ", formJson)
  const requestBody = {
    id: formJson._id,
    qid: formJson.qid,
    topic_id: formJson.topic_id,
    topic_name: formJson.topic_name,
    final_answer: formJson.final_answer,
    question: formJson.question,
    option1: formJson.option1,
    dr1: formJson.dr1,
    option2: formJson.option2,
    dr2: formJson.dr2,
    option3: formJson.option3,
    dr3: formJson.dr3,
    solution: formJson.solution,
    lu: lu,
    lo: lo,
    comment: comment
  };


  // console.log("Request Body for updating question: ", requestBody);
  return axios.post(url, requestBody);
}

export const deleteQues = (id: string, comments: string) => {
  const url = `${Ques_API_URL}/deleteQues`
  // console.log("Url for deleting questions: ", url);

  const requestBody = {
    id: id,
    comment: comments
  };

  console.log("Request Body for deleting question: ", requestBody);
  return axios.post(url, requestBody);
}

export const setCloneAPI = (cloneid: string, originalid: string) => {
  const url = `${Ques_API_URL}/setClone`
  const requestBody = {
    qid: cloneid + '',
    originalid: originalid
  }

  console.log("Request Body for setClone method: ", requestBody);
  return axios.post(url, requestBody);
}

export const login = (username: any) => {
  const url = `${Ques_API_URL}/user/login`
  const requestBody = {
    'username': username
  }
  return axios.post(url, requestBody);
}

export const extractQuestions = (formData: FormData) => {
  const url = `${Ques_API_URL}/generateQues`;
  return axios.post(url, formData);
};


// -----------------------------------------------  CKI APIs  --------------------------------------------------------

export const QuestionsCount = () => {
  const url = `${Ques_API_URL}/loquestioncount`
  return axios.get(url).then(response => response.data);
};

export const getChapLearningUnits = (grade: string, chapter: string) => {
  const url = `${Ques_API_URL}/getLULOs`;
  let requestBody;
  if (grade !== "") {
    requestBody = {
      "grade": grade,
      "chapter_name": chapter
    }
  } else {
    requestBody = {
      "chapter_name": chapter
    }
  }

  return axios.post(url, requestBody);
}

export const getChapQuestions = (grade: string, chapter: string) => {
  const url = `${Ques_API_URL}/getAllQuestions`;
  let requestBody;
  if (grade !== "") {
    requestBody = {
      "grade": grade,
      "chapter_name": chapter
    }
  } else {
    requestBody = {
      "chapter_name": chapter
    }
  }
  return axios.post(url, requestBody);
}


// ------------------------------------------------ OPENAI APIs ------------------------------------------------

export const generateQuestions = async (
  board: string,
  grade: string,
  subject: string, 
  chapter: string,
  topic: string,
  bloom: string,
  signal?: AbortSignal
) => {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const prompt = `Generate 5 multiple choice questions for:
    Board: ${board}
    Grade: ${grade} 
    Subject: ${subject}
    Chapter: ${chapter}
    Topic: ${topic}
    Bloom's Level: ${bloom}

    ## INSTRUCTIONS
    - All the questions should be specific to the given topic.
    - All questions should be different from each other. No question should be similar to another.
    - Generate different type of questions like Fill ups, Assertion Reasoning, Match the following, Which of the following statements, etc.
    - All the data should be in British English.
    - All the data should be in latex format. All mathematical symbols, terms, equations, expressions, etc. should be wrapped in '\\\\(' and '\\\\)' for inline latex.
    - Use '<br />' for line breaks.
    - Solution and explanation should always be correct with proper solution steps.
    
    ## Output Format
    - Make sure the output is in given JSON format:
    {
      "questions": [
        {
          "question": "question text",
          "options": {
            "A": "option 1",
            "B": "option 2",
            "C": "option 3",
            "D": "option 4"
          },
          "correct_answer": "A/B/C/D",
          "solution": "detailed solution"
        },
      ]
    }
`;

  const stream = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    stream: true,
    temperature: 0.3,
  });

  return stream;
};