import './App.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'
import Navbar from './components/Navbar'
function App() {
  const api = process.env.REACT_APP_URL
  const initMovie = 'batman'
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [movies, setMovies] = useState([])
  const [message, setMessage] = useState('')
  const getMoviesData = async (title) => {
    setIsLoading(true)
    try {
      const response = await fetch(`${api}&s=${title}`)
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json()
      if (!data.Search) {
        setMessage(data.Error)
        setMovies([])
      } else {
        setMovies(data?.Search || [])
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
      console.log(error)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getMoviesData(title)
    }
  }
  useEffect(() => {
    getMoviesData(initMovie)
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5">
        <div className="row">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Movie Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                getMoviesData(title)
              }}
            >
              search
            </button>
          </div>
        </div>
        <div className="row">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            {movies?.length > 0 &&
              movies.map((movie) => (
                <Movie
                  key={movie.imdbID}
                  isLoading={isLoading}
                  Poster={movie.Poster}
                  Title={movie.Title}
                  Year={movie.Year}
                ></Movie>
              ))}
            <>
              {movies?.length === 0 && (
                <div className="text-white">{message}</div>
              )}
            </>
          </SkeletonTheme>
        </div>
      </div>
    </>
  )
}

export default App
