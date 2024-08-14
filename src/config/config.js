const Joi = require("joi");
const dotenv = require("dotenv");
const path = require("path");
const Mongoose = require("mongoose");
const schema = Mongoose.Schema;
const model = Mongoose.model;
const ObjectId = Mongoose.Schema.Types.ObjectId;

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object().keys({
  NODE_ENV: Joi.string().valid("production", "development", "test").required(),
  PORT: Joi.number().default(8000),
}).unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);


if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  schema,
  ObjectId,
  model,
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: envVars.PORT,
};
