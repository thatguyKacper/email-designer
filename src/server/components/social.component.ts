import MJMLNode from './main.component';
import MJMLSocialElement from './social-element.component';

interface MJMLSocialAttributes {
  align?: string;
  'border-radius'?: number;
  color?: string;
  'font-size'?: number;
  'font-style'?: string;
  'font-weight'?: number;
  'icon-size'?: number;
  'icon-height'?: number;
  mode?: 'vertical' | 'horizontal';
  padding?: number;
  'padding-bottom'?: number;
  'padding-left'?: number;
  'padding-radius'?: number;
  'padding-right'?: number;
  'padding-top'?: number;
  'text-padding'?: number;
  'ico-padding'?: number;
  'text-decoration'?: string;
}

export default class MJMLSocial extends MJMLNode {
  constructor(
    attributes: MJMLSocialAttributes = {},
    children: MJMLSocialElement[] = [],
  ) {
    super('mj-social', attributes, children);
  }
}

export const addSocial = (
  parent: MJMLNode,
  attributes: MJMLSocialAttributes = {},
) => {
  const social = new MJMLSocial(attributes);
  parent.addChild(social);
  return social;
};
