import {motion} from 'framer-motion'
import style from './GridSection.module.scss'
import { gridAnimation } from '../../animation/animation'

const GridSection = ({posts}) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible" 
            viewport={{amount: .3, once: true}}
            className={style.works}
        >
            {posts.map((post, i) => 
                <motion.div 
                    variants={gridAnimation}
                    custom={i}
                    key={i} 
                    className={style.works__item}
                >
                    <img className={style.works__photo} src={post.img} alt=""/>
                    <div className={style.works__content}>
                        <div className={style.works__title}>{post.title}</div>
                        <div className={style.works__text}>{post.descr}</div>
                    </div>
                </motion.div>
            )}
        </motion.section>
    )
}

export default GridSection