import React from "react";
import { useState } from "react";
import { api } from "../../api/axios";
import * as Form from "./FormElements";
import { usePopup } from "../../Context/PopupContext.jsx";

const SignupCard = () => {
  const [isVerifyPage, setIsVerifyPage] = useState(false);
  const [Gemail, setGemail] = useState();
  const { showPopup } = usePopup();

  const SignupForm = () => {
    const [SName, setSName] = useState();
    const [SEmail, setSEmail] = useState();
    const [SPassword, setSPassword] = useState();

    const handleChange = (e) => {
      e.target.id === "SName"
        ? setSName(e.target.value)
        : e.target.id === "SEmail"
        ? setSEmail(e.target.value)
        : setSPassword(e.target.value);
    };

    const handleSignup = async (event) => {
      event.preventDefault();
      const Credintials = JSON.stringify({
        name: SName,
        email: SEmail,
        password: SPassword,
      });

      try {
        const response = await api.post("/user/signup", Credintials, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setGemail(SEmail);
        setIsVerifyPage(true);
        showPopup(5, response.data.message);
      } catch (error) {
        showPopup(5, error.response.data.message);
      }
    };

    const InputsPropsArray = [
      {
        type: "text",
        id: "SName",
        placeholder: "Full Name",
        onChange: handleChange,
      },
      {
        type: "email",
        id: "SEmail",
        placeholder: "Example@gmail.com",
        onChange: handleChange,
      },
      {
        type: "password",
        id: "SPassword",
        placeholder: "Password",
        onChange: handleChange,
      },
      {
        type: "submit",
        id: "SSubmit",
        placeholder: "Undefind",
        value: "Sign Up",
      },
    ];

    const SignUpForm = {
      width: "100%",
      height: "100%",
      position: "absolute",
      backfaceVisibility: "hidden",
      transform: "rotateY(0deg)",
    };

    return (
      <div style={SignUpForm}>
        <div className="text-[23px] font-semibold text-[#5B5B5B] text-center my-4">
          Hello Friend!
        </div>
        <Form.Divider DividerText={"Sign up Using E-mail"} />
        <form className="my-10" onSubmit={handleSignup}>
          <Form.InputField InputElementProps={InputsPropsArray[0]} />
          <Form.InputField InputElementProps={InputsPropsArray[1]} />
          <Form.InputField InputElementProps={InputsPropsArray[2]} />
          <Form.InputChekBox />
          <Form.InputSubmit InputElementProps={InputsPropsArray[3]} />
        </form>
        <Form.Divider DividerText={"Or"} />
        <Form.SocialInput />
      </div>
    );
  };

  const VerifyingForm = () => {
    const [OTP, setOTP] = useState("");

    const handleChange = (e) => {
      const lookupObject = {
        char01: { next: "char02" },
        char02: { next: "char03" },
        char03: { next: "char04" },
        char04: { next: "char05" },
        char05: { next: "char06" },
        char06: { next: "char06" },
      };

      const currentFieldId = e.target.id;
      const currentFieldValue = e.target.value;
      const currentField = lookupObject[currentFieldId];

      if (currentField) {
        document.getElementById(currentField.next).focus();
        setOTP((prevOTP) => {
          const otpArray = prevOTP.split("");
          const index = parseInt(currentFieldId.replace("char", "")) - 1;
          otpArray[index] = currentFieldValue;
          return otpArray.join("");
        });
      }
    };

    const handelVerify = async (event) => {
      event.preventDefault();
      const Credintials = JSON.stringify({
        email: Gemail,
        OTP: OTP,
      });

      try {
        const response = await api.post("/user/VerifyAccount", Credintials, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        showPopup(5, response.data.message);
        setTimeout(() => {
          window.location.replace("https://mybloog-qlv9.onrender.com");
        }, 6000);
      } catch (error) {
        showPopup(5, error.response.data.message);
      }
    };

    const InputsPropsArray = [
      {
        type: "text",
        id: "char01",
        onChange: handleChange,
      },
      {
        type: "text",
        id: "char02",
        onChange: handleChange,
      },
      {
        type: "text",
        id: "char03",
        onChange: handleChange,
      },
      {
        type: "text",
        id: "char04",
        onChange: handleChange,
      },
      {
        type: "text",
        id: "char05",
        onChange: handleChange,
      },
      {
        type: "text",
        id: "char06",
        onChange: handleChange,
      },

      {
        type: "submit",
        id: "VSubmit",
        placeholder: "Undefind",
        value: "Verify",
      },
    ];

    const VerifingForm = {
      width: "100%",
      height: "100%",
      position: "absolute",
      backfaceVisibility: "hidden",
      transform: "rotateY(180deg)",
    };

    return (
      <div style={VerifingForm}>
        <div className="text-[23px] font-semibold text-[#5B5B5B] text-center my-4">
          Verify Your Account!
        </div>
        <div className="text-center">
          {" "}
          Enter the One-time Password (OTP), We Sent To Your Email Adress For
          verifying Your Account
        </div>
        <form className="my-10 " onSubmit={handelVerify}>
          <div className="w-full my-12 flex items-center justify-around">
            <Form.VerifyingField InputElementProps={InputsPropsArray[0]} />
            <Form.VerifyingField InputElementProps={InputsPropsArray[1]} />
            <Form.VerifyingField InputElementProps={InputsPropsArray[2]} />
            <Form.VerifyingField InputElementProps={InputsPropsArray[3]} />
            <Form.VerifyingField InputElementProps={InputsPropsArray[4]} />
            <Form.VerifyingField InputElementProps={InputsPropsArray[5]} />
          </div>

          <Form.InputSubmit InputElementProps={InputsPropsArray[6]} />
        </form>
        <Form.Divider DividerText={"Or"} />
        <Form.SocialInput />
      </div>
    );
  };

  const SignupCard = {
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    position: "absolute",
    transform: "rotateY(180deg)",
  };

  const ContainerCard = {
    position: "relative",
    transition: "all 2s",
    transformStyle: "preserve-3d",
    transform: isVerifyPage ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  return (
    <div style={SignupCard}>
      <div style={ContainerCard}>
        <SignupForm />
        <VerifyingForm />
      </div>
    </div>
  );
};

export default SignupCard;
