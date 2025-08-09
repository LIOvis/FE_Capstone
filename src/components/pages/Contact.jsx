const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function SendMessage() {
  let empty = false;
  const formItems = document.getElementsByClassName("contact-form-item");
  const contactFormItems = document.getElementsByClassName("contact-form-item");
  const sendButton = document.querySelector(".contact-form-button");
  let message = "";

  for (let i = 0; i < 4; i++) {
    if (i > 0 && empty) {
      empty = true;
    } else if (!formItems[i].value) {
      empty = true;
    } else {
      empty = false;
    }
  }

  if (empty) {
    message = document.querySelector(".message-incomplete");
  } else {
    message = document.querySelector(".message-sent");
  }

  for (let i = 0; i < 4; i++) {
    contactFormItems[i].value = "";
  }

  message.classList.remove("hidden");
  sendButton.disabled = true;
  await delay(2000);
  message.classList.add("hidden");
  sendButton.disabled = false;
}

export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      <form className="contact-form">
        <label htmlFor="first-name">First Name: </label>
        <input type="text" name="first-name" className="contact-form-item" />
        <label htmlFor="last-name">Last Name: </label>
        <input type="text" name="last-name" className="contact-form-item" />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" className="contact-form-item" />
        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          className="contact-form-item"
          rows={1}
        ></textarea>
        <button
          type="button"
          className="button contact-form-button"
          onClick={SendMessage}
          disabled={false}
        >
          Send
        </button>
        <div className="send-messages">
          <div className="message-sent hidden">Message Sent!</div>
          <div className="message-incomplete hidden">
            Please Fill Out All Fields
          </div>
        </div>
      </form>
    </div>
  );
}
