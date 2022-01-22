import React from 'react'
import logo from '../images/UISI.png'
import logoif from '../images/if.png'

function Navigation(){
    return(
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
            <div className='navbar-header'>
            <button
                type='button'
                className='navbar-toggle collapsed'
                data-toggle='collapse'
                data-target='#bs-example-navbar-collapse-1'
            >
                {' '}
                <span className='sr-only'>Toggle navigation</span>{' '}
                <span className='icon-bar'></span>{' '}
                <span className='icon-bar'></span>{' '}
                <span className='icon-bar'></span>{' '}
            </button>
            <img src={logo} width="50" height="50" alt="logo"/>
            <span style={{padding: 5}}/>
            <img src={logoif} width="50" height="50" alt="logo"/>
            </div>
            <a style={{paddingLeft:25}} className='navbar-brand page-scroll' href='/'>Peramalan Harga Beras</a>
            <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
            >
            <ul className='nav navbar-nav navbar-right'>
                <li>
                <a href='/fitur' className='page-scroll'>
                    Fitur
                </a>
                </li>
                <li>
                <a href='/abstrak' className='page-scroll'>
                    Abstrak
                </a>
                </li>
                <li>
                <a href='/metode' className='page-scroll'>
                    Metode
                </a>
                </li>
                <li>
                <a href="/peramalan" className='page-scroll'>
                    Peramalan
                </a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navigation