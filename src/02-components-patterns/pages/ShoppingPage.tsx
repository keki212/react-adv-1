import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css'

import iman from '../assets/live-chat.png';



const product = {
    id: '1',
    title: 'Coffee Mug - card',
    img: './coffee-mug.png',
}

const product1 = {
    id: '1',
    title: 'Pensar con un café',
    img: iman,
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

                <ProductCard 
                    product={product} 
                    className="bg-dark text-white"
                > 
                    <ProductCard.Image 
                        className="custom-image" 
                        style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
                        }}
                    />
                    <ProductCard.Title title={''} className="text-bold" />
                    <ProductCard.Buttons 
                        className="custom-buttons"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                     />
                </ProductCard>

                <ProductCard 
                    product={product1}
                    className="bg-dark text-white"  
                > 
                    <ProductImage className="custom-image" />
                    <ProductTitle title={''} className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                    product={product1}
                    style={{
                        backgroundColor: '#70D1F8',
                    }}
                > 
                    <ProductImage 
                        className="custom-image"
                        style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
                        }} 
                    />
                    <ProductTitle 
                        title={''} 
                        style={{ fontWeight: 'bold' }} 
                    />
                    <ProductButtons 
                        style={{
                            display: 'flex',
                            justifyContent: 'end',
                        }}
                    />
                </ProductCard>

            </div>
        </div>
    )
}
