import profile from '../../assets/images/profile.png';
const Header = () => {
  return (
    <header className="w-4/5 mx-auto my-10">
      <nav className="flex justify-between items-center pb-3 border-b-2">
        <h2 className="text-4xl font-bold ">Knowledge Cafe</h2>
        <div>
        <img className="w-12 h-12 rounded-full  border-2 border-gray-500 p-1" src={profile} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;