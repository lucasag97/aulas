import React from 'react'
import img from '../assets/img/banner_site0.png'
import './styles/Home.sass'

export default class Home extends React.Component {
    render () {
      return (
            <div className="home-container">
                <div className="home-content">

                    <img src={img} alt=''/>

                </div>
            </div>
        )
    }
}