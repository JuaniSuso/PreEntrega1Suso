import { CartWidget } from "../CartWidget/CartWidget";




function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Procesadores</li>
          <li>Gráficas</li>
          <li>Memorias</li>
        </ul>
      </nav>
      <CartWidget />
    </>
    
  );
}

export default NavBar;
  