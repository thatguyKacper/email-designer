// Function to generate the components object
function generateComponents(addedElements) {
    const components = addedElements.map((element) => {
      const { type, attributes, content } = element;
      return { type, attributes, content };
    });
  
    return components;
    // console.log({ components });
  }

export default generateComponents;