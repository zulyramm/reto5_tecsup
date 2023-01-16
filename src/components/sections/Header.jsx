// import { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import logoche from '../../assets/logoche.webp';

// const Header = () => {

//   const header = useRef();
//   const modal = useRef();

//   const showMenu = () => {
//     header.current.classList.add('header--menu');
//     modal.current.classList.add('modal--show');
//   };

//   const hideMenu = () => {
//     header.current.classList.remove('header--menu');
//     modal.current.classList.remove('modal--show');
//   };

//   return (
//     <header
//       className="header"
//       ref={header}
//     >
//       <nav className="nav">
//         <div className="container f-elements f-elements--header">
//           <Link to="/">
//             <img src={logoche} alt="Logo" className="nav__logo" width="32" height="32" />
//           </Link>
//           <div
//             className="modal modal--header"
//             ref={modal}
//             onClick={hideMenu}
//           >
//             <ul className="list list--header">
//               <li>
//                 <Link to="/productos" className="list__link">Productos</Link>
//               </li>
//               <li>
//                 <Link to="/servicios" className="list__link">Servicios</Link>
//               </li>
//               <li>
//                 <Link to="/nosotros" className="list__link">Nosotros</Link>
//               </li>
//               <li>
//                 <Link to="/contacto" className="list__link">Contacto</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="f-elements f-elements--center">
//             <select>
//               <option value="value1">🌚</option>
//               <option value="value2">🌞</option>
//               <option value="value3">💻</option>
//             </select>
//             <button
//               className="icon"
//               onClick={showMenu}
//             >
//               🍔
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

//export default Header;
import { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoche from '../../assets/logoche.webp';
import { BsList, BsXCircle } from "react-icons/bs";

const Header = () => {

  const header = useRef();
  const modal = useRef();

  const showMenu = () => {
    header.current.classList.add('header--move');
    modal.current.classList.add('modal--show');
  };

  const hideMenu = () => {
    header.current.classList.remove('header--move');
    modal.current.classList.remove('modal--show');
  };

  return (
    <header
      className="header"
      ref={header}
    >
      <nav className="nav">
        <div className="container f-elements f-elements--header">
          <Link to="/">
            <img src={logoche} alt="Logo de EAKON" className="nav__logo" width="32" height="32" />
          </Link>
          <div
            className="modal modal--header"
            ref={modal}
            onClick={hideMenu}
          >
            <ul
              className="list list--header"
              onClick={e => e.stopPropagation()}
            >
              <li>
                <NavLink
                  to="/productos"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/servicios"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Servicios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nosotros"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacto"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Contacto
                </NavLink>
              </li>
              <li
                className="icon icon--close"
                onClick={hideMenu}
              >
                <BsXCircle />
              </li>
            </ul>
          </div>
          <div className="f-elements f-elements--center">
            {/* <select>
              <option value="value1">🌚</option>
              <option value="value2">🌞</option>
              <option value="value3">💻</option>
            </select> */}
            <button
              className="icon icon--menu"
              onClick={showMenu}
            >
              <BsList />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;