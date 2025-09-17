
const Form3InputInsurer1 = ({ updateForm3a, form3a }) => {
    return {
        insurer1Input: {
            onChange: updateForm3a,
            name: "insurer1",
            type: "select",
            value: form3a.insurer1 ?? "",
            placeholder: "Insurer 1",
            options: [
                { label: "21st Century Insurance Company", value: "21st Century Insurance Company" },
                { label: "Accredited Surety and Casualty Company, Inc.", value: "Accredited Surety and Casualty Company, Inc." },
            ],
        },

        contactedThrough1Input: {
            onChange: updateForm3a,
            name: "contactedThrough1",
            type: "select",
            value: form3a.contactedThrough1 ?? "",
            placeholder: "Contacted Through",
            options: [
                { label: "E-mail / Phone", value: "email-phone" },
                { label: "Online", value: "online" },
            ],
        },

        fullContactName1Input: {
            onChange: updateForm3a,
            name: "fullContactName1",
            type: "text",
            value: form3a.fullContactName1 ?? "",
            placeholder: "Full Contact Name",
        },

        emailPhone1Input: {
            onChange: updateForm3a,
            name: "emailPhone1",
            type: "text",
            value: form3a.emailPhone1 ?? "",
            placeholder: "Phone Number or Email",
        },

        website1Input: {
            onChange: updateForm3a,
            name: "website1",
            type: "text",
            value: form3a.website1 ?? "",
            placeholder: "Website",
        },

        naic1Input: {
            onChange: updateForm3a,
            name: "naic1",
            type: "text",                // keep text, preserves leading zeros
            value: form3a.naic1 ?? "",
            placeholder: "NAIC",
            pattern: "\\d{3,10}",        // optional: simple numeric pattern
            inputMode: "numeric",        // mobile numeric keypad hint
        },

        date1Input: {
            onChange: updateForm3a,
            name: "date1",
            type: "month",               // expects YYYY-MM
            value: form3a.date1 ?? "",
            placeholder: "Date (YYYY-MM)",
        },
    };
};

export default Form3InputInsurer1;
