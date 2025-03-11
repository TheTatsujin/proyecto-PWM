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

fillDocumentWithTemplates();

// FUNCTIONS
const GET_NULL_ELEMENT = function () {
    let nullElement = document.createElement("div")
    nullElement.classList.add("NULL_ELEMENT");
    return nullElement;
}

function fillDocumentWithTemplates(){
    const documentEmptyTags = document.querySelectorAll(".template");
    for(const elementKey of documentEmptyTags){
        const templateName = documentEmptyTags[elementKey].getAttribute("template-name");
        const templateJsonDefinition = fetchJsonTemplateDefinition(templateName);
        const newElement = document.createDocumentFragment().appendChild(parseJsonTemplateToHtml(templateJsonDefinition));

        documentEmptyTags[elementKey].appendChild(newElement);
    }
}

function fetchJsonTemplateDefinition(templateName){
    // TODO: Asynchronous template json definition fetch
    console.log(templateName);
    return jsonDummy;
}

function parseJsonTemplateToHtml(templateJsonDefinition) {
    if (!templateJsonDefinition || !templateJsonDefinition.tag || !templateJsonDefinition.tag.name)
        return GET_NULL_ELEMENT();

    const templateHtmlElement = document.createElement(templateJsonDefinition.tag.name);

    if (templateJsonDefinition.tag.hasOwnProperty("id"))
        templateHtmlElement.id = templateJsonDefinition.tag.id;

    for (const classKey in templateJsonDefinition.tag.classes)
        templateHtmlElement.classList.add(templateJsonDefinition.tag.classes[classKey]);

    if (templateJsonDefinition.tag.hasOwnProperty("innerText"))
        templateHtmlElement.innerText = templateJsonDefinition.tag.innerText;

    for (const childKey in templateJsonDefinition.tag.children) {
        const childTemplateJsonDefinition = templateJsonDefinition.tag.children[childKey];

        const childTemplateHtmlElement = parseJsonTemplateToHtml(childTemplateJsonDefinition);
        templateHtmlElement.appendChild(childTemplateHtmlElement);
    }

    return templateHtmlElement;
}

