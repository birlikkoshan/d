import logo from './Main/img/logo.png'
import { Link } from 'react-router-dom'
export const ErrPage = () => {
    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column'}}>
            <img  style={{maxWidth: 375}} src={logo} alt="" />
            <h1>Error 404: Page Not Found</h1>
            <Link style={{width: 300, background: 'black', padding: 10, borderRadius: 8, textAlign:'center', color: 'white', textDecoration: 'none' }} to='/'>Return home</Link>
        </div>
    )
}

