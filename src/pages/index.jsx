import ContainerApp from '@/components/ContainerApp';
import PaginationProvider from '@/components/PaginationProvider';
import { Button, Card } from 'react-daisyui';

function index() {
 
  return (
    <div>
      <ContainerApp>
          <Card imageFull className='bg-primary text-primary-content'>
          <Card.Image
            src="img/background.jpg"
            alt=""
          />
              <Card.Body className='flex justify-center items-center'>
                <div className='w-full flex flex-col items-center space-y-5'>
                  <Card.Title tag="h2" className='text-3xl text-center'>هيا ابدأ الان  !</Card.Title>
                  <p>يمكنك الضغط علي اي اسئلة للبدء فيها</p>
                </div>
              </Card.Body>
        </Card>
      </ContainerApp>
      <ContainerApp className='mt-5 flex justify-center relative z-30'>
          <PaginationProvider />
      </ContainerApp>
    </div>
  )
}

export default index;