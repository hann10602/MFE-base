import { Table, TableColumnsType } from "antd";
import React, { useState } from "react";
import { TCartItem } from "../../types";
import "./index.scss";

type Props = {};

const CART_MOCK_DATA: TCartItem[] = [
  {
    id: 1,
    name: "CLoth 1",
    price: 1000000,
    quantity: 15,
    thumbnail: "asd",
  },
  {
    id: 2,
    name: "CLoth 2",
    price: 2000000,
    quantity: 6,
    thumbnail: "asd",
  },
  {
    id: 3,
    name: "CLoth 3",
    price: 3000000,
    quantity: 9,
    thumbnail: "asd",
  },
  {
    id: 4,
    name: "nha` nghi?",
    price: 4000000,
    quantity: 12,
    thumbnail: "asd",
  },
];

const columns: TableColumnsType<TCartItem> = [
  {
    title: () => (
      <div style={{ display: "flex", justifyContent: "center" }}>Thumbnail</div>
    ),
    dataIndex: "thumbnail",
    key: "thumbnail",
    render: (text: string) => <div>{text}</div>,
  },
  {
    title: () => (
      <div style={{ display: "flex", justifyContent: "center" }}>Name</div>
    ),
    dataIndex: "name",
    key: "name",
    render: (text: string) => <div>{text}</div>,
  },
  {
    title: () => (
      <div style={{ display: "flex", justifyContent: "center" }}>Price</div>
    ),
    dataIndex: "price",
    key: "price",
    render: (text: string) => <div>{text}</div>,
  },
  {
    title: () => (
      <div style={{ display: "flex", justifyContent: "center" }}>Quantity</div>
    ),
    dataIndex: "quantity",
    key: "quantity",
    render: (text: string) => <div>{text}</div>,
  },
  {
    title: () => (
      <div style={{ display: "flex", justifyContent: "center" }}>Total</div>
    ),
    dataIndex: "total",
    key: "total",
    render: (text: string) => <div>{text}</div>,
  },
];

export const Cart = (props: Props) => {
  const [products, setProducts] = useState<TCartItem[]>(CART_MOCK_DATA);

  const modifiedDataSource = products.map((item) => ({
    ...item,
    total: item.price * item.quantity,
  }));

  return (
    <div className="profile__cart__wrapper">
      <p className="profile__cart__title">Cart</p>
      <Table
        className="cart-wrapper"
        rowSelection={{
          type: "checkbox",
        }}
        dataSource={modifiedDataSource}
        columns={columns}
      />
    </div>
  );
};
