function validateForm(inputText) {
  function validURL(inputText) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    );
    return !!pattern.test(inputText);
  }

  if (inputText == '') {
    alert('Text must be filled out');
  } else if ((inputText = validURL(inputText))) {
    alert('Entered text is a url');
  }
}

export { validateForm };
