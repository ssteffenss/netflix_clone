import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import * as ApiTmbService from '../../services/apiTmdb'
import MovieInterface from "../../models/interfaces/Movie";
import VideoFrame from "../../components/atoms/VideoFrame";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieInterface>()
  const [videoKey, setVideoKey] = useState<string>()

  const imgUrl = 'https://image.tmdb.org/t/p/w300'

  useEffect(() => {
    if (!id || movie) return
    ApiTmbService.getMovieDetails(+id)
      .then((response) => {
        setMovie(response)

        const video = response.videos && response.videos.results && response.videos.results[0]
        video && setVideoKey(video.key)
      })
  }, [id, movie])

  return <>

    <h1>{movie && movie.title}</h1>
    <h2>{movie && movie.overview}</h2>
    {movie && movie.backdrop_path && (
      <img src={imgUrl + movie.backdrop_path} alt="" />
    )}
    <br />
    {videoKey && <VideoFrame width="550" height="300" videoKey={videoKey + ''} />}
  </>
}

export default Movie