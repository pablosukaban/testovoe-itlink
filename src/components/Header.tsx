"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Nav, Navbar } from "@/components/bootstrap";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { productSlice } from "@/redux/productSlice";

const Header = () => {
  const links = ["view", "search", "create", "update"];

  const dispatch = useAppDispatch();
  const { setProduct } = productSlice.actions;

  useEffect(() => {
    fetch("http://localhost:3000/api/product")
      .then((res) => res.json())
      .then((data) => dispatch(setProduct(data.data)));
  });

  return (
    <header>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} href="/">
            Home{" "}
          </Nav.Link>
        </Nav.Item>
        {links.map((link) => (
          <Nav.Item key={link}>
            <Nav.Link as={Link} href={`/${link}`}>
              {link}{" "}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </header>
  );
};

export default Header;
