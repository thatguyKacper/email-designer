import MJMLNode from './main.component';

interface MJMLWrapperAttributes {
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

export default class MJMLWrapper extends MJMLNode {
  constructor(
    attributes: MJMLWrapperAttributes = {},
    children: MJMLNode[] = [],
  ) {
    super('mj-wrapper', attributes, children);
  }
}

export const addWrapper = (
  parent: MJMLNode,
  attributes: MJMLWrapperAttributes = {},
) => {
  const wrapper = new MJMLWrapper(attributes);
  parent.addChild(wrapper);
  return wrapper;
};
