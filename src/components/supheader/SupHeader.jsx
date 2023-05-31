import style from './SupHeader.module.scss'

const SupHeader = () => {
    return (
        <div className={style.header}>
            <div className='container'>
                <div className={style.header__logo}>EFIMOFF.VET</div>
                <div className={style.header__nav}>
                    <a className={style.header__li} href="#">статьи</a>
                    <a className={style.header__li} href="#">о нас</a>
                    <a className={style.header__li} href="#">услуги</a>
                    <a className={style.header__li} href="#">цены</a>
                </div>
            </div>
        </div>
    )
}

export default SupHeader