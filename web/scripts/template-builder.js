
// FUNCTIONS

function buildPageFromTemplates(){
    const templateList = document.querySelectorAll("template");
    for (const template of templateList){
        const templateClone = template.cloneNode(true);
        const templateTargetID = template.getAttribute("target-id");
        const contentDataFileName = templateClone.getAttribute("content-data-file");

        (!contentDataFileName) ? document.querySelector(templateTargetID).appendChild(templateClone) :
        fetchContentDataFromFile(contentDataFileName)
            .then(contentData => buildNodeContent(templateClone, contentData))
            .then(templateCloneWithContentData => document.querySelector(templateTargetID).appendChild(templateCloneWithContentData));
    }
}


function fetchContentDataFromFile(contentDataFileName) {
    return fetch(`../json/${contentDataFileName}.json`)
        .then(response => response.json()).
        catch(error => {
            console.error(`Error fetching data from ${contentDataFileName} file: `, error)
            return {};
        });
}


function buildNodeContent(node, nodeContentData){
    if (!nodeContentData) return node;
    /*

        Fill with content data

    */
    for (const child of node.children) node.append(buildNodeContent(child));
    return node;
}