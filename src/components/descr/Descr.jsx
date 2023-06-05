import { imgAnimation, textAnimation } from '../../animation/animation'
import style from './Descr.module.scss'
import {motion} from 'framer-motion'

const Descr = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.5, once: true}}
            className={style.descr}
        >
            <motion.div
                variants={imgAnimation.left}
                className={style.descr__img_block}
                viewport={{amount: 0.5, ones: true}}
                custom={1}
            >
                <img src="https://images.unsplash.com/photo-1615038239758-4ea1495fd580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=797&q=80" alt="" />
                <div className={style.descr__img_mask}></div>
            </motion.div>
            <motion.div
                variants={textAnimation.right}
                custom={2}
                className={style.descr__text}>
                <p>
                    Наша ветеринарная клиника - это место, где мы бережно относимся к вашим питомцам и предоставляем высококачественную медицинскую помощь. Мы предлагаем широкий спектр услуг, включая профилактические обследования, лечение болезней и травм, а также операции любой сложности.
                </p>
            </motion.div>

        </motion.section>
    )
}

export default Descr