import Button from "./Button";

const Header = () => {
  return (
    <nav className="flex flex-row justify-end bg-gray-100 px-24 py-2">
      <Button>Save Changes</Button>
    </nav>
  );
};

export default Header;
