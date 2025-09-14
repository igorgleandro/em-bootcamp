 const Form2InputList = ({ updateForm2, form2 }) => {
  return {
    nameInsuredInput: {
      onChange: updateForm2,
      name: "nameInsured",
      type: "text",
      value: form2.nameInsured,
      placeholder: "Name of Insured",
    },

    descriptionRiskInput: {
      onChange: updateForm2,
      name: "descriptionRisk",
      type: "text",
      value: form2.descriptionRisk,
      placeholder: "Description Risk",
    },

    coverageCodeInput: {
      onChange: updateForm2,
      name: "coverageCode",
      type: "select",
      value: form2.coverageCode,
      placeholder: "Coverage Code",
      options: [
        { label: "Basic", value: "BASIC" },
        { label: "Standard", value: "STANDARD" },
        { label: "Premium", value: "PREMIUM" },
      ],
        },
  };
};

export default Form2InputList