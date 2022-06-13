import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
function Notification() {
  return (
    <>
    <Navbar />
    <main className='main'>
        <div className='container text-center border my-5'>
            <FontAwesomeIcon icon={faCircleCheck} className="fs-1 my-3"/>
            <h1 className="my-3">Thank you</h1>
            <p className="my-3">Thank you for buying. Please click on download to get the bill and give it to the deliverer</p>
            <button className='my-3 btn btn-dark'><FontAwesomeIcon icon={faDownload} /> Download</button>
        </div>
    </main>
    <Footer />
    </>
  )
}

export default Notification