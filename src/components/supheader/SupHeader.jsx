import style from './SupHeader.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const SupHeader = () => {
    return (
        <div className={style.header}>
            <div className='container'>
                <div className={style.header__logo}><img src={logo} alt="" /> EFIMOFF.VET</div>
                <div className={style.header__nav}>
                    <Link to="/articles" className={style.header__li} >статьи</Link>
                    <Link to="/" className={style.header__li} >главная</Link>
                    <Link to="/about" className={style.header__li} >о нас</Link>
                    <button to="/services" className={style.header__li_btn} >услуги</button>
                    <Link to="/price" className={style.header__li} >цены</Link>
                </div>
            </div>
        </div>
    )
}

export default SupHeader