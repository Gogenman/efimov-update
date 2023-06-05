import style from './Footer.module.scss'
import { useState } from 'react'

const Footer = () => {

    const [footer, setFooter] = useState({
        services: [
          'диагностика',
          'хирургия',
          'ортопедия',
          'терапия',
          'исследования',
          'дерматология'
        ],
        adress: [
          'ул. Циолковского, 10-А',
          '+7(812) 931-21-95',
          '+7(812) 495-65-69',
          'Ленинский пр., 84, корп. 2',
          '+7(812) 952-42-69',
          '+7(921) 952-42-69'
        ],
        navbar: [
          'статьи',
          'о нас',
          'услуги',
          'цены',
        ]
      })


    return (
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <div>
                    <h4 className={style.footer__title}>Услуги</h4>
                    <ul className={style.footer__ul}>
                        {footer.services.map((item, i) => 
                            <li key={i} className={style.footer__li}>{item}</li>
                        )}
                    </ul>
                </div>

                <div>
                    <h4 className={style.footer__title}>Контакты</h4>
                    <ul className={style.footer__ul}>
                        {footer.adress.map((item, i) => 
                            (item[0] !== '+') 
                                ? <h5 key={i} className={style.footer__h5}>{item}</h5>
                                : <li key={i} className={style.footer__li}>{item}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h4 className={style.footer__title}>Клиника</h4>
                    <ul className={style.footer__ul}>
                        {footer.navbar.map((item, i) => 
                            <li key={i} className={style.footer__li}>
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