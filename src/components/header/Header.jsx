import SubHeader from "../subheader/SubHeader"
import SupHeader from "../supheader/SupHeader"

import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.mainHeader}>
            <SupHeader />
            <SubHeader />
        </header>
    )
}

export default Header