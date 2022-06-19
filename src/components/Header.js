function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} alt="logo" src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} alt="logo" src="/img/bucket.svg" />

          <span>1205 руб.</span>
        </li>
        <li className="mr-30">
          <img width={21} height={19} alt="like" src="/img/like.svg" />
        </li>
        <li>
          <img width={20} height={20} alt="like" src="/img/profile.svg" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
