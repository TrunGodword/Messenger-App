import React from 'react'

const Home = () => {
  return (
    <div className='Home'>
        <div className='Pillars Friends'>
            <div className='List'>
                <img src='../../image/pfp.png'></img>
                <h2 className='Name'>Name here</h2>
            </div>
        </div>
        <div className='Pillars Chat'>
            <form className='MessageBox'>
                <input type='text' placeholder='Message here'></input>
                <button>Send</button>
            </form>
            <div className='Message'>
                <img src='../../image/pfp.png'></img>
                <div className='MessageBody'>
                    <h2 className='Name'>Name here</h2>
                    <h3 className='Text'>Random text here</h3>
                </div>
            </div>
        </div>
        <div className='Pillars Misc'></div>
    </div>
  )
}

export default Home