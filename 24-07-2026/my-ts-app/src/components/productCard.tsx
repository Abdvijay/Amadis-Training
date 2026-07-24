export interface ProductType {
  product_name: string;
  product_amount?: number; // Optional
  product_colors?: string[]; // Optional
}

export interface ProductProps {
  product: ProductType;
}

function ProductCard({ product }: ProductProps) {
  return (
    <div>
      <h1>{product.product_name}</h1>
      {product.product_amount !== undefined && <h2>${product.product_amount}</h2>}
      <ul>
        {product.product_colors?.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCard;