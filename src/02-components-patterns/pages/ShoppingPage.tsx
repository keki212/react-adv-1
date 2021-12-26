import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import iman from '../assets/live-chat.png';



const product = {
    id: '1',
    title: 'Coffee Mug - card',
    img: './coffee-mug.png',
}

const product1 = {
    id: '1',
    title: 'Pensar con un café',
}

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
                <ProductCard product={product}> 
                    <ProductCard.Image img={iman} />
                    <ProductCard.Title title={'Cafe'} />
                    <ProductCard.Buttons  />
                </ProductCard>

                <ProductCard product={product}> 
                    <ProductCard.Image />
                    <ProductCard.Title title={''} />
                    <ProductCard.Buttons  />
                </ProductCard>

                <ProductCard product={product1}> 
                    <ProductImage />
                    <ProductTitle title={''} />
                    <ProductButtons />
                </ProductCard>

            </div>
        </div>
    )
}
