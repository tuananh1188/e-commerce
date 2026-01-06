import MainLayout from '../Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '../CountdownBanner/CountdownBanner';
import ProductItem from '../ProductItem/ProductItem';

function HeadingListProducts() {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <ProductItem/>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
