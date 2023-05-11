import Image from 'next/image'
import './styles.css'
import { WebHeader } from '@/components/header';
import { WebFooter } from '@/components/footer';


export default function Home() {

  const featuredMovieTitle = "Shrek";

  return (
    <main>
      <title>Movie Reviews</title>
      <WebHeader/>
      <div className = "body">
        <img src='/banner.jpg' className='featuredPicture'></img>
        <div className = "featuredTitle"> {featuredMovieTitle} </div>
        <div className= "recentReviews">
        </div>
      </div>
      <WebFooter/>
    </main>
  )
}
