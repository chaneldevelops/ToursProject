import React, { useState } from 'react';

const Tour = ({id,image, info, price, name, removeTour}) => {
  const [readMore, setReadMore] = useState(false) //this toggles it off by default
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>{readMore ? info:`${info.substring(0,200)}`}...
        <button onClick={() => setReadMore(!readMore)}> {/* setReadMore will pass
        in the opposite of readMore */}
          {readMore?'show less':'read more'} {/* toggle for show buttons */}
          </button> 
      </p> {/* controls character number 
      to show by default if its not true (which is default) 
      show 200 if it is show readMore */}
      <button className='delete-btn' onClick={() => 
      removeTour(id)}>Not interested</button> {/* invoke removeTour and pass the id
      so you'll know which tour was removed */}
    </footer>
  </article>;
};

export default Tour;
