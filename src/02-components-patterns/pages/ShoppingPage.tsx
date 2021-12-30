import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';


import '../styles/custom-styles.css';
import styles from "../styles/styles.module.css";
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >

                <ProductCard
                    key={product.id}
                    product={product}
                    className="bg-dark text-white"
                    initialValues={{
                        count: 4,
                        maxCount: 10,
                    }}
                >
                    {({count, reset, increaseBy, isMaxCountReached}) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle title={''} className="text-bold" />
                            <ProductButtons
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            />
                           <div className={styles.buttonsContainer}>
                                <button  onClick={reset}>Reset</button>
                                <button onClick={() => increaseBy(-2)}>-2</button>
                                {
                                    !isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>
                                }
                                <span>{count}</span>
                           </div>
                        </>
                    )}

                </ProductCard>
            </div>
        </div>
    )
}
