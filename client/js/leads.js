async function loadLeads() {
    try {
        const response =
            await fetch("http://localhost:5000/api/leads");

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
                    <td>${lead.status}</td>
                </tr>
            `;
        });

    } catch (error) {
        console.error(error);
    }
}

document
.getElementById("leadForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

 const lead = {
    company_name: document.getElementById("company").value,
    contact_person: document.getElementById("contact").value,
    email: document.getElementById("email").value,

    phone: "",

    source: "Manual Entry",

    owner: "Mawit",

    status: "New"
};

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
});

loadLeads();