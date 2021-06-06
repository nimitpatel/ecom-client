import { RightArrowIcon } from "../../assets/icon";
import { Button } from "./Button";

export const ProductCard = ({ src, name, category, id }) => (
    <div className="productCard" key={id}>
        <div className="image">
            <img src={src} alt={name} />
        </div>
        <div className="body">
            <h4>{name}</h4>
            <p>{category}</p>
            <Button 
                type="link"
                label="Explore me"
                href={id}
                icon={<RightArrowIcon />}
            />
        </div>
    </div>
)