import { List } from '@phosphor-icons/react';
import { useState } from 'react';
import './Nav.css';

function Nav() {
  
  const [isVisible, setIsVisible] = useState(true);
  
  
  return (
    <div className='contNav'>
      <div className='navCont'>
        <div className='judul'>
          <h3>TEH SEMU</h3>
        </div>

        <div onClick={() => setIsVisible(!isVisible)} className='icon'>
          <List color="white" size={30} />
        </div>
        
        <div id='box' className={isVisible ? 'box' : 'bix'}>
          <ul className='bux'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>

            <li>
              <div className="log1n">
                <a href="/login">Login</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;