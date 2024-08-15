const { roles } = require("../config/roles");
const { schema, model, ObjectId } = require("../config/config");
const userSchema = new schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "{VALUE} is not a valid email!",
      },
      required: [true, "Email required"],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    phoneNumber: {
      type: String,
      validate: {
        validator: function (value) {
          return /^[0-9]{10}/.test(value);
        },
        message: "{VALUE} is not a valid 10 digit number!",
      },
      required: true,
    },
    mentorEducation: {
      type: String,
    },
    mentorExperience: {
      type: String,
    },
    state: {
      type: String,
      required: true,
    },
    roleName: {
      type: String,
      values: roles,
      default: "user",
      required: true,
    },
    userStatus: {
      type: Number,
      required: true,
    },
    accessTerms: {
      type: Boolean,
      default: 0,
      required: true,
    },
    createdBy: {
      type: String,
    },
    updatedBy: {
      type: String,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);
module.exports = User = model("users", userSchema);
