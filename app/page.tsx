import Image from 'next/image'
import './styles.css'
import { WebHeader } from '@/components/header';
import { WebFooter } from '@/components/footer';

function MovieReviewElement({ title, text } : { title: string, text: string }) : JSX.Element {
	return <div className = "review">
		<h1 style = {{fontSize:"x-large"}}>{title}</h1>
		<p style = {{fontSize:"large"}}>{text}</p>
	</div>
}

export default function Home() {

  const featuredMovieTitle = "Shrek";
  const reviews = [
		["Rotten Tomatoes", "Shrek is unashamed of its modern flourishes. At the same time, especially for young viewers, it works very well as a straightforward and quite funny fable. The animation, coordinated by directors Andrew Adamson and Vicky Jenson, is impressive. -Kathi Maio"],
		["Andrew O'Hagan (Daily Telegraph UK)", "Here is a movie of the times, funny, enjoyable, perfect-looking, and altogether original in a way that might cause us to look again at the meaning of the word."],
		["Chris Tookey (Daily Mail)", "Adults will find plenty to laugh at. Children will love it"],
		["Daily News", "An adorable, infectious work of true sophistication"],
		["Chicago Sun Times", "This is not your average family cartoon. Shrek is jolly and wicked, filled with sly in-jokes and yet somehow possessing a heart"]
	]

  const review = [];
	for (var i = 0; i < reviews.length; i++) {
		review.push(<MovieReviewElement title ={reviews[i][0]} text={reviews[i][1]}/>)
	}

  return (
    <main>
      <title>Movie Reviews</title>
      <WebHeader/>
      <div className = "body">
        <img src='/banner.jpg' className='featuredPicture'></img>
        <div className = "featuredTitle"> {featuredMovieTitle} </div>
        <div className= "recentReviews">
          {review}
        </div>
      </div>
      <WebFooter/>
    </main>
  )
}
