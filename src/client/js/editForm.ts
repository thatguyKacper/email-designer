function editForm(form) {
    let optionsObj = {};
 
  const inputs = Array.from(form.elements).filter(tag => ["input", "select"].includes(tag.tagName.toLowerCase()));
  
//   const inputs =  Array.from(form.elements).filter((tag): tag is HTMLInputElement =>
//     tag instanceof HTMLInputElement && tag.tagName.toLowerCase() === "input"
//   );  
  
    (inputs as { name: string, value: string }[]).forEach((element: { name: string, value: string }) => {
      if (element.value === '' || element.value === '0') {
        return
      } else if (element.name.includes('padding')) {
        optionsObj[element.name] = `${element.value}px`;
      } else if(element.name.includes('border')) {
        optionsObj[element.name] = `${element.value}px solid black`;
      } else if(element.name.includes('height')) {
        optionsObj[element.name] = `${element.value}px`;
      } else if(element.name.startsWith('width')) {
        optionsObj[element.name] = `${element.value}px`;
      } else if(element.name.includes('font-size')) {
        optionsObj[element.name] = `${element.value}px`;
      } else if(element.name.includes('letter-spacing')) {
        optionsObj[element.name] = `${element.value}px`;
      } else {
        optionsObj[element.name] = element.value;
      }
  
    });


    const optionsArray = [];

    Object.entries(optionsObj).forEach((entry) => {

        const [key, value] = entry;

        if (key === 'content') {
            return
        }

        if (key === 'align') {
            optionsArray.push(`text-align: ${value}`)
        }
  
      optionsArray.push(`${key}: ${value}`)
    })
  
    return {optionsObj, optionsArray};
  }

export default editForm;