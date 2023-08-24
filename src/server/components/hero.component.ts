import MJMLButton from './button.component';
import MJMLNode from './main.component';
import MJMLText from './text.components';

interface MJMLHeroAttributes {
  'background-color'?: string;
  'background-position'?: number;
  'background-url'?: string;
  'background-height': number;
  'background-width': number | '600px';
  'border-radius'?: number;
  height?: number;
  mode?: 'fluid-height' | 'fixed-heigh';
  padding?: number;
  'padding-bottom'?: number;
  'padding-left'?: number;
  'padding-radius'?: number;
  'padding-right'?: number;
  'padding-top'?: number;
  'vertical-align'?: string;
}

export default class MJMLHero extends MJMLNode {
  constructor(
    attributes: MJMLHeroAttributes = {
      'background-height': 600,
      'background-width': 600,
    },
    children: (MJMLText | MJMLButton)[] = [],
  ) {
    super('mj-hero', attributes, children);
  }
}

export const addHero = (
  parent: MJMLNode,
  attributes: MJMLHeroAttributes = {
    'background-height': 600,
    'background-width': 600,
  },
) => {
  const hero = new MJMLHero(attributes);
  parent.addChild(hero);
  return hero;
};
