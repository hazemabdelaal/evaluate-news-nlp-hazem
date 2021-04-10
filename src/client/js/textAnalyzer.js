function analyzeText(event) {
  event.preventDefault();

  let formText = document.getElementById('text').value;
  let formData = { formText };
  Client.validateForm(formText);
  console.log('::: Text Submitted :::');

  const meaningCloud = async () => {
    try {
      const res = await fetch('http://localhost:8081/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const resData = await res.text();

      if (
        resData !==
        'The text was analyzed and it is undefined and has status credits of 0'
      )
        document.getElementById('results').innerHTML = resData;
    } catch (error) {
      console.error(error);
    }
  };

  meaningCloud();
}

export { analyzeText };
