"use client";

import React from "react";
import Link from "next/link";
import { Nav, Navbar } from "@/components/bootstrap";

const Header = () => {
  const links = ["view", "search", "create"];
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
