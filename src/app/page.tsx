import Image from 'next/image'
import musicOn from '../assets/images/musicOn.png'
import codewars from '../assets/images/codewars.svg'
import Intro from '@/components/intro/intro'
import Navbar from '@/components/navbar/navbar'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Intro/>
  </main>
  )
}
