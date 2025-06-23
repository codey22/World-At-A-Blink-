import "./Contact.css";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handelFormData = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <div className={`contact-wrapper ${isDark ? "dark" : "light"}`}>
      <form action={handelFormData}>
        <h2>Contact Us</h2>

        <label>Name:</label>
        <input type="text" required autoComplete="off" placeholder="Enter Your Name Here" name="username" />

        <label>Email:</label>
        <input type="email" required autoComplete="off" placeholder="Enter Your Email Here" name="useremail" />

        <label>Mobile:</label>
        <input type="tel" required autoComplete="off" placeholder="Enter Your Number Here" name="userphone" />

        <label>Query:</label>
        <textarea name="usermsg" required rows={10} placeholder="Enter Your Query Here"></textarea>

        <button className="btn" type="submit">SEND</button>
      </form>
    </div>
  );
};

export default Contact;
