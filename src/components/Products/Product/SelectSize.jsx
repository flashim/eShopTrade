import CircleButton from './CircleButton';

const SelectSize = props => {

    const {options, id} = props; // object remapped line 11

    return (
        <div className="select-container">
            <div>Select Size</div>
            <div className="select-size">
                {options.map((item, i) => <div key={i}><CircleButton {...{id:id, $id:item.id, $name:item.name, $value:item.value}} /></div>)}
            </div>
            <div className="font-14">Sizes: XS, S, M, L, XL, XXL</div>
        </div>
    );
}

export default SelectSize;