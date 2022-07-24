import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'

export const Movie = ({ isLoading, Poster, Title, Year }) => {
  return (
    <div className="col-md-2 mb-3">
      <div className="card">
        {isLoading || Poster === 'N/A' ? (
          <div style={{ marginTop: '-4px' }}>
            <Skeleton height="250px" />
          </div>
        ) : (
          <div
            className="card-poster-img"
            style={{ backgroundImage: `url(${Poster})` }}
          ></div>
        )}
      </div>
      <div>
        <>
          <div className="card-title mt-3">
            <h6 className="text-white mb-2">
              {isLoading ? <Skeleton count={1} /> : Title}
            </h6>
            <div className="text-secondary h6">
              {isLoading ? <Skeleton count={1} /> : Year}
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

Movie.propTypes = {
  isLoading: PropTypes.bool,
  Poster: PropTypes.string,
  Title: PropTypes.string,
  Year: PropTypes.string,
}

export default Movie
