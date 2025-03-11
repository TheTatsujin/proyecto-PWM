// We have to fetch json but this is a dummy json --------

const jsonDummy = {
    tag: {
        name: "div",
        id: "test-id",
        classes: ["blue-background", "absolute-screen-center"],
        children: [{
            tag: {
                name: "span",
                id: "test-span",
                classes: ["big-text", "absolute-screen-center"],
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
    const documentEmptyElementList = document.querySelectorAll(".template");
    for(const documentEmptyElement of documentEmptyElementList){
        const templateName = documentEmptyElement.getAttribute("template-name");
        const templateJsonDefinition = fetchJsonTemplateDefinition(templateName);
        const newElement = document.createDocumentFragment().appendChild(parseJsonTemplateToHtml(templateJsonDefinition));

        documentEmptyElement.appendChild(newElement);
    }
}

function fetchJsonTemplateDefinition(templateName){
    // TODO: Asynchronous template json definition fetch
    console.log(`Loading template: ${templateName}`);
    return jsonDummy;
}

function parseJsonTemplateToHtml(templateJsonDefinition) {
    if (!templateJsonDefinition || !templateJsonDefinition.tag || !templateJsonDefinition.tag.name)
        return GET_NULL_ELEMENT();

    const templateHtmlElement = document.createElement(templateJsonDefinition.tag.name);

    if (templateJsonDefinition.tag.hasOwnProperty("id"))
        templateHtmlElement.id = templateJsonDefinition.tag.id;

    for (const templateJsonTagClass of templateJsonDefinition.tag.classes)
        templateHtmlElement.classList.add(templateJsonTagClass);

    if (templateJsonDefinition.tag.hasOwnProperty("innerText"))
        templateHtmlElement.innerText = templateJsonDefinition.tag.innerText;

    for (const childKey in templateJsonDefinition.tag.children) {
        const templateChildJsonDefinition = templateJsonDefinition.tag.children[childKey];
        const templateChildHtmlElement = parseJsonTemplateToHtml(templateChildJsonDefinition);
        templateHtmlElement.appendChild(templateChildHtmlElement);
    }

    return templateHtmlElement;
}

