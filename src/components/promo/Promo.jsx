import style from './Promo.module.scss'

const Promo = () => {
    return (
        <div className={style.promo}>
            <div className="container">
                <div className={style.promo__inner}>
                    <h1 className={style.promo__title}>
                        EFIMOFF VET Clinik
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Promo