import p1i1 from './p1i1.jpg'
import p1i2 from './p1i2.jpg'
import p2i1 from './p2i1.jpg'
import p2i2 from './p2i2.jpg'
import p3i1 from './p3i1.jpg'
import p4i1 from './p4i1.jpg'
import p4i2 from './p4i2.jpg'
import p4i3 from './p4i3.jpg'
import p5i1 from './p5i1.jpg'
import p5i2 from './p5i2.jpg'
import p6i1 from './p6i1.jpg'

import logo from './logo.jpg'
import searchIcon from './searchIcon.jpg'
import profile from './profile.jpg'
import cartIcon from './cartIcon.jpg'
import menuIcon from './menuIcon.jpg'
import dropdown from './dropdownIcon.jpg'
import hero from './hero.jpg'
import exchange from './exchange.jpg'
import quality from './quality.jpg'
import support from './support.jpg'
import crossIcon from './crossIcon.jpg'
import starIcon from './starIcon.jpg'
import starDullIcon from './starDullIcon.jpg'

export const assets = {
    logo,
    searchIcon,
    profile,
    cartIcon,
    menuIcon,
    dropdown,
    hero,
    exchange,
    quality,
    support,
    crossIcon,
    starIcon,
    starDullIcon
}

export const products = [
    {
        _id : "aa",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting",
        price: 100,
        image: [p1i1, p1i2],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "ab",
        name: "Men Slim Fit Casual Shirt",
        description: "A comfortable slim-fit cotton shirt for casual outings.",
        price: 250,
        image: [p2i1, p2i2],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716635355448,
        bestseller: false
    },
    {
        _id: "ac",
        name: "Unisex Running Shoes",
        description: "Lightweight and durable running shoes for everyday training.",
        price: 1200,
        image: [p3i1],
        category: "Footwear",
        subCategory: "Winterwear",
        sizes: ["7", "8", "9", "10"],
        date: 1716636355448,
        bestseller: true
    },
    {
        _id: "ad",
        name: "Kids Printed Cotton T-Shirt",
        description: "Soft cotton t-shirt with fun cartoon prints for kids.",
        price: 150,
        image: [p4i1, p4i2, p4i3],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["2-3Y", "3-4Y", "4-5Y"],
        date: 1716637355448,
        bestseller: true
    },
    {
        _id: "ae",
        name: "Women Denim Jacket",
        description: "Trendy denim jacket with button closure and pockets.",
        price: 800,
        image: [p5i1, p5i2],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638355448,
        bestseller: false
    },
    {
        _id: "af",
        name: "Men Track Pants",
        description: "Comfortable track pants with elastic waistband for workouts.",
        price: 500,
        image: [p6i1],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716639355448,
        bestseller: false
    }

]