export function WebFooter() {
	return <footer style={{position: "fixed", height: '12vh', backgroundColor: 'lightslategray', width: '100vw', bottom: 0,	left: 0, padding: "10px"}}>
        <div>Arbritarty Movie Reviews</div>
        <div>Image Credit: Google / IMDB</div>
        <div>Made By: Arin Bryan, Brady Clark, Vipulya Hande</div>
        <div style={{display:"flex", flexDirection:"row"}}>Made With:  <img src="/next.svg" className="footerImg" style={{height:"1em", paddingLeft:"0.5em"}}></img></div>
    </footer>
}

