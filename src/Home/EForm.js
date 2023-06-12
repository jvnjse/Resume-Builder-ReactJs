import React, { useState } from "react";

function EForm() {
  const [forms, setForms] = useState([
    { id: 1, field1: "", field2: "", field3: "" },
  ]);

  const handleAddForm = () => {
    const newForm = {
      id: forms.length + 1,
      field1: "",
      field2: "",
      field3: "",
    };
    setForms([...forms, newForm]);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedForms = forms.map((form) => {
      if (form.id === id) {
        return { ...form, [name]: value };
      }
      return form;
    });
    setForms(updatedForms);
  };

  const renderForms = () => {
    return forms.map((form) => (
      <div key={form.id}>
        <input
          type="text"
          name="field1"
          value={form.field1}
          onChange={(e) => handleChange(e, form.id)}
          placeholder="Field 1"
        />
        <input
          type="text"
          name="field2"
          value={form.field2}
          onChange={(e) => handleChange(e, form.id)}
          placeholder="Field 2"
        />
        <input
          type="text"
          name="field3"
          value={form.field3}
          onChange={(e) => handleChange(e, form.id)}
          placeholder="Field 3"
        />
      </div>
    ));
  };

  return (
    <div>
      {renderForms()}
      <button onClick={handleAddForm}>Add Form</button>
    </div>
  );
}

export default EForm;
