import React from 'react'

function Team(){
    const styles={marginLeft:"38%"}
    return(
    <div id='team' className='text-center'>
        <div className='container'>
            <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>Meet the Team</h2>  
            </div>
            <div id='row'>
                <div style={styles} className='col-md-3 col-sm-6 team'>
                    <div className='thumbnail' >
                        {' '}
                        <img src='img/team/yogi.jpg' alt='...' className='team-img' />
                        <div className='caption'>
                        <h4>Yogi Adam Firdaus</h4>
                        <p>Informatika</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    )
}

export default Team