import {motion} from 'framer-motion'
import style from './Promo.module.scss'
import { textAnimation } from '../../animation/animation'
import { imgAnimation } from '../../animation/animation'

const Promo = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className={style.promo}
        >
                <div className={style.promo__inner}>
                    <div className={style.promo__title_wrapper}>
                        <motion.h1 
                            custom={1}
                            variants={textAnimation.left} 
                            className={style.promo__title}>
                                Вет клиника доктора <motion.span 
                                    custom={3}
                                    variants={textAnimation.left}>Ефимова А.Н
                                </motion.span> 
                        </motion.h1>
                    </div>
                    
                    <motion.div 
                        variants={imgAnimation.right} 
                        custom={5} 
                        className={style.promo__img}
                    >
                        <img src="https://images.unsplash.com/photo-1568383293350-156a59eb6491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <div className={style.promo__img_mask}></div>
                    </motion.div>
                </div>
        </motion.section>
    )
}

export default Promo