import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./home.css";
import "./resume.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Resume from "./Resume";

function Home() {
  const [fullName, setFullName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const renderTags = () => {
    return tags.map((tag, index) => (
      <li key={index} className="tag">
        <span className="tag-title">{tag}</span>
        <span className="tag-close-icon" onClick={() => removeTags(index)}>
          x
        </span>
      </li>
    ));
  };

  const [eduforms, setEduForms] = useState([
    { id: 1, field1: "", field2: "", field3: "", field4: "" },
  ]);

  const [exeforms, setExeForms] = useState([
    { id: 1, field1: "", field2: "", field3: "", field4: "", field5: "" },
  ]);

  const EduhandleAddForm = () => {
    const newForm = {
      id: eduforms.length + 1,
      field1: "",
      field2: "",
      field3: "",
      field4: "",
    };
    setEduForms([...eduforms, newForm]);
  };

  const ExehandleAddForm = () => {
    const newForm = {
      id: exeforms.length + 1,
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
    };
    setExeForms([...eduforms, newForm]);
  };
  const EduhandleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedForms = eduforms.map((eduform) => {
      if (eduform.id === id) {
        return { ...eduform, [name]: value };
      }
      return eduform;
    });
    setEduForms(updatedForms);
  };
  const ExehandleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedForms = exeforms.map((exeform) => {
      if (exeform.id === id) {
        return { ...exeform, [name]: value };
      }
      return exeform;
    });
    setExeForms(updatedForms);
  };
  const renderEducationalForm = () => {
    return eduforms.map((eduform) => (
      <div key={eduform.id}>
        <h5>Education {eduform.id}</h5>
        <input
          type="text"
          name="field1"
          class="form-control"
          value={eduform.field1}
          onChange={(e) => EduhandleChange(e, eduform.id)}
          placeholder="Course or Education"
        />
        <div className="d-flex flex-row">
          <label>
            &nbsp;
            <input
              type="text"
              name="field2"
              class="form-control"
              value={eduform.field2}
              onChange={(e) => EduhandleChange(e, eduform.id)}
              placeholder="Institute Name"
            />
          </label>
          <label>
            From
            <input
              type="month"
              class="form-control"
              name="field3"
              value={eduform.field3}
              onChange={(e) => EduhandleChange(e, eduform.id)}
            />
          </label>
          <label>
            To
            <input
              type="month"
              class="form-control"
              name="field4"
              value={eduform.field4}
              onChange={(e) => EduhandleChange(e, eduform.id)}
            />
          </label>
        </div>
      </div>
    ));
  };
  const renderExperienceForm = () => {
    return exeforms.map((exeform) => (
      <div key={exeform.id}>
        <h5>Experience {exeform.id}</h5>
        <input
          type="text"
          name="field1"
          class="form-control"
          value={exeform.field1}
          onChange={(e) => ExehandleChange(e, exeform.id)}
          placeholder="Designation"
        />
        <div className="d-flex flex-row">
          <label>
            &nbsp;
            <input
              type="text"
              name="field2"
              class="form-control"
              value={exeform.field2}
              onChange={(e) => ExehandleChange(e, exeform.id)}
              placeholder="Company Name"
            />
          </label>
          <label>
            From
            <input
              type="date"
              class="form-control"
              name="field3"
              value={exeform.field3}
              onChange={(e) => ExehandleChange(e, exeform.id)}
            />
          </label>
          <label>
            To
            <input
              type="date"
              class="form-control"
              name="field4"
              value={exeform.field4}
              onChange={(e) => ExehandleChange(e, exeform.id)}
            />
          </label>
        </div>
        <textarea
          type="text"
          name="field5"
          class="form-control"
          value={exeform.field5}
          onChange={(e) => ExehandleChange(e, exeform.id)}
          placeholder="description"
        />
      </div>
    ));
  };

  return (
    <div className="container-fluid m-0 w-100">
      <div className="home row">
        <div className="name-form col">
          <div class="form-group">
            <div className="form-title">Personal Details</div>
            <label for="name">Full Name</label>
            <input
              type="name"
              class="form-control"
              id="name"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label for="role">Job Role</label>
            <input
              type="role"
              class="form-control"
              id="role"
              placeholder="Job Role"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
            />
            <span className="d-flex flex-row ">
              <label for="email">
                Email address
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label for="phone">
                Phone
                <input
                  type="number"
                  class="form-control"
                  id="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </span>
            <label for="description">Your description</label>
            <input
              type="description"
              class="form-control"
              id="description"
              placeholder="Your description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="form-title">Skills</div>
            <div className="tags-input">
              <ul id="tags">{renderTags()}</ul>
              <input
                type="text"
                className="skill-input"
                onKeyUp={(event) =>
                  event.key === "Enter" ? addTags(event) : null
                }
                placeholder="Press enter to add skills"
              />
            </div>

            <div></div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="form-title">Educational Details</div>
              <i onClick={EduhandleAddForm} className="fa fa-circle-plus"></i>
            </div>
            <div>{renderEducationalForm()}</div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="form-title">Experience Details</div>
              <i onClick={ExehandleAddForm} className="fa fa-circle-plus"></i>
            </div>
            <div>{renderExperienceForm()}</div>
          </div>
        </div>
        <div className="resume-view col">
          <Resume
            fullName={fullName}
            jobRole={jobRole}
            email={email}
            phone={phone}
            description={description}
            eduforms={eduforms}
            exeforms={exeforms}
            tags={tags}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
