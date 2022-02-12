 //362baeb6a634fdf27e99b0083e6f6907
    /// http://www.omdbapi.com/?i=${Movie}&apikey=695ddea7
    //695ddea7
    let container = document.getElementById("data");

    async function getMovie(){
      
      let Movie = document.getElementById("Movie").value;
      let res = await fetch(`http://www.omdbapi.com/?t=${Movie}&apikey=695ddea7`);
   
      let data = await res.json()
      console.log('data' , data)
  
      showMovie(data);
  
    }
     
  
    function showMovie(e){
       container.innerHTML= null;
  
       
      let title = document.createElement("h2");
      title.innerText = e.Title;
      title.style.fontWeight= 800;
      title.style.fontFamily="Helvetica";
      title.style.color="#eeeeee"
     
   // Response: "False"
  
      let img = document.createElement("img")
      img.src = e.Poster;
      //img.style.display = inline-block;
      
      //.style.color
  
      let imdb = document.createElement("p");
      imdb.innerHTML= "Imdb :  " + e.imdbRating;
      imdb.style.fontWeight= 600;
      imdb.style.fontFamily="Helvetica";
      imdb.style.color="#eeeeee"
  
      let date = document.createElement("p");
      date.innerHTML = "Released On:  " + e.Released;
      date.style.fontWeight= 600;
      date.style.fontFamily="Helvetica";
      data.style.color="#eeeeee"
  
      let cast = document.createElement("p")
      cast.innerHTML = "Cast :  " + e.Actors;
      cast.style.fontWeight= 600;
      cast.style.fontFamily="Helvetica";
      cast.style.color="#eeeeee"
  
     // temp.innerText = Math.round(weather.main.temp - 273) +"*C";
     /// If the IMDb rating of a searched movie is >8.5, show a recommended tag in front of it.
     if(e.Response=="False")
       {
       let img = document.createElement("img")
      img.src = "https://c.tenor.com/hTqi9Cqu-ewAAAAM/error-404.gif";
      container.append( img  );
  } 
  else if(e.imdbRating> 8.5){
      let rec = document.createElement("h3");
      rec.innerHTML = "Recommended";
      rec.style.fontWeight= 900;
      rec.style.fontFamily="Helvetica";
      rec.style.color="#00ff2a"
  
  
        container.append(title , img ,imdb , rec, date , cast  );
  
  
  }
     else
      container.append(title , img ,imdb , date , cast  );
  
  
    }
  
   
      
  
  
