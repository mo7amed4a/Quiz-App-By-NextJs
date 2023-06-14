import React, { useState } from 'react'
import { Card, Form, Progress } from 'react-daisyui';

function Question({question, totalQuestions, currentQuestion, setAnswer}) {
  const [selectedOption, setSelectedOption] = useState(null);
  
  function goToNext() {
    if (selectedOption) {
      setAnswer(selectedOption);
    }
    else {
      setAnswer('no');
    }
    setSelectedOption(null);
  }
    return (
    <div className='pt-5'>       
        <div className='flex justify-between items-center gap-x-2 border rounded-full p-3 mb-5'>
          <Progress color='primary' className="w-full" value={currentQuestion / totalQuestions} /> 
          <span className='w-16 text-primary font-medium'>{currentQuestion}/{totalQuestions}</span>
        </div>
        <Card side="lg" className='bg-primary text-primary-content py-3 md:py-16'>
          <Card.Body>
            <Card.Title tag="h2" className='text-xl md:text-2xl'>{question.question}</Card.Title>
          </Card.Body>
        </Card>
        <Form className='gap-4 mt-5 md:mt-7'>
            {
              question.choices.map((e, i) => {
                return (
                    <Form.Label key={i} onClick={() => setSelectedOption(e)}
                    className={`[&>span:text-xl border-2 rounded-lg p-3 md:p-4 ${e === selectedOption ? 'bg-primary bg-opacity-20 border-primary [&>span]:text-primary [&>span]:font-bold' : ''}`} title={e}>
                      <div className='w-6 h-6 bg-white border rounded-full flex justify-center items-center'>
                      {
                        e === selectedOption  && (
                              <span className='w-4 h-4 bg-primary rounded-full'></span>
                          )
                      }
                      </div>
                    </Form.Label>
                  )
                })
              }
        </Form>

        <div className='mt-4 w-full'>
            <button className='btn btn-primary w-full h-14' disabled={!selectedOption} onClick={goToNext}>التالي</button>
        </div>
    </div>
 )
}

export default Question