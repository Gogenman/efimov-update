import style from './GridSection.module.scss'

const GridSection = ({posts}) => {
    return (
        <div className={style.works}>
            {posts.map(post => 
                <div className={style.works__item}>
                    <img className={style.works__photo} src={post.img} alt=""/>
                    <div className={style.works__content}>
                        <div className={style.works__title}>{post.title}</div>
                        <div className={style.works__text}>{post.descr}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GridSection