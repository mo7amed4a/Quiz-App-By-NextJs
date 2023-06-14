import NavBar from "@/components/NavBar.jsx"
import FooterApp from "@/components/FooterApp.jsx"
export default function dl({children}) {
  return (
     <div dir="rtl">
      <NavBar className='h-[72px]' />
        <main className="min-h-[calc(100vh-154.9px)] bg-base-200 bg-opacity-50 pb-5">
           {children}
        </main>
        <FooterApp className='h-[82.09px]' />
     </div>
  )
}