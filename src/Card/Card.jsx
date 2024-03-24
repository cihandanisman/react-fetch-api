import React, { useEffect, useState } from "react";
import "./Card.scss";

const Card = (props) => {
  // console.log(props);
  const [data, setData] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const fetchFirst100Books = async (page) => {
    const url =
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmZmNGI3ODk0NmFjOGQ5NmVjMDU5NDc3ZTQ1MWYxNSIsInN1YiI6IjYyNTQ0Njg0YWI2ODQ5MDY1NDk5OWQyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUHD5vN21v3NsLoc5LbzG25mYT_MWKPuM99e3VrwHjY",
      },
    };
    const response = await fetch(url, options);
    const datam = await response.json();
    setData(datam.results)
    // console.log(datam);
    
  };
  

  useEffect(() => {
    fetchFirst100Books(1)
    // fetchFirst100Books(2)
  }, []);

  // const button = document.querySelector(".btn-js")
  // button.addEventListener("click", ())
  const handleDelete = (item) => {
    const newData = data.filter((product) => product.id!==item.id)
    setData(newData)


  }
  return (
    <div className="card-body-wrapper">
      {data?.length > 0 && data?.filter((a) => (
        (a.original_title.toLowerCase().includes(props.title.toLowerCase())))
        
      ).map((item, i) => (
        <div className="card-info" key={i}>
          <button className="btn-js" onClick={(()=> handleDelete(item))}>X</button>
          <div className="card-body">
            <div className="title-name">{item.original_title}</div>
            <img
              src={`${imageUrl}${item.poster_path}`}
              alt=""
              width={"70%"}
            ></img>
            <div className="title-info">{item.overview.substring(0,50)}...</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
