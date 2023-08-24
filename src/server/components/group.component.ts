import MJMLColumn from './column.component';
import MJMLNode from './main.component';

interface MJMLGroupAttributes {
  align?: string;
  'background-color'?: string;
  'vertical-align'?: string;
  width?: number;
}

export default class MJMLGroup extends MJMLNode {
  constructor(
    attributes: MJMLGroupAttributes = {},
    children: MJMLColumn[] = [],
  ) {
    super('mj-group', attributes, children);
  }
}

export const addGroup = (
  parent: MJMLNode,
  attributes: MJMLGroupAttributes = {},
) => {
  const group = new MJMLGroup(attributes);
  parent.addChild(group);
  return group;
};
