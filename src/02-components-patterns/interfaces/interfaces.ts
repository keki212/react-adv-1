import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';



export interface Product {
    id: string;
    title: string;
    price?: number;
    img?: string;
}


export interface ProductContextProps {
    product: Product;
    increaseBy: (value: number) => void;
    counter: number;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
}