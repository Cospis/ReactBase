import { v4 as uuid } from "uuid";
/**
 *  All Dashboard Routes
 *
 *  Understanding name/value pairs for Dashboard routes
 *
 *  Applicable for main/root/level 1 routes
 *  icon 		: String - It's only for main menu or you can consider 1st level menu item to specify icon name.
 * 				: Object - Icon as an object added from v1.4.0.
 *
 *  Applicable for main/root/level 1 and subitems routes
 * 	id 			: Number - You can use uuid() as value to generate unique ID using uuid library, you can also assign constant unique ID for react dynamic objects.
 *  title 		: String - If menu contains childern use title to provide main menu name.
 *  badge 		: String - (Optional - Default - '') If you specify badge value it will be displayed beside the menu title or menu item.
 * 	badgecolor 	: String - (Optional - Default - 'primary' ) - Used to specify badge background color.
 *
 *  Applicable for subitems / children items routes
 *  name 		: String - If it's menu item in which you are specifiying link, use name ( don't use title for that )
 *  children	: Array - Use to specify submenu items
 *
 *  Used to segrigate menu groups
 *  grouptitle : Boolean - (Optional - Default - false ) If you want to group menu items you can use grouptitle = true,
 *  ( Use title : value to specify group title  e.g. COMPONENTS , DOCUMENTATION that we did here. )
 *
 */

// import MDI icons
import { ReactComponent as DashboardSvg } from "assets/svgs/dashboard.svg";
import { ReactComponent as UsersSvg } from "assets/svgs/users.svg";
import { ReactComponent as OrdersSvg } from "assets/svgs/orders.svg";
import { ReactComponent as ShoppersSvg } from "assets/svgs/shoppers.svg";
import { ReactComponent as StoreSvg } from "assets/svgs/store.svg";
import { ReactComponent as VouchersSvg } from "assets/svgs/vouchers.svg";
import { ReactComponent as ContentManagementSvg } from "assets/svgs/content-management.svg";
import { ReactComponent as AppSettingsSvg } from "assets/svgs/app-settings.svg";

export const DashboardMenu = [
  {
    id: uuid(),
    title: "Dashboard",
    icon: <DashboardSvg />,
    link: "/",
  },

  {
    id: uuid(),
    title: "Users",
    icon: <UsersSvg />,
    children: [
      { id: uuid(), link: "/users/local", name: "Local Users" },
      { id: uuid(), link: "/users/global", name: "Global Users" },
      { id: uuid(), link: "/users/admin", name: "Admin" },
    ],
  },
  {
    id: uuid(),
    title: "Store",
    icon: <StoreSvg />,
    children: [
      { id: uuid(), link: "/store/local", name: "Local Store" },
      { id: uuid(), link: "/store/global", name: "Global Store" },
    ],
  },
  {
    id: uuid(),
    title: "Orders",
    icon: <OrdersSvg />,
    children: [
      { id: uuid(), link: "/orders/local", name: "Local Orders" },
      { id: uuid(), link: "/orders/global", name: "Global Orders" },
    ],
  },

  {
    id: uuid(),
    title: "Shoppers",
    icon: <ShoppersSvg />,
    children: [
      { id: uuid(), link: "/shoppers/accounts", name: "Accounts" },
      { id: uuid(), link: "/shoppers/transactions", name: "Transactions" },
    ],
  },
  {
    id: uuid(),
    title: "Vouchers",
    icon: <VouchersSvg />,
    link: "/vouchers",
  },
  {
    id: uuid(),
    title: "Content Management",
    icon: <ContentManagementSvg />,
    children: [
      { id: uuid(), link: "/content-management/markets", name: "Markets" },
      { id: uuid(), link: "/content-management/areas", name: "Areas" },
      {
        id: uuid(),
        link: "/content-management/unit-types",
        name: "Unit Types",
      },
      {
        id: uuid(),
        link: "/content-management/category",
        name: "Category",
      },
      { id: uuid(), link: "/content-management/countries", name: "Countries" },
    ],
  },
  {
    id: uuid(),
    title: "App Settings",
    icon: <AppSettingsSvg />,
    link: "/app-settings",
  },
];

export default DashboardMenu;
