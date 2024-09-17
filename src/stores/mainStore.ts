import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => ({
        order:{},
        beverages:[
            'Coke',
            'Royal',
            'Mountain Dew',
            'coke',
            'Pineapple'
        ],
        foodlist:[
            {
                title:'Çhicken Salad',
                category:'Chicken',
                price:172,
                ratings:4,
                image:'fastfood/images/food1.png'
            },
            {
                title:'Sorvetes Primera',
                category:'Desserts',
                price:112,
                ratings:4,
                image:'fastfood/images/food2.png'
            },
            {
                title:'Sorvetes Primera',
                category:'Desserts',
                price:172,
                ratings:4,
                image:'fastfood/images/food2.png'
            },
            {
                title:'Fried Çhicken',
                category:'Chicken',
                price:200,
                ratings:4,
                image:'fastfood/images/food3.png'
            },
            {
                title:'Fried Çhicken',
                category:'Chicken',
                price:172,
                ratings:4,
                image:'fastfood/images/food3.png'
            },
            {
                title:'Çhicken Salad',
                category:'Chicken',
                price:172,
                ratings:4,
                image:'fastfood/images/food1.png'
            },
            {
                title:'Çhicken Salad',
                category:'Chicken',
                price:172,
                ratings:4,
                image:'fastfood/images/food1.png'
            },
            {
                title:'Sorvetes Primera',
                category:'Desserts',
                price:112,
                ratings:4,
                image:'fastfood/images/food2.png'
            },
        ],
        favorites:[
            {
                title:'Çhicken Salad',
                category:'Chicken',
                price:172,
                ratings:4,
                image:'fastfood/images/food1.png'
            },
            {
                title:'Sorvetes Primera',
                category:'Desserts',
                price:112,
                ratings:4,
                image:'fastfood/images/food2.png'
            },
            {
                title:'Sorvetes Primera',
                category:'Desserts',
                price:172,
                ratings:4,
                image:'fastfood/images/food2.png'
            },
            {
                title:'Fried Çhicken',
                category:'Chicken',
                price:200,
                ratings:4,
                image:'fastfood/images/food3.png'
            },
        ],
        AddOns:[
            {
                title:'Tomato Sauce',
                image:'fastfood/images/addons1.png',
                subTitle:'Sauce',
                price: 49,
            },
            {
                title:'White Rice',
                image:'fastfood/images/addons2.png',
                subTitle:'Rice',
                price: 25,
            }
        ],
        banner:[
            {
                image:'fastfood/images/banner1.png',
            },
            {
                image:'fastfood/images/banner2.png',
            },
            {
                image:'fastfood/images/banner1.png',
            },
            {
                image:'fastfood/images/banner2.png',
            },
        ],
        category:[
            {   
                category:'Breakfast',
                recipes:9,
                image:'fastfood/images/category3.jpg',
            },
            {   
                category:'Seafood',
                recipes:4,
                image:'fastfood/images/category2.jpg',
            },
            {   
                category:'Chicken',
                recipes:6,
                image:'fastfood/images/category1.jpg',
            },
        ],
        whatsNew:'fastfood/images/whatsNew.png',
    }),
    actions: {
    },
});