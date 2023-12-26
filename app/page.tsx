import styles from './styles.module.css'
import Positions from '@/components/Positionsdata'
import Image from 'next/image'
import share from '@/public/shareicon.png'
import footer2 from '@/public/footer2.png'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export default function Home() {

  const access = cookies().get('access')
    
  if (access==undefined){
    redirect('/login')
  }
  
  return (
    <div>
      <Positions/>
      <div className={styles.footer}><Image layout='fill' objectFit='contain' src={footer2} alt=''/></div>
      
    </div>
  )
}
