const paragraphsContainer = document.getElementById("paragraphs-container");
const ruler = document.getElementById("ruler");

function addNewParagraph() {
  // Yaha ham paragraph text input lerahe hai.
  const paragraphTextInput = document.getElementById("paragraph-text-input");

  // Yaha ham button ka text banarahe hai.
  const delButtonText = document.createTextNode("Delete");

  // Yaha ham button banarahe hai.
  const delButton = document.createElement("button");

  // Yaha ham button ke andar text rakh rahe hai.
  delButton.appendChild(delButtonText);

  const replaceButtonText = document.createTextNode("Replace");
  const replaceButton = document.createElement("button");
  replaceButton.appendChild(replaceButtonText);

  // Yaha ham paragraph ka text banarahe hai.
  const paragraphText = document.createTextNode(paragraphTextInput.value);

  // Yaha ham paragraph banarahe hai.
  const paragraph = document.createElement("p");

  // Yaha ham pragraph ke andar text rakh rahe hai.
  paragraph.appendChild(paragraphText);
  paragraph.appendChild(delButton);
  paragraph.appendChild(replaceButton);

  delButton.onclick = function () {
    paragraph.remove();
  };

  replaceButton.onclick = function () {
    const titleText = document.createTextNode("New Title");
    const title = document.createElement("h1");
    title.appendChild(titleText);
    paragraph.replaceChild(title, delButton);
  };

  // Yaha ham pragraphs-container wale div ke andar paragraph add kar rahe hai hr tag ke baad me.
  // paragraphsContainer.appendChild(paragraph);

  // Yaha ham pragraphs-container wale div ke andar paragraph add kar rahe hai lekin hr tag se pehle.
  paragraphsContainer.insertBefore(paragraph, ruler);
}