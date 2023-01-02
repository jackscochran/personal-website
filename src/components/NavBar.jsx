import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [isOpaque, setIsOpaque] = useState(true)

    const style = {
        // nav bar with in line stlying
        navBar: {
            position: 'fixed',
            backgroundColor: 'black',
            width: '100%',
            opacity: isOpaque ? 0.7 : 1,
            transition: 'opacity 0.7s',
            zIndex: 10,
            padding: '10px 0'
        },
        logo: {
            width: '30px',
        }
    }

    return (
        <>
            <nav style={style.navBar} onMouseOver={() => setIsOpaque(false)} onMouseLeave={() => setIsOpaque(true)}>
                <div className='row align-items-left'>
                    <div className='col-sm-2 offset-sm-0'>
                        <a href='#top'>
                            <img src="images/icons/favicon-32x32.png" style={style.logo} alt="Site Logo"/>
                        </a>
                    
                    </div>
                    <div className='col-sm-3'>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar