import React from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/contrats">
        Contrats
      </a>

      <a className="menu-item" href="/commandes">
        Commandes
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
  );
};