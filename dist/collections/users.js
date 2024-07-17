"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token;
                return "\n          <div style=\"font-family: Arial, sans-serif; text-align: center; padding: 20px;\">\n            <h2 style=\"color: #4CAF50;\">Verify Your Account</h2>\n            <p>Thank you for registering! Please verify your account by clicking the button below:</p>\n            <a href='".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/verify-email?token=").concat(token, "' \n               style=\"display: inline-block; padding: 10px 20px; color: white; background-color: #4CAF50; text-decoration: none; border-radius: 5px;\">\n              Verify Account\n            </a>\n          </div>\n        ");
            },
        },
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
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
