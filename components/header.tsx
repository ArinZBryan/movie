export function WebHeader() {
	return 	<div style = {{height: '18vh', backgroundColor: 'lightslategray', width: '100vw', position: 'absolute', top: 0, left: 0, fontSize: 'xx-large'}}>
		<h1 style = {{textAlign: 'right', paddingRight: '1rem', paddingTop: '1rem', paddingBottom: '2rem'}}>
			<a href="/">Movie Reviews</a>
		</h1>
		<div style = {{display: 'flex',	flexDirection: 'row', justifyContent: 'space-around'}}> 
			<a href = "/movies/mov1"><button>See All Movies</button></a>
			<a href = "/movies/mov1"><button>See All Actors</button></a>
		</div>
	</div>
  }
  