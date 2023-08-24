import MJMLCarouselImage from './carousel-image.component';
import MJMLNode from './main.component';

interface MJMLCarouselAttributes {
  align?: string;
  'border-radius'?: number;
  'icon-width'?: number;
  'left-icon'?: string;
  'right-icon'?: string;
  'tb-border'?: string;
  'tb-border-radius'?: number;
  'tb-hover-border-color'?: string;
  'tb-selected-border-color'?: string;
  'tb-width'?: number;
  thumbnails?: 'visible' | 'hidden';
}

export default class MJMLCarousel extends MJMLNode {
  constructor(
    attributes: MJMLCarouselAttributes = {},
    children: MJMLCarouselImage[] = [],
  ) {
    super('mj-carousel', attributes, children);
  }
}

export const addCarousel = (
  parent: MJMLNode,
  attributes: MJMLCarouselAttributes = {},
) => {
  const carousel = new MJMLCarousel(attributes);
  parent.addChild(carousel);
  return carousel;
};
