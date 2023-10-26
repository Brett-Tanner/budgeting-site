import {
  boolean,
  date,
  foreignKey,
  index,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
} from "drizzle-orm/pg-core";

export const budgets = pgTable("budgets", {
  id: serial("id").primaryKey(),
  start: date("start").notNull(),
  end: date("end").notNull(),
  savingsGoal: integer("savings_goal").notNull(),
  income: integer("income").notNull(),
  categoryBudgets: jsonb("category_budgets"),
  userId: integer("user_id").references(() => users.id),
});

export const categories = pgTable(
  "categories",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    parentId: integer("parent_id"),
  },
  (table) => {
    return {
      parentReference: foreignKey({
        columns: [table.parentId],
        foreignColumns: [table.id],
      }),
    };
  }
);

export const transactions = pgTable(
  "transactions",
  {
    id: serial("id").primaryKey(),
    date: date("date").notNull(),
    description: text("description").notNull(),
    magnitude: integer("magnitude").notNull(),
    cash: boolean("cash").notNull().default(false),
    categoryId: integer("category_id").references(() => categories.id),
  },
  (table) => {
    return {
      dateIndex: index("date_index").on(table.date),
      descriptionIndex: index("description_index").on(table.description),
    };
  }
);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
});
