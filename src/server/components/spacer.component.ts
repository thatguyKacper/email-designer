import MJMLNode from './main.component';

interface MJMLSpacerAttributes {
  height?: number;
  padding?: number;
  'padding-bottom'?: number;
  'padding-left'?: number;
  'padding-radius'?: number;
  'padding-right'?: number;
  'padding-top'?: number;
}

export default class MJMLSpacer extends MJMLNode {
  constructor(attributes: MJMLSpacerAttributes = {}) {
    super('mj-spacer', attributes);
  }
}

export const addSpacer = (
  parent: MJMLNode,
  attributes: MJMLSpacerAttributes = {},
) => {
  const spacer = new MJMLSpacer(attributes);
  parent.addChild(spacer);
  return spacer;
};
