const allowedOrigins = [
  "https://mybloog-qlv9.onrender.com",
  "https://mybloog-qlv9.onrender.com/auth/google/callback",
];

const CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

export default CorsOptions;
