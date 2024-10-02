const GenerateOTP = () => {
  const OTP = String(Math.floor(Math.random() * 1000000));
  return OTP;
};

export default GenerateOTP;
