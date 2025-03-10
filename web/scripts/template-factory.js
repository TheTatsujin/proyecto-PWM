// We have to fetch json but this is a dummy json --------

const jsonDummy = {
    tag: {
        name: "div",
        id: "test-id",
        classes: ["blue-background", "screen-absolute-center"],
        children: [{
            tag: {
                name: "span",
                id: "test-span",
                classes: ["big-text", "screen-absolute-center"],
                innerText: "Hello World."
            }
        }]
    }
}
// --------------------------------------------------------------

// MAIN
const newElement = document.createDocumentFragment().appendChild(parseJsonTemplateToHtml(jsonDummy));

document.querySelector("#template-name").appendChild(newElement);


// FUNCTIONS
const GET_NULL_ELEMENT = function () {
    let nullElement = document.createElement("div")
    nullElement.classList.add("NULL_ELEMENT");
    return nullElement;
}


function parseJsonTemplateToHtml(templateJsonDefinition) {
    if (!templateJsonDefinition || !templateJsonDefinition.tag || !templateJsonDefinition.tag.classes) return GET_NULL_ELEMENT();

    const templateHtmlElement = document.createElement(templateJsonDefinition.tag.name);
    templateHtmlElement.id = templateJsonDefinition.tag.id;

    templateJsonDefinition.tag.classes.forEach(className => templateHtmlElement.classList.add(className));

    if (templateJsonDefinition.tag.hasOwnProperty("innerText"))
        templateHtmlElement.innerText = templateJsonDefinition.tag.innerText;


    for (const childKey in templateJsonDefinition.tag.children) {
        const childTemplateJsonDefinition = templateJsonDefinition.tag.children[childKey];

        const childTemplateHtmlElement = parseJsonTemplateToHtml(childTemplateJsonDefinition);
        templateHtmlElement.appendChild(childTemplateHtmlElement);
    }

    return templateHtmlElement;
}


