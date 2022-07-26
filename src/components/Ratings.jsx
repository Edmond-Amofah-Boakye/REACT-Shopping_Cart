import React, { useContext } from 'react'
import { AppContext } from '../store/Context'

const Ratings = () => {

  const { filterDispatch } = useContext(AppContext)
  return (
    <>
        <div className="ratingwrapper">
            <div className="rating"><p>Rating: <span>1 2 3 4</span></p></div>
        </div>
        <div className="rating-btn">
            <button onClick={()=>filterDispatch({type: 'CLEAR_FILTERS'})}>Clear Filters</button>
        </div>
    </>
  )
}

export default Ratings