import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      validate: {
        validator: function (v) {
          return this.passwordValidation(v);
        },
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      },
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
    },
    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Custom password validation method
userSchema.methods.passwordValidation = function (password) {
  const hasUpperCase = /[A-Z]/.test(password); // Uppercase letter
  const hasLowerCase = /[a-z]/.test(password); // Lowercase letter
  const hasNumber = /\d/.test(password); // Number
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>~_\-+=`]/.test(password); // Special character

  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};

const User = mongoose.model("User", userSchema);

export default User;
