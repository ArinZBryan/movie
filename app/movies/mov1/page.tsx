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
	return <div className = "stats">{title} : {text}</div>
}

function ActorPanelElement({name, role, roleImage} : {name: string, role: string, roleImage: string}) {
	return <div style={{width:"25%", padding: "10px", display: "flex", flexDirection:"column", alignItems:"center"}}>
		<img src={roleImage} className='actorPicture' style = {{width:"50%"}}></img>
		<h1 style = {{fontSize:"large", textAlign:'center'}}>{name} as {role}</h1>
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
	const statistics = [
		["Metacritic", "4/5"],
		["USA Today", "4/5"],
		["Jami Bernard", "5/5"],
		["Allison Rose", "4.5/5"],
		["Jeff Black", "5/5"],
		["Florida Times-Union", "3.5/5"],
		["Micheal Sragow, 3.5/5"]
	]
	const actors = [
		["Eddy Murphy", "Donkey", "/actors/EMurphy.jpg"],
		["Mike Myers", "Shrek / Opening Narration", "/actors/MMyers.jpg"],
		["Cameron Diaz", "Princess Fiona", "/actors/CDiaz.jpg"],
		["John Lithgow", "Lord Farquaad", "/actors/JLithgow.jpg"],
		["Conrad Vernon", "Gingerbread Man", "/actors/CVernon.jpg"],
		["Vincent Cassel", "Monsieur Hood", "/actors/VCassel.jpg"],
		["Peter Dennis", "Ogre Hunter", "/actors/PDennis.jpg"],
		["Clive Pearse", "Ogre Hunter", "/actors/CPearse.jpg"],
		["Jim Cummings", "Captain of Guards", "/actors/JCummings.jpg"],
		["Bobby Block", "Baby Bear", "/actors/NoImage.jpg"],
		["Chris Miller", "Geppetto / Magic Mirror", "/actors/CMiller.jpg"],
		["Cody Cameron", "Pinocchio / Three Pigs", "/actors/CCameron.jpg"],
		["Kathleen Freeman", "Old Woman", "/actors/KFreeman.jpg"],
		["Michael Galasso", "Peter Pan", "/actors/NoImage.jpg"],
		["Christoper Knights", "Blind Mouse", "/actors/NoImage.jpg"],
		["Simon J. Smith", "Blind Mouse", "/actors/NoImage.jpg"],
		["Jacquie Barnbrook", "Blind Mouse", "/actors/JBarnbrook.jpg"],
		["Guillaume Aretos", "Merry Man", "/actors/NoImage.jpg"],
		["John Bisom", "Merry Man", "/actors/NoImage.jpg"],
		["Matthew Gonder", "Merry Man", "/actors/NoImage.jpg"],
		["Calvin Remsberg", "Merry Man", "/actors/NoImage.jpg"],
		["Jean-Paul Vignon", "Merry Man", "/actors/JPVignon.jpg"],
		["Val Bettin", "Monsieur Hood", "/actors/VBettin.jpg"],
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
