import MJMLNode from './main.component';

interface MJMLCarouselImageAttributes {
  alt?: string;
  href?: string;
  src?: string;
  title?: string;
}

export default class MJMLCarouselImage extends MJMLNode {
  constructor(attributes: MJMLCarouselImageAttributes = {}) {
    super('mj-carousel-image', attributes);
  }
}

export const addCarouselImage = (
  parent: MJMLNode,
  attributes: MJMLCarouselImageAttributes = {},
) => {
  const carouselImage = new MJMLCarouselImage(attributes);
  parent.addChild(carouselImage);
  return carouselImage;
};
