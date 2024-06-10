import { Schema, model, models } from "mongoose";

const EntitySchema = new Schema(
  {
    name: { type: "string", required: true },
    fields: { type: Map, of: Schema.Types.Mixed }, // This allows for a flexible structure
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const Entity = models.Entity || model("Entity", EntitySchema);

export default Entity;
