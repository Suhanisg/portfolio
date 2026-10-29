import { useState } from "react";
import "./Uiuxdesign.css";

const flows = [
  {
    no: "01",
    title: "Onboarding",
    screens: 6,
    text: "A splash screen and four intro screens that explain the app's value up front, leading to Sign Up or Log In.",
    img: "/images/onboarding.png",
  },
  {
    no: "02",
    title: "Login & Password Recovery",
    screens: 5,
    text: "Login, forgot password, email/phone check, OTP verification and setting a new password.",
    img: "/images/login.png",
  },
  {
    no: "03",
    title: "Signup & Account Setup",
    screens: 7,
    text: "Personal details, OTP verification, account security, linking a payment method and personalization.",
    img: "/images/signup.png",
  },
  {
    no: "04",
    title: "Personalized Onboarding",
    screens: 9,
    text: "An 8-step questionnaire covering age, digital comfort, accessibility, language and payment habits, so the app adapts to each user.",
    img: "/images/personalization.png",
  },
  {
    no: "05",
    title: "Send Money",
    screens: 8,
    text: "From the dashboard to recipient, amount, payment method, review and PIN/biometric confirmation, with both success and failure states.",
    img: "/images/send-money.png",
  },
  {
    no: "06",
    title: "Bill Split",
    screens: 6,
    text: "Split a bill with friends: choose the split type, select contacts, enter the amount, review, and handle request sent or failed states.",
    img: "/images/bill-split.png",
  },
];

const stats = [
  { n: "41", l: "Mobile screens" },
  { n: "6", l: "Complete user flows" },
  { n: "2", l: "Security layers (OTP + biometric)" },
  { n: "2", l: "Flows with error states" },
];

export default function UIUXDesign() {
  const [zoom, setZoom] = useState(null);

  return (
    <section id="uiux" className="uiux">
      <div className="uiux-inner">
        <div className="uiux-label">
          <span className="uiux-num">05</span>
          <span className="uiux-line" />
          <span>UI/UX Design</span>
        </div>

        <h2 className="uiux-heading">
          Design thinking <em>before I code.</em>
        </h2>
        <p className="uiux-sub">
          I plan user flows and wireframes before writing any code, so the
          final product is simple, clear and easy to use.
        </p>

        {/* Case study intro */}
        <div className="uiux-case">
          <div className="uiux-case-text">
            <span className="uiux-tag-top">UI/UX Case Study</span>
            <h3>TrustPay — Fintech Payment App</h3>
            <p>
              End-to-end mobile wireframes for a payment app, from onboarding
              and secure signup to money transfers and bill splitting. The
              design focuses on trust, clarity and the fewest possible steps.
            </p>
            <div className="uiux-chips">
              <span>Balsamiq</span>
              <span>Wireframing</span>
              <span>User Flows</span>
              <span>Mobile UX</span>
            </div>
          </div>

          <div className="uiux-stats">
            {stats.map((s) => (
              <div className="uiux-stat" key={s.l}>
                <strong>{s.n}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Flow breakdown */}
        <div className="uiux-flows">
          {flows.map((f) => (
            <div className="uiux-flow" key={f.no}>
              <div className="uiux-flow-head">
                <span className="uiux-flow-no">{f.no}</span>
                <div>
                  <h4>
                    {f.title} <small>{f.screens} screens</small>
                  </h4>
                  <p>{f.text}</p>
                </div>
              </div>
              <div className="uiux-flow-img" onClick={() => setZoom(f.img)}>
                <img src={f.img} alt={f.title + " wireframes"} loading="lazy" />
              </div>
              <span className="uiux-hint">Click to enlarge</span>
            </div>
          ))}
        </div>
      </div>

      {zoom && (
        <div className="uiux-modal" onClick={() => setZoom(null)}>
          <img src={zoom} alt="Wireframe preview" />
        </div>
      )}
    </section>
  );
}