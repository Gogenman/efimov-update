import style from './Footer.module.scss'

const Footer = ({footer}) => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <div>
                    <h4 className={style.footer__title}>Услуги</h4>
                    <ul className={style.footer__ul}>
                        {footer.services.map(item => 
                            <li className={style.footer__li}>{item}</li>
                        )}
                    </ul>
                </div>

                <div>
                    <h4 className={style.footer__title}>Контакты</h4>
                    <ul className={style.footer__ul}>
                        {footer.adress.map(item => 
                            (item[0] !== '+') 
                                ? <h5 className={style.footer__h5}>{item}</h5>
                                : <li className={style.footer__li}>{item}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h4 className={style.footer__title}>Клиника</h4>
                    <ul className={style.footer__ul}>
                        {footer.navbar.map(item => 
                            <li className={style.footer__li}>
                                <a href="#">{item}</a>    
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer