import { fetchTemplateFromFile, buildTargetElementWithTemplate } from "./template-builder.js";

const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", async function (event) {
    const selectedValue = event.target.value;
    const eventExtension = selectedValue[0];
    let ticketTableArticle = document.querySelector("article[template-id=\"ticket-table\"]");
    const templateId = "ticket-table"
    const template = await fetchTemplateFromFile(templateId);

    if (template) {
        template.setAttribute("content-data-file", `${templateId}-${eventExtension}`);
        ticketTableArticle.innerHTML = '';
        await buildTargetElementWithTemplate(ticketTableArticle, template);
    }
});