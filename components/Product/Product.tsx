import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { priceRub } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
            </div>
            <div className={styles.title}>
                {product.title}
            </div>
            <div className={styles.price}>
                {priceRub(product.price)}
                {product.oldPrice && <Tag className={styles.oldPrice} color="green">{priceRub(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={styles.credit}>
                {priceRub(product.credit)}/<span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
                <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
                {product.categories.map(c => <Tag className={styles.category} color="ghost" key={c}>{c}</Tag>)}
            </div>
            <div className={styles.priceTitle}>
                цена
            </div>
            <div className={styles.creditTitle}>
                кредит
            </div>
            <div className={styles.rateTitle}>
                {product.reviewCount} отзывов
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>
                {product.description}
            </div>
            <div className={styles.feature}>
                abxb
            </div>
            <div className={styles.advBlock}>
                <div className={styles.advantages}>
                    <div>Преимущества</div>
                    {product.advantages}
                </div>
                <div className={styles.disadvantages}>
                    <div>Недостатки</div>
                    {product.disadvantages}
                </div>
            </div>
            <Divider className={styles.hr} />
            <div className={styles.actions}>
                <Button appearance='primary'>Узнать подробнее</Button>
                <Button appearance='ghost' arrow={'right'} className={styles.reviewButton}>Читать отзывы </Button>
            </div>
        </Card>
    );
};