import Image from 'next/image'
import './styles.css'
import { WebHeader } from '@/components/header';


export default function Home() {

  const featuredMovieTitle = "Title";

  return (
    <main>
      <title>Movie Reviews</title>
      <WebHeader/>
      <div className = "body">
        <div className = "featuredPanel">
          <img src='/placeholder.png' className='featuredPicture'></img>
          <div className = "featuredTitle"> {featuredMovieTitle} </div>
        </div>
        <div className= "recentReviews">
          
        </div>
      </div>
      <footer>
        Footer
      </footer>
    </main>
  )
}
