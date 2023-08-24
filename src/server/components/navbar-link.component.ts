import MJMLNode from './main.component';

interface MJMLNavbarLinkAttributes {
  color?: string;
  'font-size'?: number;
  'font-style'?: string;
  'font-weight'?: number;
  height?: number;
  href?: string;
  padding?: number;
  'padding-bottom'?: number;
  'padding-left'?: number;
  'padding-radius'?: number;
  'padding-right'?: number;
  'padding-top'?: number;
  'text-decoration'?: string;
  'text-transform'?: string;
}

export default class MJMLNavbarLink extends MJMLNode {
  constructor(attributes: MJMLNavbarLinkAttributes = {}) {
    super('mj-navbar-link', attributes);
  }
}

export const addNavbarLink = (
  parent: MJMLNode,
  attributes: MJMLNavbarLinkAttributes = {},
) => {
  const navbarLink = new MJMLNavbarLink(attributes);
  parent.addChild(navbarLink);
  return navbarLink;
};
