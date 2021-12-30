import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import { ProductContextProps, Product, OnChangeArgs, initialValues, ProductCardHandlers } from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
    product: Product;
    //children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers)=> ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number,
    initialValues?: initialValues,
}



export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {
    
    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({onChange, product, value, initialValues});

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount,
        }}>
            <div 
                className={`${ styles.productCard } ${ className }`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount,
                    product,
                    
                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    );
};

