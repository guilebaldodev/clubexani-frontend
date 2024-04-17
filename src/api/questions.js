import axios  from "./axios";

export const newQuestionRequest=(question)=>axios.post("questions",question)