import React from 'react';
import './Head.css'

class Head extends React.Component{
  render(){
    return (
      <>
          <section className='head'>
              <div className="container c_flex">
                  <div className='CText'>
                      <label>Insert text here</label>
                  </div>
              </div>
          </section>
      </>
    )
  }
}

export default Head;
