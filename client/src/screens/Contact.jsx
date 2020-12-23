import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <div className="contact">
            <div className="contactbox">
          <h2 className="contacttitle">Contact Me</h2>

          <section >
            <form
              className="contactform"
              onSubmit={this.submitForm}
            //   action="https://formspree.io/f/xleopwrv"
              method="POST"
            >
              <label className="email">EMAIL: </label>
              <input className="input" type="email" name="email" />
              <label className="email">MESSAGE: </label>
              <input className="msg" type="text" name="message" />
              {status === "SUCCESS" ? (
                <p>Thanks for reaching out!</p>
              ) : (
                <button className="submit">SUBMIT</button>
              )}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
              <div>
                <button className="resume">
                  <a
                    className="resume"
                    rel="noreferrer"
                    target="_blank"
                    // href="https://drive.google.com/file/d/1UnPgA7o2O_FJgEB0UjqFFTpmE54zExSs/view?usp=sharing"
                  >
                    RESUME
                  </a>
                </button>
              </div>
            </form>
          </section>
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
