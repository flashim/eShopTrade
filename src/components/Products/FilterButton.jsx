import { useSelector, useDispatch } from 'react-redux'
import {setFilterTag} from './productSlice'


const FilterButton = props => {

    const dispatch = useDispatch();

    return <div className="filter-button" onClick={() => dispatch(setFilterTag((props.name)))}>{props.name}</div>
}

export default FilterButton