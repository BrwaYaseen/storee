
import { PRODUCT_CATEGORIES } from "@/config";
import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
    slug:"products",
    admin: {
        useAsTitle: "name",
    },
    access: {},
    fields: [
        {
            name: "user",
            type: "relationship",
            relationTo: "users",
            required: true,
            hasMany: false,
            admin: {
                condition: () => false
            }
        },
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true
        },
        {
            name: "discription",
            type: "textarea",
            label:"Product details"
        },
        {
            name: "price",
            label: "Price in USD",
            min:0,
            max:1000,
            type: "number",
            required: true
        },
        {
            name: "category",
            label: "Category",
            type: "select",
            options: PRODUCT_CATEGORIES.map(({label, value}) => ({label, value})),
            required: true,
        },
        {
            name: "product_files",
            label: "Product File(s)",
            type: "relationship",
            required: true,
            relationTo: "product_files",
            hasMany:false
        },
        {
            name: "approvedForSale",
            label:"Product_Status",
            type: "select",
            defaultValue: "pending",
            access: {

            },
            options: [
                {
                    label: "Pending Verification",
                    value: "pending"
                },
                {
                    label: "Approved",
                    value: "approved"
                },
                {
                    label: "Denied",
                    value: "denied"
                }
            ]
        }

    ]
}
