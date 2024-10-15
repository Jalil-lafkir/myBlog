const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:5173/auth/google/callback",
  "http://localhost:3000/auth/google/callback",
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
