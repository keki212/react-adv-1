import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';


export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange, products} = useShoppingCart();

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
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className="bg-dark text-white"
                        value={shoppingCart[product.id]?.count || 0}
                        onChange={onProductCountChange}
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle title={''} className="text-bold" />
                        <ProductButtons
                            className="custom-buttons"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        />
                    </ProductCard>
                ))
                }
            </div>
            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{
                                width: '100px',
                            }}
                            value={product.count}
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
