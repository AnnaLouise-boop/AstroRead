import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const consultations = pgTable("consultations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  birthDate: text("birth_date").notNull(),
  birthTime: text("birth_time"),
  timeUnknown: boolean("time_unknown").default(false),
  birthPlace: text("birth_place").notNull(),
  gender: text("gender"),
  contactEmail: text("contact_email"),
  contactPhone: text("contact_phone"),
  currentCity: text("current_city"),
  topics: text("topics").array().default([]),
  questions: text("questions"),
  relationshipStatus: text("relationship_status"),
  occupation: text("occupation"),
  industry: text("industry"),
  timeline: text("timeline"),
  budget: text("budget"),
  urgency: integer("urgency").default(3),
  attachments: text("attachments"),
  consent: boolean("consent").default(false),
  language: text("language").default("en"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  consultationId: varchar("consultation_id").references(() => consultations.id),
  serviceType: text("service_type").notNull(), // "basic", "comprehensive", "mastery"
  appointmentDate: text("appointment_date").notNull(),
  appointmentTime: text("appointment_time").notNull(),
  status: text("status").default("pending"), // "pending", "confirmed", "completed", "cancelled"
  price: integer("price").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  createdAt: true,
}).extend({
  topics: z.array(z.string()).default([]),
  urgency: z.number().min(1).max(5).default(3),
  consent: z.boolean(),
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true,
}).extend({
  price: z.number().positive(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultations.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;
