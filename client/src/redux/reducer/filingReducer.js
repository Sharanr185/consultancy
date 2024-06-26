import f1 from '../FilingImage/f1.webp'
import f2 from '../FilingImage/f2.webp'
import f3 from '../FilingImage/f3.webp'
import f4 from '../FilingImage/f4.webp'
import f5 from '../FilingImage/f5.webp'
import f6 from '../FilingImage/f6.webp'
import f7 from '../FilingImage/f7.webp'
import f8 from '../FilingImage/f8.webp'
import f9 from '../FilingImage/f9.webp'
import f10 from '../FilingImage/f10.webp'
import f11 from '../FilingImage/f11.webp'
import f12 from '../FilingImage/f12.webp'
import f13 from '../FilingImage/f13.webp'
import f14 from '../FilingImage/f14.webp'
import f15 from '../FilingImage/f15.webp'
import f16 from '../FilingImage/f16.webp'
import f17 from '../FilingImage/f17.webp'
import f18 from '../FilingImage/f18.webp'
import f19 from '../FilingImage/f19.webp'
import f20 from '../FilingImage/f20.webp'
import f21 from '../FilingImage/f21.webp'

const products = [{
    id: 0,
    name: "Envelopes",
    description: "A4 25 units",
    product_image: f1,
    price: 24.00,
    qty: 100,
    code: 22
},
{
    id: 1,
    name: "Binder Cover",
    description: "A4",
    product_image: f2,
    price: 6.90,
    qty: 100,
    code: 23
},
{
    id: 2,
    name: "Office Binder",
    description: "A4 8 cm spine",
    product_image: f3,
    price: 12.90,
    qty: 100,
    code: 24
},
{
    id: 3,
    name: "Office Binder",
    description: "A4 5 cm spine",
    product_image: f4,
    price: 12.90,
    qty: 100,
    code: 25
},
{
    id: 4,
    name: "Catalog Box",
    description: "Plastic",
    product_image: f5,
    price: 14.90,
    qty: 100,
    code: 26
},
{
    id: 5,
    name: "Pressboard Clipboard",
    description: "A4",
    product_image: f6,
    price: 21.90,
    qty: 100,
    code: 27
},
{
    id: 6,
    name: "Document Wallet",
    description: "100 pages A4",
    product_image: f7,
    price: 33.90,
    qty: 100,
    code: 28
},
{
    id: 7,
    name: "Plastic Dividers",
    description: "12 units A4",
    product_image: f8,
    price: 16.90,
    qty: 100,
    code: 29
},
{
    id: 8,
    name: "Plastic Dividers",
    description: "7 units A4",
    product_image: f9,
    price: 11.90,
    qty: 100,
    code: 30
},
{
    id: 9,
    name: "Accordion File",
    description: "Mini 13 compartments",
    product_image: f10,
    price: 18.90,
    qty: 100,
    code: 31
},
{
    id: 10,
    name: "Rectangular Divider",
    description: "Pack of 100 units",
    product_image: f11,
    price: 11.90,
    qty: 100,
    code: 32
},
{
    id: 11,
    name: "Index",
    description: "30 pockets A5",
    product_image: f12,
    price: 19.90,
    qty: 100,
    code: 33
},
{
    id: 12,
    name: "Office Binder",
    description: "Cardboard",
    product_image: f13,
    price: 8.50,
    qty: 100,
    code: 34
},
{
    id: 13,
    name: "Binder",
    description: "Plastic A4",
    product_image: f14,
    price: 21.90,
    qty: 100,
    code: 35
},
{
    id: 14,
    name: "Binder",
    description: "Plastic A5",
    product_image: f15,
    price: 11.90,
    qty: 100,
    code: 36
},
{
    id: 15,
    name: "Compartment File",
    description: "12 compartments",
    product_image: f16,
    price: 24.90,
    qty: 100,
    code: 37
},
{
    id: 16,
    name: "Plastic Bag",
    description: "A4 Zip Closure",
    product_image: f17,
    price: 3.50,
    qty: 100,
    code: 38
},
{
    id: 17,
    name: "Cardboard Folder",
    description: "A4 EXACOMPTA",
    product_image: f18,
    price: 7.90,
    qty: 100,
    code: 39
},
{
    id: 18,
    name: "Pressboard Clipboard",
    description: "Plastic A4",
    product_image: f19,
    price: 19.90,
    qty: 100,
    code: 40
},
{
    id: 19,
    name: "5-Drawer Box",
    description: "Colorful Wide",
    product_image: f20,
    price: 219.90,
    qty: 100,
    code: 41
},
{
    id: 20,
    name: "4-Drawer Box",
    description: "ARDA MY DESK",
    product_image: f21,
    price: 149.90,
    qty: 100,
    code: 42
}
]

const filingReducer = (state = products, action) => {
    if (action.type === "DECREASE_QTY_PRODUCT") {
        const index = action.i;
        const newArray = [...state];
        newArray[index].qty = action.payload;
        state = newArray;
    }
    if (action.type === "ADD_QTY_PRODUCT") {
        const index = action.i;
        const newArray = [...state];
        newArray[index].qty = action.payload;
        state = newArray;
    }
    return state
};
export default filingReducer;
