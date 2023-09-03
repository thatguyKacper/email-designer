function editElement(addedElements, element, attributes) { 
    const obj ={
      ...element,
      attributes: {
        ...element.attributes,
        ...attributes,
      },
    };
    console.log(obj);
    addedElements[element.id] = obj;
  }

export default editElement;