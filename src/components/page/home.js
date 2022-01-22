import React from 'react'
import Abstrak from '../abstrak'
import Fitur from '../features'
import Header from '../header'
import Metode from '../metode'
import Team from '../team'
import Cards from '../Cards'

function Home(){
    return(
        <>
        <Header/>
        <Fitur/>
        <Abstrak/>
        <Metode/>
        <Cards/>
        <Team/>
        </>
    )
}

export default Home