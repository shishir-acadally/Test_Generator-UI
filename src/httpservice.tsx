import axios from 'axios';

const Ques_API_URL = 'https://test-generator-backend.onrender.com';
// const Ques_API_URL = 'http://127.0.0.1:8000'

// Function to fetch learning units based on grade, subject, and chapter
export const getTopics = (grade: string, subject: string, chapter: string) => {
  const requestBody = {"grade": grade, "subject": subject, "chapter": chapter};
  const url = `${Ques_API_URL}/getTopics`;
  // console.log(url);
  return axios.post(url, requestBody).then(response => response.data);
};

export const getDBQuestions = (topic_name: string) => {
  const url = `${Ques_API_URL}/DBQues`
  const requestBody = {"topic_name": topic_name};
  console.log("Url & request body for getting data form database: ",url, "\n\n", requestBody);
  return axios.post(url, requestBody).then(res => res.data);
}

export const generateQues = (count:string, topic_id: string, grade: string, subject: string, chapter: string, bloom: string) => {
  const url = `${Ques_API_URL}/generateQues`
  // console.log("Url for generating MCQs: ", url, learning_unit);
  const requestBody = {
    "topic_id": topic_id,
    "grade": grade,
    "subject": subject,
    "chapter": chapter,
    "count": count,
    "bloom": bloom
  }
  return axios.post(url, requestBody).then(res => res.data)
}
