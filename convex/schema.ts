import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    createdAt: v.number(),
  })
    .searchIndex("by_email", { searchField: "email" })
    .index("by_createdAt", ["createdAt"]),
});
