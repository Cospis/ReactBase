import { v4 as uuid } from "uuid";

const NavbarDefault = [
  {
    id: uuid(),
    menuitem: "Dashboard",
    link: "/",
  },
  {
    id: uuid(),
    menuitem: "Users",
    link: "/users",
  },
  {
    id: uuid(),
    menuitem: "Store",
    link: "/store",
  },
  {
    id: uuid(),
    menuitem: "Orders",
    link: "/orders",
  },
];

export default NavbarDefault;
