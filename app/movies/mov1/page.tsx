import Image from 'next/image'
import './styles.css'
import { WebHeader } from '@/components/header';
  

function MovieReview({ title, text } : { title: string, text: string }) : JSX.Element {
	return <div className = "review">
		<h1>{title}</h1>
		<p>{text}</p>
	</div>
}

function ReviewContainer({reviews} : {reviews: string[][]}) {
	
}

export default function Home() {


  	const featuredMovieTitle = "Title";
	const reviews = [["Title1", "Decription1"],["Title2", "Decription2"],["Title3", "Decription3"]]
	const statistics = [["Rating", "5/5"],["Rating", "5/5"],["Rating", "5/5"]]

	const review = [];
	for (var i = 0; i < reviews.length; i++) {
		review.push(<MovieReview title ={reviews[i][0]} text={reviews[i][1]}/>)
	}

	const stat = [];
	for (var i = 0; i < statistics.length; i++) {
		stat.push(
		<div className = "stats">
			<h1>Rating</h1>
		</div>)
	}

  	return (
		<main>
			<title>Movie Reviews</title>
			<WebHeader/>
			<div className = "body" style = {{marginTop: '13vh'}}>
				<div style = {{display: 'flex', flexDirection: 'row'}}>
					<div className='reviewContainer'>
						{review}
					</div>
					<div className = "statsContainer">
						<div className='TitlePic'>
							<img src='/movie_poster.jpg' className='featuredPicture' style = {{width:'100%'}}></img>
						</div>
						{stat}
					</div>
				</div>
			</div>
			<footer>
			Footer
			</footer>
		</main>
  	)
}
