import { TSideBarMenuItem } from "../types";

export const SIDE_BAR_MENU: TSideBarMenuItem[] = [
  {
    label: "Profile",
    code: "profile",
    path: "/Profile?tab=profile",
  },
  {
    label: "Cart",
    code: "cart",
    path: "/Profile?tab=cart",
  },
  {
    label: "Change password",
    code: "change-password",
    path: "/Profile?tab=change-password",
  },
];
