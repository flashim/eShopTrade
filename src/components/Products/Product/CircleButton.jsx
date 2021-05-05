import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setClickState, selectList, setVariantId } from '../productSlice';

const CircleButton = props => {

    const getSize = key => {
        let value = {};
        switch (key) {
            case "xs":
            case "XS":
            case "38":
            case "US 8":
                value = { normal: 38, hover: "XS"}
                break;
    
            case "small":
            case "s":
            case "S":
            case "39":
            case "US 9":
                value = { normal: 39, hover: "S"}
                break;
    
            case "medium":
            case "m":
            case "M":
            case "40":
            case "US 10":
                value = { normal: 40, hover: "M"}
                break;    
    
            case "large":
            case "l":
            case "L":
            case "42":
            case "US 11":
                value = { normal: 42, hover: "L"}
                break;
    
            case "xl":
            case "XL":
            case "44":
            case "US 12":
                value = { normal: 44, hover: "XL"}
                break;
            
            case "xxl":
            case "XXL":
            case "46":
            case "US 13":
                value = { normal: 46, hover: "XXL"}
                break;
    
            default:
                value = {}
                break;
        }
    
        return value
    }

    const {id, $id, $value} = props;

    const {normal, hover } = getSize($value);
    const [over, setOver] = useState(false);
    
    const dispatch = useDispatch();
    
    const onVariantClick = () => {
        dispatch(setClickState({id:id, clickValue:2}));
        dispatch(setVariantId($id));
    }

    return <div onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}
                className="circle-button font-14"
                onClick={onVariantClick} >
                {over ? hover : normal}   
            </div>
};

export default CircleButton;