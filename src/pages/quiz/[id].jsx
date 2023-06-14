import React, { useState } from 'react'
import QuestionList from '@/data'
import QuizResult from '@/components/quiz/QuizResult';
import Question from '@/components/quiz/Question';
import ContainerApp from '@/components/ContainerApp';
import { useRouter } from 'next/router';
 

function QuizScreen({questions}) {
  const [questionList, setQuestionList] = useState(questions)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const [markedAnswers, setMarkedAnswers] = useState(new Array(questionList.length));
  const [markedAnswers, setMarkedAnswers] = useState([]);
  const isQuestionEnd = currentQuestionIndex === questionList.length;
 
  const router = useRouter();


  return true ? (
    <ContainerApp>
      {
        isQuestionEnd ? (
          <QuizResult data={markedAnswers}/>
        ) : (
          <Question
            question={questionList[currentQuestionIndex]}
            totalQuestions={questionList.length}
            currentQuestion={currentQuestionIndex+1}
            setAnswer={(answer) => {
              setMarkedAnswers([...markedAnswers, {...questionList[currentQuestionIndex], answerUser : answer}]);
              setCurrentQuestionIndex(currentQuestionIndex+1);
            }}
          />
        )
      }
    </ContainerApp>
  ) : (
    <h1>Data is loading</h1>
  )
}

export default QuizScreen;

export async function getStaticPaths() {
  try {
  let urls = []
    await Object.keys(QuestionList).forEach(key => {
      urls.push(key);
    });
    
    let paths = urls.map((e,i) => {
      return {
        params : {id: (i + 1).toString()}
      }
    })
    return {
      paths,
      fallback:false
    }
    
  } catch (error) {
    // console.log(error);
    return {
      paths:[],
      fallback:false
    }
    
  }
}

export async function getStaticProps(ctx) {
  try {
    let questions = []
    await Object.keys(QuestionList).forEach(key => {
      questions = QuestionList[ctx.params.id]
    });
    return {
      props:{
        questions
      }
    }
  } catch (error) {
    // console.log(error);
    return {props : {
      questions : {}
    }}
  }
}
