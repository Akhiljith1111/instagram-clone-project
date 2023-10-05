import React from 'react'
import {Link} from '@mui/material'
import "./Sugessfooter.css"

function Sugessfooter() {
  return (
    <div className='links'>
        <div className='links-footer'>
        <Link href="#" underline='hover' style={{color: "white", fontSize:"13px"}}>About</Link>
        </div>

        <div className='links-footer'>
        <Link href="https://help.instagram.com/" target="_blank" rel="noopener noreferrer" underline='hover' style={{color: "white", fontSize:"13px"}}>Help</Link>
        </div>

        <div className='links-footer'> 
        <Link href="#" underline='hover' style={{color: "white", fontSize:"13px"}}>Press</Link>
        </div>

        <div className='links-footer'>
        <Link href="#" underline='hover' style={{color: "white", fontSize:"13px"}}>API</Link>
        </div>

        <div className='links-footer'>
        <Link href="#" underline='hover' style={{color: "white", fontSize:"13px"}}>Jobs</Link>
        </div>

        <div className='links-footer'>
        <Link href="https://help.instagram.com/581066165581870/" target="_blank" underline='hover' style={{color: "white", fontSize:"13px"}}>Terms</Link>
        </div>
    </div>
  )
}

export default Sugessfooter