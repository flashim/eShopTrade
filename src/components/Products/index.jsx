
import { useSelector } from 'react-redux'
import {selectList, selectTags, selectFilterTag} from './productSlice'
import Product from './Product';
import FilterButton from './FilterButton';

const Products = props => {
    
    const productList = useSelector(selectList);
    const tags = useSelector(selectTags);
    const filterTagLabel = useSelector(selectFilterTag);

    return (<>
    
        <div className="">Home / Clothing / Mens Clothing / All Mens Clothing</div>
        <div className="products-heading font-bold">{filterTagLabel} <span className="color-grey">{`(${productList.length} Products)`}</span></div>
        
        {/* Filter section */}
        <div className="products-filters font-16">
            <div>
                <span className="font-bold">FILTERS: </span>
                {tags.map((tag, index) => {
                    return <span key={index}><FilterButton name={tag} /></span>      
                })}
            </div>
        </div>

        <div className="line" />

        <div className="products">
            {productList.map(item => <div className="product" key={item.id}><Product props={item}/></div>)} 
        </div>

    </>)
}

export default Products