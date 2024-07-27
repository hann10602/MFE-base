import React, { useRef, useState } from "react";
import { useClickOutside } from "../../../../hooks";
import "./index.scss";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { Image, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";

type Props = {};

const { Header } = Layout;

const items: ItemType<MenuItemType>[] | undefined = [
  {
    key: 1,
    label: "Man",
  },
  {
    key: 2,
    label: "Woman",
  },
  {
    key: 3,
    label: "Kid",
  },
];

export const HeaderLayout = (props: Props) => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false);

  const headerMenuRef = useRef<HTMLDivElement>(null);

  const handleClickMenu = () => {
    setIsOpenSubMenu((prev) => !prev);
  };

  const handleLogout = () => {};

  const handleClickOutsideMenu = () => {
    setIsOpenSubMenu(false);
  };

  useClickOutside(headerMenuRef, handleClickOutsideMenu);

  return (
    <Header>
      <div className="layout__left-header">
        <Link to="/">
          <Image
            src="https://png.pngtree.com/template/20200627/ourmid/pngtree-cloth-handcraft-logo-design-vector-image_386721.jpg"
            style={{
              width: "4rem",
              borderRadius: "999px",
              cursor: "pointer",
              border: "1px solid rgba(100, 100, 100, 1)",
              marginRight: "24px",
            }}
            preview={false}
          />
        </Link>
        <Menu
          items={items}
          mode="horizontal"
          theme="dark"
          style={{ flex: 1, minWidth: 0 }}
        />
      </div>
      <div className="layout__right-header">
        <a href="/cart" className="layout__right-header__item">
          <Icon
            icon="ph:shopping-cart-light"
            className="layout__right-header__item-icon"
          />
        </a>
        <div className="layout__right-header__item">
          {true ? (
            <Icon
              icon="material-symbols-light:sunny-outline"
              className="layout__right-header__item-icon"
              // onClick={handleChangeToLightMode}
            />
          ) : (
            <Icon
              icon="material-symbols-light:sunny"
              className="layout__right-header__item-icon"
              // onClick={handleChangeToDarkMode}
            />
          )}
        </div>
        <div
          className="layout__right-header__item"
          ref={headerMenuRef}
          onClick={handleClickMenu}
        >
          <Icon
            icon="ph:user-circle-light"
            className="layout__right-header__item-icon"
          />
          {isOpenSubMenu && (
            <div className="layout__right-header__menu">
              <Link
                to="/profile?tab=profile"
                className="layout__right-header__menu-item"
              >
                <Icon
                  className="layout__right-header__menu-item__icon"
                  icon="mdi:user-circle-outline"
                />
                <p className="layout__right-header__menu-item__title">
                  Profile
                </p>
              </Link>
              <Link to="/settings" className="layout__right-header__menu-item">
                <Icon
                  className="layout__right-header__menu-item__icon"
                  icon="material-symbols:settings-outline"
                />
                <p className="layout__right-header__menu-item__title">
                  Settings
                </p>
              </Link>
              <div
                onClick={handleLogout}
                className="layout__right-header__menu-item"
              >
                <Icon
                  className="layout__right-header__menu-item__icon"
                  icon="material-symbols:logout-sharp"
                />
                <p className="layout__right-header__menu-item__title">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Header>
  );
};
