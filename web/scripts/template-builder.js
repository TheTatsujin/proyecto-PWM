import {logoutButtonAction, returnButtonDynamicRouting, updateHeaderWithUserSection} from "./session-manager.js";

document.addEventListener('DOMContentLoaded', async () =>
    templatesBuildAll()
        .then(_ => updateHeaderWithUserSection())
        .then(_ => returnButtonDynamicRouting())
        .then(_ => logoutButtonAction())
);


async function templatesBuildAll() {
    const allTemplateContainers = document.querySelectorAll(".template-container")
    for( const templateContainer of allTemplateContainers )
        await buildTemplateForElement(templateContainer);
}

async function buildTemplateForElement(targetElement){
    const templateId = targetElement.getAttribute("template-id");

    if (!templateId) console.error("No template id found for\n", targetElement);
    else {
        const template = await fetchTemplateFromFile(templateId);
        await buildTargetElementWithTemplate(targetElement, template);
    }
}

function fetchTemplateFromFile(templateFileName){
    return fetch(`../templates/${templateFileName}.html`)
        .catch(error => console.error(`Error fetching data from template ${templateFileName}: `, error))
        .then(response => response.text())
        .then(htmlText =>  new DOMParser().parseFromString(htmlText, 'text/html') )
        .then(templateDocument => templateDocument.querySelector("template"));
}


async function buildTargetElementWithTemplate(templateTargetElement, template){
    let templateDocumentFragment = template.content.cloneNode(true);
    let contentDataJsonList = [];
    const contentDataFileName = template.getAttribute("content-data-file");
    const sessionDataKey = template.getAttribute("content-session-data-key");


    if (contentDataFileName) contentDataJsonList = await fetchContentDataFromFile(contentDataFileName)
        .then(contentDataJsonParent => contentDataJsonParent[contentDataFileName]);
    else if (sessionDataKey) contentDataJsonList = [JSON.parse(sessionStorage.getItem(sessionDataKey))];


    templateDocumentFragment = buildAllTemplatesFromJson(templateDocumentFragment, contentDataJsonList);
    templateTargetElement.appendChild(templateDocumentFragment);

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
    if (contentDataList.length === 0) return templateDocumentFragment;

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
    const contentDataKey = elementEmpty.getAttribute("content-data-key");

    if (contentDataKey){
        if (contentDataKey === "image") elementEmpty.setAttribute("src", elementContentData[contentDataKey]);
        else elementEmpty.innerText = elementContentData[contentDataKey];
    }

    for (const child of Array.from(elementEmpty.children)) {
        elementEmpty.append(buildTemplateElementContent(child, elementContentData));
    }
    return elementEmpty;
}