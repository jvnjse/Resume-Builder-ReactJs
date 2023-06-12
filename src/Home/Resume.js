import { useRef } from "react";
import React from "react";
import html2pdf from "html2pdf.js";

function Resume(props) {
  const {
    fullName,
    jobRole,
    email,
    phone,
    description,
    eduforms,
    exeforms,
    tags,
  } = props;
  console.log(eduforms);

  const renderEduObject = () => {
    return eduforms.map((item, index) => (
      <div key={index}>
        <div className="yui-u">
          <h2>{item.field1}</h2>
          <div className="d-flex flex-row justify-content-between">
            <h3>{item.field2}</h3>
            <h3>
              ({item.field3})-({item.field4})
            </h3>
          </div>
        </div>
      </div>
    ));
  };
  console.log("wwwww", tags);
  const renderExeObject = () => {
    return exeforms.map((item, index) => (
      <div key={index}>
        <div className="yui-u">
          <div className="job">
            <h2>{item.field1}</h2>
            <h3>{item.field2}</h3>
            <h4>
              ({item.field3})-({item.field4})
            </h4>
            <p>{item.field5}</p>
          </div>
        </div>
      </div>
    ));
  };

  const resumeRef = useRef(null);

  const handleDownloadPDF = () => {
    const element = resumeRef.current;

    // Configure the PDF options
    const options = {
      filename: { fullName } + ".pdf",
      jsPDF: { unit: "pt" },
      onePage: true,
      image: { type: "pdf", quality: 10.0 },
      html2canvas: { scale: 0.5, dpi: 700 },
    };

    // Generate the PDF
    html2pdf().set(options).from(element).save();
  };
  return (
    <div className="resume-body">
      <button className="download-btn" onClick={handleDownloadPDF}>
        Download PDF
      </button>
      <div id="doc2" className="yui-t7" ref={resumeRef}>
        <div id="inner">
          <div id="hd">
            <div className="yui-gc">
              <div className="yui-u first">
                <h1>{fullName}</h1>
                <h2>{jobRole}</h2>
              </div>

              <div className="yui-u">
                <div className="contact-info">
                  {/* <h3>
                  <a id="pdf" href="#">
                    Download PDF
                  </a>
                </h3> */}
                  <h3>
                    <a href="mailto:{email}">
                      {email}
                      {/* {eduforms} */}
                    </a>
                  </h3>
                  <h3>{phone}</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="bd">
            <div id="yui-main">
              <div className="yui-b">
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Profile</h2>
                  </div>
                  <div className="yui-u">
                    <p className="enlarge">{description}</p>
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Skills</h2>
                  </div>
                  <div className="yui-u">
                    {tags.map((tag) => (
                      <div className="talent">
                        <h3>{tag}</h3>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Experience</h2>
                  </div>
                  {renderExeObject()}
                </div>

                <div className="yui-gf last">
                  <div className="yui-u first">
                    <h2>Education</h2>
                  </div>
                  {renderEduObject()}
                </div>
              </div>
            </div>
          </div>

          <div id="ft">
            <p>
              {fullName} &mdash; <a href="{email}">{email}</a> &mdash; {phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
