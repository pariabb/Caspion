import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="notfound container-fluid">
        <Link to='/' className='d-flex justify-content-center align-items-center'>

            <img className='' src="https://tepeseo.com/wp-content/uploads/2019/05/404notfound.png" alt="" />
        </Link>
        </div>
    )
}

export default NotFoundPage