import MJMLNode from './main.component';

interface MJMLButtonAttributes {
  align?: string;
  'background-color'?: string;
  border?: string;
  'border-bottom'?: string;
  'border-left'?: string;
  'border-radius'?: number;
  'border-right'?: string;
  'border-top'?: string;
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
  'text-align'?: string;
  'text-decoration'?: string;
  'text-transform'?: string;
  title?: string;
  'vertical-align'?: string;
  width?: number;
}

export default class MJMLButton extends MJMLNode {
  content: string;

  constructor(content: string, attributes: MJMLButtonAttributes = {}) {
    super('mj-button', attributes);
    this.content = content;
  }
}

export const addButton = (
  parent: MJMLNode,
  content: string,
  attributes: MJMLButtonAttributes = {},
) => {
  const button = new MJMLButton(content, attributes);
  parent.addChild(button);
  return button;
};
