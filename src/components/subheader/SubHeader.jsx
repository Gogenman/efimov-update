import style from './SubHeader.module.scss'

const SubHeader = () => {
    return (
        <div className={style.subheader}>
            <div className="container">
                <div className={style.subheader__inner}>
                    <div className={style.subheader__item}>
                        <p>ПН - ПТ 10:00 - 20:00 | СБ - ВС 10:00 - 18:00</p>
                    </div>

                    <div className={style.subheader__item}>
                        <p>+7(812) 931-21-95  |  +7(812) 495-65-69</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SubHeader