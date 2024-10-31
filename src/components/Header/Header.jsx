const Header = () => {
  return (
    <header className="w-4/5 mx-auto my-10">
      <nav className="flex justify-between">
        <h2 className="text-4xl font-bold ">Knowledge Cafe</h2>
        <div>
        <img className="w-14 h-14 rounded-full border" src="../../assets/images/profile.png" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;