import { useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import Logo from "../Logo";
import { Container, LogoutBtn, useScrollToTop } from "../index";

const Header = () => {
  const authStatus = useSelector((state) => state.status);
  const location = useLocation();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
      onClick: (slug) => {
        useScrollToTop(location, slug);
      },
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-[#dff0e7] fixed w-full top-0">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width={50} />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink
                    className={({ isActive }) =>
                      `inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full cursor-pointer ${
                        isActive
                          ? "border-b-4 border-blue-600 w-fit bg-blue-300"
                          : null
                      }`
                    }
                    onClick={
                      item.onClick ? () => item.onClick(item.slug) : undefined
                    }
                    to={item.slug}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
