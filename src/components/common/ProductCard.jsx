export const ProductCard = ({ src, name, category, id }) => (
    <div className="productCard" key={id}>
        <div className="image">
            <img src={src} alt={name} />
        </div>
        <div className="body">
            <h4>{name}</h4>
            <p>{category}</p>
        </div>
    </div>
)