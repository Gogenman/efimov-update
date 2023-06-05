import style from './AboutPage.module.scss'

const AboutPage = () => {
    return (
        <div className={style.about}>
                <div className={style.about__inner}>

                    <div className={style.about__img}>
                        <img src="https://images.unsplash.com/photo-1657672733246-9c942ace6195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHZldGVyaW5hcmlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1160&q=60" alt="" />
                        <div className={style.about__img_mask}></div>
                    </div>
                    <div className={style.about__title_wrapper}>
                        <p className={style.about__text}>
                            Доктор Ефимов - один из самых известных практикующих врачей Санкт-Петербурга. Более 14 лет преподавал в Ветеринарной академии, кандидат ветеринарных наук, с 1993 г. возглавлял ряд ветеринарных клиник.

                            Александр Николаевич - автор многочисленных научных статей, некоторые из них можно прочитать на нашем сайте.

                            Как хирург особый авторитет заслужил в области ортопедии животных. Многие петербургские клиники направляют животных на консультацию и лечение к доктору Ефимову.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default AboutPage