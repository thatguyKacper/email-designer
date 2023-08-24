import MJMLNode from './main.component';

interface MJMLSectionAttributes {
  'background-color'?: string;
  'background-position'?: string;
  'background-position-x'?: string;
  'background-position-y'?: string;
  'background-repeat'?: string;
  'background-size'?: string;
  'background-url'?: string;
  border?: string;
  'border-bottom'?: string;
  'border-left'?: string;
  'border-radius'?: number;
  'border-right'?: string;
  'border-top'?: string;
  padding?: number;
  'padding-bottom'?: number;
  'padding-left'?: number;
  'padding-radius'?: number;
  'padding-right'?: number;
  'padding-top'?: number;
  'text-align'?: string;
  'full-width'?: number;
}

export default class MJMLSection extends MJMLNode {
  constructor(
    attributes: MJMLSectionAttributes = {},
    children: MJMLNode[] = [],
  ) {
    super('mj-section', attributes, children);
  }

  // addSection(attributes: MJMLSectionAttributes = {}): MJMLSection {
  //   const section = new MJMLSection(attributes);
  //   this.addChild(section);
  //   return section;
  // }
}

export const addSection = (
  parent: MJMLNode,
  attributes: MJMLSectionAttributes = {},
) => {
  const section = new MJMLSection(attributes);
  parent.addChild(section);
  return section;
};
