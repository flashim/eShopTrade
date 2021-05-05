import SearchIcon from './SearchIcon';
import UserIcon from './UserIcon';
import CartIcon from './CartIcon';
import {ActiveLink} from '../../utils';

const Panel = props => {
    return (
        <div className="panel">
          <div className="panel-item"><SearchIcon /></div>
          <div className="panel-item"><UserIcon /></div>
          <div className="panel-item" style={{ height: 28, width: 24 }}>
            <ActiveLink href="/checkout"><CartIcon /></ActiveLink>
          </div>
        </div>
    )
}

export default Panel