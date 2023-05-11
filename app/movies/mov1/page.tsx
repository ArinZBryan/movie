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

function StatisticElement({title, text} : {title: string, text: string}){
	return <div className = "stats">
		<h1>{title} : {text}</h1>
	</div>
}

function ActorPanelElement({name, role, roleImage} : {name: string, role: string, roleImage: string}) {
	return <div style={{width:"200px", display: "flex", flexDirection:"column", alignItems:"center"}}>
		<img src={roleImage} className='actorPicture' style = {{width:"50%"}}></img>
		<h1 style = {{fontSize:"x-large", textAlign:'center'}}>{name} as {role}</h1>
	</div>
}

export default function Home() {


  	const featuredMovieTitle = "Title";
	const reviews = [
		["Rotten Tomatoes", "Shrek is unashamed of its modern flourishes. At the same time, especially for young viewers, it works very well as a straightforward and quite funny fable. The animation, coordinated by directors Andrew Adamson and Vicky Jenson, is impressive. -Kathi Maio"],
		["Andrew O'Hagan (Daily Telegraph UK)", "Here is a movie of the times, funny, enjoyable, perfect-looking, and altogether original in a way that might cause us to look again at the meaning of the word."],
		["Chris Tookey (Daily Mail)", "Adults will find plenty to laugh at. Children will love it"]
]
	const statistics = [["Rating", "5/5"],["Rating", "5/5"],["Rating", "5/5"]]
	const actors = [
		["Eddy Murphy", "Donkey", "/actor-EMurphy.jpg"],
		["Mike Myers", "Shrek / Opening Narration", "/actor-MMyers.jpg"],
		["Cameron Diaz", "Princess Fiona", "/actor-CDiaz.jpg"],
		["John Lithgow", "Lord Farquaad", "/actor-JLithgow.jpg"],
		["Conrad Vernon", "Gingerbread Man", "/actor-CVernon.jpg"],
		["Conrad Vernon", "Gingerbread Man", "/actor-CVernon.jpg"],
		["Conrad Vernon", "Gingerbread Man", "/actor-CVernon.jpg"],
		["Conrad Vernon", "Gingerbread Man", "/actor-CVernon.jpg"],
		["Conrad Vernon", "Gingerbread Man", "/actor-CVernon.jpg"],
	]

	const review = [];
	for (var i = 0; i < reviews.length; i++) {
		review.push(<MovieReviewElement title ={reviews[i][0]} text={reviews[i][1]}/>)
	}

	const stat = [];
	for (var i = 0; i < statistics.length; i++) {
		stat.push(<StatisticElement title ={statistics[i][0]} text={statistics[i][1]}/>)
	}

	const actor = [];
	for (var i = 0; i < actors.length; i++) {
		actor.push(<ActorPanelElement name = {actors[i][0]} role = {actors[i][1]} roleImage={actors[i][2]}/>)
	}

  	return (
		<main>
			<title>Movie Reviews</title>
			<WebHeader/>
			<div className = "body" style = {{paddingTop: '18vh', paddingBottom:'13vh'}}>
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
				<div className = "actorsContainer">
					{actor}
				</div>
			</div>
			<WebFooter/>
		</main>
  	)
}
