document.addEventListener('DOMContentLoaded', () =>
    document.querySelectorAll(".template-container")
        .forEach(targetElement => buildTemplateForElement(targetElement))
);


function buildTemplateForElement(targetElement){
    const templateId = targetElement.getAttribute("template-id");

    if (!templateId) {
        console.error("No template id found for\n", targetElement);
    }
    else {
        fetchTemplateFromFile(templateId)
            .then(template => buildTargetElementWithTemplate(targetElement, template));
    }
}

function fetchTemplateFromFile(templateFileName){
    return fetch(`../templates/${templateFileName}.html`)
        .catch(error => console.error(`Error fetching data from template ${templateFileName}: `, error))
        .then(response => response.text())
        .then(htmlText =>  new DOMParser().parseFromString(htmlText, 'text/html') )
        .then(templateDocument => templateDocument.querySelector("template"));
}


function buildTargetElementWithTemplate(templateTargetElement, template){
    const templateDocumentFragment = template.content.cloneNode(true);
    const contentDataFileName = template.getAttribute("content-data-file");
    (!contentDataFileName) ? templateTargetElement.appendChild(templateDocumentFragment) :
        fetchContentDataFromFile(contentDataFileName)
            .then(contentDataJson => buildAllTemplatesFromJson(templateDocumentFragment, contentDataJson[contentDataFileName]))
            .then(allTemplatesWithContentDataDocumentFragment =>
                templateTargetElement.appendChild(allTemplatesWithContentDataDocumentFragment)
            );

}

function fetchContentDataFromFile(contentDataFileName) {
    return fetch(`../json/data/${contentDataFileName}.json`)
        .then(response => response.json()).
        catch(error => {
            console.error(`Error fetching data from ${contentDataFileName} file: `, error)
            return {};
        });
}

function buildAllTemplatesFromJson(templateDocumentFragment, contentDataList){
    const allContentDataTemplatesDocumentFragment = document.createDocumentFragment();

    for (const contentData of contentDataList) {
        const contentDataDocumentFragment = document.createDocumentFragment();
        for (const child of templateDocumentFragment.children) {
            contentDataDocumentFragment.appendChild(buildTemplateElementContent(child.cloneNode(true), contentData));
        }

        allContentDataTemplatesDocumentFragment.appendChild(contentDataDocumentFragment);
    }

    return allContentDataTemplatesDocumentFragment;
}


function buildTemplateElementContent(elementEmpty, elementContentData){
    if (!elementContentData) return elementEmpty;
    const contentDataKey = elementEmpty.getAttribute("data-content-key");

    if (contentDataKey){
        if (contentDataKey === "image") elementEmpty.setAttribute("src", elementContentData[contentDataKey]);
        else elementEmpty.innerText = elementContentData[contentDataKey];
    }

    for (const child of Array.from(elementEmpty.children)) {
        elementEmpty.append(buildTemplateElementContent(child, elementContentData));
    }
    return elementEmpty;
}