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
                    <td>${lead.status}</td>
                </tr>
            `;
        });
    } catch (error) {
        console.error(error);
    }
}