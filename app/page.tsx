import Image from 'next/image'
import './styles.css'

export default function Home() {

  const featuredMovieTitle = "Title";

  return (
    <main>
      <title>Movie Reviews</title>
      <div className="header">
        <h1 id = "headername">Movie Reviews</h1>
        <div className='buttonarray'> 
          <a href = "/movies/mov1"><button>See All Movies</button></a>
          <a href = "/movies/mov1"><button>See All Actors</button></a>
        </div>
      </div>
      <div className = "body">
        <div className = "featuredPanel">
          <img src='/placeholder.png' className='featuredPicture'></img>
          <div className = "featuredTitle"> {featuredMovieTitle} </div>
        </div>
      </div>
      <footer>
        Footer
      </footer>
    </main>
  )
}
