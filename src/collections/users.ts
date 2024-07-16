import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `
          <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
            <h2 style="color: #4CAF50;">Verify Your Account</h2>
            <p>Thank you for registering! Please verify your account by clicking the button below:</p>
            <a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}' 
               style="display: inline-block; padding: 10px 20px; color: white; background-color: #4CAF50; text-decoration: none; border-radius: 5px;">
              Verify Account
            </a>
          </div>
        `;
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      defaultValue: "user",
      required: true,
      admin: {},
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
