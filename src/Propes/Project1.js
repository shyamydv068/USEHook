import "./Project1.css";
import Header from "./Header";
import Movie from "./Movie";
import Movies from "./Movies.json";

const Project1 = () => {
  return (
    <>
    <div className="header" >
      <Header/>
      </div>
      <div className="main">
        {
          
        Movies.map((element,index) => {
          return(
          <Movie
           key = {index}
          title = {element.Title}
          year = {element.Year}
          img = {element.Poster}
          />
        )
        })
        }

        
      </div>
    </>
    
  )
}

export default Project1
