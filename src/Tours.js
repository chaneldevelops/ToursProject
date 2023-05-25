import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => { //added removeTours from App.js prop
  return <section>
    <div className='title'>
      <h2>International Tours</h2>
      <div className='underline'></div>   {/* underline style */}
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/> /* Pull for all the info 
          from the object/personal tours API */
        }
        
        )}
      </div>
    </div>
  </section>;
};

export default Tours;
