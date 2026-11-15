// ======================
// LOAD LEADS
// ======================

async function loadLeads() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/leads"
        );

        const leads = await response.json();

        const tableBody =
            document.getElementById("leadTableBody");

        tableBody.innerHTML = "";

        leads.forEach((lead) => {

            tableBody.innerHTML += `
                <tr>
                    <td>${lead.id}</td>
                    <td>${lead.company_name}</td>
                    <td>${lead.contact_person}</td>
                    <td>${lead.email}</td>
                    <td>${lead.phone || ""}</td>
                    <td>${lead.source || ""}</td>
                    <td>${lead.status}</td>
                </tr>
            `;

        });

    } catch (error) {

        console.error(error);

    }

}

// ======================
// LOAD DOCUMENTS
// ======================

async function loadDocuments() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/documents"
        );

        const documents = await response.json();

        const documentList =
            document.getElementById("documentList");

        documentList.innerHTML = "";

        documents.forEach((doc) => {

            documentList.innerHTML += `
                <li>
                    ${doc.file_name}
                </li>
            `;

        });

    } catch (error) {

        console.error(error);

    }

}

// ======================
// CREATE LEAD
// ======================

document
    .getElementById("leadForm")
    .addEventListener("submit", async (e) => {

        e.preventDefault();

        const lead = {

            company_name:
                document.getElementById("company").value,

            contact_person:
                document.getElementById("contact").value,

            email:
                document.getElementById("email").value,

            phone:
                document.getElementById("phone").value,

            source:
                document.getElementById("source").value,

            owner: "Mawit",

            status: "New"

        };

        try {

            await fetch(
                "http://localhost:5000/api/leads",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(lead)
                }
            );

            document
                .getElementById("leadForm")
                .reset();

            loadLeads();

        } catch (error) {

            console.error(error);

        }

    });

// ======================
// UPLOAD DOCUMENT
// ======================

document
    .getElementById("uploadForm")
    .addEventListener("submit", async (e) => {

        e.preventDefault();

        const fileInput =
            document.getElementById("document");

        const formData = new FormData();

        formData.append(
            "document",
            fileInput.files[0]
        );

        try {

            const response = await fetch(
                "http://localhost:5000/api/documents/upload",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result =
                await response.json();

            alert("File uploaded successfully!");

            console.log(result);

            loadDocuments();

        } catch (error) {

            console.error(error);

            alert("Upload failed");

        }

    });

// ======================
// INITIAL PAGE LOAD
// ======================

loadLeads();
loadDocuments();