import MJMLNode from './main.component';

interface MJMLDividerAttributes {
  align?: string;
  'border-color'?: string;
  'border-style'?: string;
  'border-width'?: string;
  padding?: number;
  'padding-bottom'?: number;
  'padding-left'?: number;
  'padding-radius'?: number;
  'padding-right'?: number;
  'padding-top'?: number;
  width?: number;
}

export default class MJMLDivider extends MJMLNode {
  constructor(attributes: MJMLDividerAttributes = {}) {
    super('mj-divider', attributes);
  }
}

export const addDivider = (
  parent: MJMLNode,
  attributes: MJMLDividerAttributes = {},
) => {
  const divider = new MJMLDivider(attributes);
  parent.addChild(divider);
  return divider;
};
