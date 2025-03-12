// MAIN

buildAllPageTemplates();

// FUNCTIONS

function buildAllPageTemplates(){
    const templateList = document.querySelectorAll("template");
    for (const template of templateList){
        const templateDocumentFragment = template.content.cloneNode(true);
        const templateTargetID = template.getAttribute("target-id");
        const templateTargetElement = document.querySelector(`#${templateTargetID}`);
        const contentDataFileName = template.getAttribute("data-content-file");

        (!contentDataFileName) ? templateTargetElement.appendChild(templateDocumentFragment) :
        fetchContentDataFromFile(contentDataFileName)
            .then(contentDataFileJson => buildAllTemplatesFromJson(templateDocumentFragment, contentDataFileJson, contentDataFileName))
            .then(templateWithContentDataDocumentFragment =>
                templateTargetElement.appendChild(templateWithContentDataDocumentFragment)
            );
    }
}

// TODO: No añade todos los templates con los datos de json, solo el primero
function buildAllTemplatesFromJson(templateDocumentFragment, contentDataFileJson, contentDataFileName){
    const contentDataDocumentFragment = document.createDocumentFragment();

    for (const contentData of contentDataFileJson[contentDataFileName]) {
        console.log(contentData);
        for (const child of templateDocumentFragment.children) {

            contentDataDocumentFragment.appendChild(buildNodeContent(child, contentData));
        }
    }

    return contentDataDocumentFragment;
}


function fetchContentDataFromFile(contentDataFileName) {
    return fetch(`../json/data/${contentDataFileName}.json`)
        .then(response => response.json()).
        catch(error => {
            console.error(`Error fetching data from ${contentDataFileName} file: `, error)
            return {};
        });
}

function buildNodeContent(node, nodeContentData){
    if (!nodeContentData) return node;

    const contentDataKey = node.getAttribute("data-content-key");
    // TODO: En (../pages/template-loading-test.html) no carga el text de "artist-caption"
    if (contentDataKey){
        if (contentDataKey === "image") node.setAttribute("src", nodeContentData[contentDataKey]);
        else node.innerText = nodeContentData[contentDataKey];
    }

    for (const child of node.children) node.append(buildNodeContent(child, nodeContentData));
    return node;
}