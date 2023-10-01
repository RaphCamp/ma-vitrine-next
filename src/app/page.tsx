import Image from 'next/image'
import musicOn from '../assets/images/musicOn.png'
import codewars from '../assets/images/codewars.svg'
import Intro from '@/components/intro/intro'
import Navbar from '@/components/navbar/navbar'
import Panels from '@/components/panels/panels'

export default function PageHome() {
  return (
    <main>
      <Navbar/>
      <Panels/>
      <Intro/>
  </main>
  )
}
