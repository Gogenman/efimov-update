import style from './Promo.module.scss'

const Promo = ({title}) => {
    return (
        <div className={style.promo}>

                <div className={style.promo__inner}>
                    <div className={style.promo__title_wrapper}>
                        <h1 className={style.promo__title}>Вет клиника доктора <span>Ефимова А.Н</span> </h1>
                    </div>
                    
                    <div className={style.promo__img}>
                        <img src="https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className={style.promo__img_mask}></div>
                    </div>
                </div>


            
        </div>
    )
}

export default Promo