import style from './GridSection.module.scss'

const GridSection = () => {
    return (
        <div className={style.gridSection__main}>
            <div className="container">
                
                <div className={style.gridSection}>
                    <div className={style.gridSection__item}>
                        <img src="https://plus.unsplash.com/premium_photo-1677166331830-c5b00ec76c5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div>
                    <div className={style.gridSection__item}>
                        <img src="https://images.unsplash.com/photo-1642513730712-2ccba1dbef1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div>
                    <div className={style.gridSection__item}>
                        <img src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" />
                    </div>
                    <div className={style.gridSection__item}>
                        <img src="https://images.unsplash.com/photo-1654895716780-b4664497420d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div>
                    <div className={style.gridSection__item}>
                        <img src="https://images.unsplash.com/photo-1654895574745-82ef6b5970c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div>
                    <div className={style.gridSection__item}>
                        <img src="https://images.unsplash.com/photo-1591954692515-d1d30376fa64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div>
                </div>
            </div>
        </div>
        
       
    )
}

export default GridSection