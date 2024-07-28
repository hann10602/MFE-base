import { Table, TableColumnsType } from "antd";
import React, { useState } from "react";
import { TCartItem } from "../../types";
import "./index.scss";
import { Button } from "../../../../components";

type Props = {};

const CART_MOCK_DATA: TCartItem[] = [
  {
    id: 1,
    name: "CLoth 1",
    price: 10,
    quantity: 2,
    thumbnail: "asd",
  },
  {
    id: 2,
    name: "CLoth 2",
    price: 20,
    quantity: 3,
    thumbnail: "asd",
    newPrice: 40,
  },
  {
    id: 3,
    name: "CLoth 3",
    price: 30,
    quantity: 1,
    thumbnail: "asd",
  },
  {
    id: 4,
    name: "nha` nghi?",
    price: 40,
    quantity: 2,
    thumbnail: "asd",
  },
];

export const Cart = (props: Props) => {
  const [products, setProducts] = useState<TCartItem[]>(CART_MOCK_DATA);

  const modifiedDataSource = products.map((item) => ({
    ...item,
    price: item.newPrice ? item.newPrice : item.price,
    total: (item.newPrice ? item.newPrice : item.price) * item.quantity,
  }));

  const total = products.reduce(
    (r, i) => r + (i.newPrice ? i.newPrice : i.price) * i.quantity,
    0
  );

  const columns: TableColumnsType<TCartItem> = [
    {
      title: () => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          Thumbnail
        </div>
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
      render: (text: string, field: TCartItem) => {
        return (
          <div>
            <p>{field.newPrice ? field.newPrice : field.price}</p>
            {field.newPrice && <p className="old-price">{field.price}$</p>}
          </div>
        );
      },
    },
    {
      title: () => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          Quantity
        </div>
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
      render: (text: string) => <div>{text}$</div>,
    },
  ];

  return (
    <div className="profile__cart__wrapper">
      <p className="profile__cart__title">Cart</p>
      <div className="cart-wrapper">
        <Table
          pagination={false}
          rowSelection={{
            type: "checkbox",
          }}
          dataSource={modifiedDataSource}
          columns={columns}
        />
      </div>
      <div className="cart__payment-wrapper">
        <p className="cart__total">Total: {total}$</p>
        <Button className="cart__buy-btn">Buy</Button>
      </div>
    </div>
  );
};
