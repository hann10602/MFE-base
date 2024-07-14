import { Image, Layout, Menu } from "antd";
import "./index.scss";
import { Icon } from "@iconify-icon/react";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import React, { ReactNode, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useClickOutside } from "../../../hooks";

const { Header, Footer } = Layout;

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

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
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
    <Layout>
      <div className="header"></div>
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
          <a href="/cart">
            <Icon
              icon="mdi:cart-variant"
              className="layout__right-header__item"
            />
          </a>
          <div>
            {true ? (
              <Icon
                icon="material-symbols-light:sunny-outline"
                className="layout__right-header__item"
                // onClick={handleChangeToLightMode}
              />
            ) : (
              <Icon
                icon="material-symbols-light:sunny"
                className="layout__right-header__item"
                // onClick={handleChangeToDarkMode}
              />
            )}
          </div>
          <div
            style={{ position: "relative" }}
            ref={headerMenuRef}
            onClick={handleClickMenu}
          >
            <Icon icon="mdi:menu" className="layout__right-header__item" />
            {isOpenSubMenu && (
              <div className="layout__right-header__menu">
                <a href="/profile" className="layout__right-header__menu-item">
                  <Icon
                    className="layout__right-header__menu-item__icon"
                    icon="mdi:user-circle-outline"
                  />
                  <p className="layout__right-header__menu-item__title">
                    Profile
                  </p>
                </a>
                <a href="/settings" className="layout__right-header__menu-item">
                  <Icon
                    className="layout__right-header__menu-item__icon"
                    icon="material-symbols:settings-outline"
                  />
                  <p className="layout__right-header__menu-item__title">
                    Settings
                  </p>
                </a>
                <div
                  onClick={handleLogout}
                  className="layout__right-header__menu-item"
                >
                  <Icon
                    className="layout__right-header__menu-item__icon"
                    icon="material-symbols:logout-sharp"
                  />
                  <p className="layout__right-header__menu-item__title">
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Header>

      <div className="test">asdasd</div>
      {children}
      <Footer />
    </Layout>
  );
};
