import style from './Descr.module.scss'


const Descr = () => {
    return (
        <section className={style.descr}>
            <div className={style.descr__img_block}>
                <img src="https://images.unsplash.com/photo-1615038239758-4ea1495fd580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=797&q=80" alt="" />
                <div className={style.descr__img_mask}></div>
            </div>
            <div className={style.descr__text}>
                <p>
                    Наша ветеринарная клиника - это место, где мы бережно относимся к вашим питомцам и предоставляем высококачественную медицинскую помощь. Мы предлагаем широкий спектр услуг, включая профилактические обследования, лечение болезней и травм, а также операции любой сложности.
                </p>
            </div>

        </section>
    )
}

export default Descr