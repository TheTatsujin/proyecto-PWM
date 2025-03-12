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
            .then(contentDataJson => buildAllTemplatesFromJson(templateDocumentFragment, contentDataJson[contentDataFileName]))
            .then(allTemplatesWithContentDataDocumentFragment =>
                templateTargetElement.appendChild(allTemplatesWithContentDataDocumentFragment)
            );
    }
}

function buildAllTemplatesFromJson(templateDocumentFragment, contentDataList){
    const allContentDataTemplatesDocumentFragment = document.createDocumentFragment();

    for (const contentData of contentDataList) {
        const contentDataDocumentFragment = document.createDocumentFragment();
        for (const child of templateDocumentFragment.children) {
            contentDataDocumentFragment.appendChild(buildElementContent(child.cloneNode(true), contentData));
        }

        allContentDataTemplatesDocumentFragment.appendChild(contentDataDocumentFragment);
    }

    return allContentDataTemplatesDocumentFragment;
}


function fetchContentDataFromFile(contentDataFileName) {
    return fetch(`../json/data/${contentDataFileName}.json`)
        .then(response => response.json()).
        catch(error => {
            console.error(`Error fetching data from ${contentDataFileName} file: `, error)
            return {};
        });
}

function buildElementContent(elementEmpty, elementContentData){
    if (!elementContentData) return elementEmpty;
    const contentDataKey = elementEmpty.getAttribute("data-content-key");

    if (contentDataKey){
        if (contentDataKey === "image") elementEmpty.setAttribute("src", elementContentData[contentDataKey]);
        else elementEmpty.innerText = elementContentData[contentDataKey];
    }

    for (const child of Array.from(elementEmpty.children)) {
        elementEmpty.append(buildElementContent(child, elementContentData));
    }
    return elementEmpty;
}