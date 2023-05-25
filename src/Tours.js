import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
  return <section>
    <div className='title'>
      <h2>International Tours</h2>
      <div className='underline'></div>   {/* underline style */}
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}/> /* Pull for all the info 
          from the object/personal tours API */
        }
        
        )}
      </div>
    </div>
  </section>;
};

export default Tours;
