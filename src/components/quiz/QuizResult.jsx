import React, { useEffect, useState } from 'react';
import QuestionResulteEnd from '@/components/quiz/QuestionResulteEnd';
import Stats from '@/components/quiz/Stats';


function QuizResult(props) {
    let [score, setScore] = useState(0);
    let [worng, setWorng] = useState(0);
    let [noReplay, setNoReplay] = useState(0);
    let [worngArr, setWorngArr] = useState([]);

    useEffect(() => {
        props.data.forEach(e=> {
            if(e.answer === e.answerUser){
                setScore(score => score + 1);
            }
            else if (e.answerUser === 'no') {
                setNoReplay(noReplay => noReplay + 1);
                setWorngArr(worngArr => [...worngArr, e]);
            }
            else {
                setWorng(worng => worng + 1);
                // setWorngArr(worngArr => [...worngArr, e]);
            }
        })
    }, [])    
  return (
    <div className='space-y-5 pt-5'>
        <Stats score={score}  worng={worng}  questionsLength={props.data.length}/>
        {
             props.data.map((e,index)=> {
                return <div> <QuestionResulteEnd number={index} question={e} />
                </div>
            })
        }
    </div>
  )
}

export default QuizResult