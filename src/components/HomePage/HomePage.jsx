
import MyHeader from '../Header/Header';
import Banner from '../Banner/Banner';
import styles from './styles.module.scss';
import AdvanceHeadling from '../AdvanceHeadling/AdvanceHeadling';
import Info from '../Info/Info';
import HeadingListProducts from '../HeadingListProducts/HeadingListProducts';


function HomePage() {
    const {container} = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info/>
                <AdvanceHeadling/>
                <HeadingListProducts/>
            </div>
        </div>
    );
}

export default HomePage;
