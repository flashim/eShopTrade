
import Logo from './Logo';
import Nav from './Nav';
import Panel from './Panel';

const Header = () => {
  return (
      <>
        <div className="header-top">
            <div className="logo"><Logo /></div>
            <div className="nav font-14"><Nav /></div>
            <div className="panel"><Panel /></div>
        </div>
        
        <div className="header-bottom text-center">
          Invite friends to Big Fashion Festival & get up to $150 MynCash for every person who visits<span className="invite-button">Invite Now</span>
        </div>
      </>
    )
}

export default Header