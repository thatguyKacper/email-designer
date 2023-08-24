import MJMLNode from './main.component';

interface MJMLSocialElementAttributes {
  align?: string;
  alt?: string;
  'background-color'?: string;
  'border-radius'?: number;
  color?: string;
  'font-size'?: number;
  'font-style'?: string;
  'font-weight'?: number;
  href?: string;
  'icon-size'?: number;
  'icon-height'?: number;
  name?: string;
  padding?: number;
  'padding-bottom'?: number;
  'padding-left'?: number;
  'padding-radius'?: number;
  'padding-right'?: number;
  'padding-top'?: number;
  'text-padding'?: number;
  'ico-padding'?: number;
  src?: string;
  title?: string;
  'text-decoration'?: string;
  'vertical-align'?: string;
}

export default class MJMLSocialElement extends MJMLNode {
  constructor(attributes: MJMLSocialElementAttributes = {}) {
    super('mj-social-element', attributes);
  }
}

export const addSocialElement = (
  parent: MJMLNode,
  attributes: MJMLSocialElementAttributes = {},
) => {
  const socialElement = new MJMLSocialElement(attributes);
  parent.addChild(socialElement);
  return socialElement;
};
