import generateComponents from "./generateComponents";

async function generateEmail(addedElements, output, type) {
    const components = generateComponents(addedElements);
  
    try {
      const response = await fetch('/api/v1/designer/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ components }),
      });
  
      console.log(JSON.stringify({ components }));
      if (response.ok) {
        const htmlResponse = await response.text();
        // console.log(htmlResponse);
        if (type === 'HTML') {
          output.innerHTML = htmlResponse;
        } else {
          output.innerText = htmlResponse;
        }
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

export default generateEmail;