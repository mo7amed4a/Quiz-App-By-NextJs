import React from 'react'
import { Card } from 'react-daisyui'

function QuestionResulteEnd({question, number}) {
    const status = question.answer === question.answerUser;
  return (
    <Card className={`bg-white`}>
            <Card.Body className="px-4 md:px-6 py-4 md:py-6">
                <Card.Title tag="h2" className='flex justify-between'>
                    <span>السؤال رقم {number + 1}</span>
                    <span className={`${status ? 'bg-green-500' : 'bg-red-500'} w-3 h-3 rounded-full -mt-5`}></span>
                </Card.Title>
                <p className='text-base md:text-lg'>{question.question}</p>
                <Card.Actions className='flex justify-between w-full mt-4
                text-xs md:text-base'>
                    {
                        status ? (
                            <>
                                <span className='bg-green-500 text-primary-content px-4 py-2 rounded-full'>
                                إجابتك صحيحة : <span>{question.answer}</span>
                                </span>
                            </>
                        ) : (
                            (
                            <>
                                <span className='bg-red-500 text-primary-content px-4 py-2 rounded-full'>
                                إجابتك : <span className=''>{question.answerUser}</span>
                                </span>
                                <span className='bg-green-500 text-primary-content px-4 py-2 rounded-full'>
                                    الاجابة الصحيحة : <span>{question.answer}</span>
                                </span>
                            </>
                            )
                        )
                    }
                </Card.Actions>
            </Card.Body>
        </Card>
  )
}

export default QuestionResulteEnd;