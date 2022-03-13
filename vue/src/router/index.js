import Vue from "vue";
import VueRouter from "vue-router";

import Pages from "../components/Pages";
import ProductList from "../components/ProductList";
import ShoppingCart from "../components/ShoppingCart";
import Checkout from "../components/Checkout";
import Thanks from "../components/Thanks";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { 
            path: "/thanks", component: Thanks 
        },
        { 
            path: "/checkout", component: Checkout 
        },
        { 
            path: "/cart", component: ShoppingCart 
        },
        { 
            path: "/categories/:category", component: ProductList 
        },
        { 
            path: "/:slug?", component: Pages 
        },
        { 
            path: "*", redirect: "/"
        }
    ]
    
});