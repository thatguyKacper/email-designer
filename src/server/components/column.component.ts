import MJMLNode from './main.component';

interface MJMLColumnAttributes {
  'background-color'?: string;
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
  'vertical-align'?: string;
  width?: number;
}

export default class MJMLColumn extends MJMLNode {
  constructor(
    attributes: MJMLColumnAttributes = {},
    children: MJMLNode[] = [],
  ) {
    super('mj-column', attributes, children);
  }
}

export const addColumn = (
  parent: MJMLNode,
  attributes: MJMLColumnAttributes = {},
) => {
  const column = new MJMLColumn(attributes);
  parent.addChild(column);
  return column;
};
