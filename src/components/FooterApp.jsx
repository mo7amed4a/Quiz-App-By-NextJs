import { Footer } from 'react-daisyui'
import { getProfileData } from '@/axios';
import { useEffect, useState } from 'react';

function FooterApp(props) {
  const [data, setData] = useState({})

 useEffect(async () => {
  try { 
    let profileData =  await getProfileData();
    setData(profileData);
  } catch (error) {
    console.log(error);
  }
 }, [])
 
  return (
    <div dir="ltr">
        <Footer className={`flex justify-center p-5 ${props.className}`} >
            <div className='flex flex-col items-center'>
              <p>Designed by <a className='link-hover' href="https://www.facebook.com/m7md0a" target="_blank" rel="noopener noreferrer">{data.name}</a></p>
              <div className='flex space-x-4'>
                <span className='flex space-x-1 items-center'>
                  <svg viewBox="0 0 448 512" className='w-4 h-4 fill-current' xmlns="http://www.w3.org/2000/svg"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg> 
                  <span>{data.public_repos}</span>
                </span>
                <span className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-current" viewBox="0 0 512 512"><title>Follower</title><path d="M108.56 342.78a60.34 60.34 0 1060.56 60.44 60.63 60.63 0 00-60.56-60.44z"/><path d="M48 186.67v86.55c52 0 101.94 15.39 138.67 52.11s52 86.56 52 138.67h86.66c0-151.56-125.66-277.33-277.33-277.33z"/><path d="M48 48v86.56c185.25 0 329.22 144.08 329.22 329.44H464C464 234.66 277.67 48 48 48z"/></svg>
                  <span>{data.followers}</span>
                </span>
              </div>
            </div>
        </Footer>
    </div>
  )
}
export default FooterApp;

// export async function getStaticProps() {
//   console.log(`this is in footer server`);
//   try {
//     let profileData =  await getProfileData();
//     return {
//       props:{
//         profileData
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     return {props : {
//       profileData : {}
//     }}
//   }
// }
