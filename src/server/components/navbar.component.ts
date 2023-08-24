import MJMLNode from './main.component';

interface MJMLNavbarAttributes {
  align?: string;
  'base-url'?: string;
}

export default class MJMLNavbar extends MJMLNode {
  constructor(attributes: MJMLNavbarAttributes = {}) {
    super('mj-navbar', attributes);
  }
}

export const addNavbar = (
  parent: MJMLNode,
  attributes: MJMLNavbarAttributes = {},
) => {
  const navbar = new MJMLNavbar(attributes);
  parent.addChild(navbar);
  return navbar;
};
