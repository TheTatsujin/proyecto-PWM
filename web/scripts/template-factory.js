// MAIN
fillDocumentWithTemplates();

// FUNCTIONS
const GET_NULL_ELEMENT = function () {
    const nullElement = document.createElement("div")
    nullElement.classList.add("NULL_ELEMENT");
    return nullElement;
}

function fillDocumentWithTemplates(){
    const documentEmptyElementList = document.querySelectorAll(".template");
    for(const documentEmptyElement of documentEmptyElementList){
        const templateName = documentEmptyElement.getAttribute("template-name");

        fetchTemplateJsonDefinition(templateName).then(templateJsonDefinition => {
            const newTemplateElement = new DocumentFragment()
            newTemplateElement.appendChild(parseJsonTemplateToHtml(templateJsonDefinition));
            documentEmptyElement.appendChild(newTemplateElement);
        }).catch(error => {
            console.error(`Error loading template "${templateName}": `, error)
            documentEmptyElement.appendChild(GET_NULL_ELEMENT());
        });
    }
}

function fetchTemplateJsonDefinition(templateName){
    console.log(`Fetching template: ${templateName}\n`);
    console.log(`directory: ../json/templates/${templateName}.json\n`);

    return fetch(`../json/templates/template-${templateName}.json`).then(response => response.json());
}

function parseJsonTemplateToHtml(templateJsonDefinition) {
    if (!templateJsonDefinition || !templateJsonDefinition.tag || !templateJsonDefinition.tag.name)
        return GET_NULL_ELEMENT();

    const templateHtmlElement = document.createElement(templateJsonDefinition.tag.name);

    if (templateJsonDefinition.tag.hasOwnProperty("id"))
        templateHtmlElement.id = templateJsonDefinition.tag.id;

    for (const templateJsonTagClass of templateJsonDefinition.tag.classList)
        templateHtmlElement.classList.add(templateJsonTagClass);

    if (templateJsonDefinition.tag.hasOwnProperty("innerText"))
        templateHtmlElement.innerText = templateJsonDefinition.tag.innerText;

    for (const childKey in templateJsonDefinition.tag.childList) {
        const templateChildJsonDefinition = templateJsonDefinition.tag.childList[childKey];
        const templateChildHtmlElement = parseJsonTemplateToHtml(templateChildJsonDefinition);
        templateHtmlElement.appendChild(templateChildHtmlElement);
    }

    return templateHtmlElement;
}

