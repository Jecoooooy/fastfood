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
        AddOns:[
            {
                title:'Tomato Sauce',
                image:'../../public/images/addons1.png',
                subTitle:'Sauce',
                price: 49,
            },
            {
                title:'White Rice',
                image:'../../public/images/addons2.png',
                subTitle:'Rice',
                price: 25,
            }
        ]
    }),
    actions: {
    },
});