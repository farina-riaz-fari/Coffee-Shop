//Card data
export const CardsData = [
        {id: 1, image: require("../assets/coffeeCup1.jpeg"), name: "Cappuccino", price: 2, description: "A cappuccino is traditionally served in a small cup with a handle (180 ml maximum) with a thick layer of foam, while a caffè latte (often abbreviated to just 'latte') is just espresso and milk (200-300 ml), with the milk steamed to be hot and to form microfoam, and is usually served in a large glass."},
        {id: 2, image: require("../assets/coffeeCup2.jpeg"), name: "Flat White", price: 1.5, description: "The flat white is similar to a cappuccino, which is a single espresso with heated milk and a layer of thick foam served in a 150-160 ml (5.3-5.6 imp fl oz) cup. The flat white, however, does not have the thick layer of foam, but rather made with only steamed milk containing microfoam."},
        {id: 3, image: require("../assets/coffeeCup3.jpeg"), name: "Caffe Mocha", price: 3, description: "Caffè mocha is based on espresso and hot milk but with added chocolate flavouring and sweetener, typically in the form of cocoa powder and sugar. Many varieties use chocolate syrup instead, and some may contain dark or milk chocolate."},
        {id: 4, image: require("../assets/coffeeCup4.jpeg"), name: "Caffe Latte", price: 2.3, description: "A latte, also known as a caffè latte, is an Italian coffee drink made with espresso, steamed milk, and a layer of frothed milk on top. It's usually served in a glass and has a smooth texture and balanced flavor."},
        {id: 5, image: require("../assets/coffeeCup5.jpeg"), name: "Americano", price: 1.6, description: "Caffè americano also known as americano or American, is a type of coffee drink prepared by diluting an espresso shot with hot water at a 1:3 to 1:4 ratio, resulting in a drink that retains the complex flavors of espresso, but in a lighter way."},
        {id: 6, image: require("../assets/coffeeCup6.jpeg"), name: "Latte", price: 2.4, description: "A latte, also known as a caffè latte, is an Italian coffee drink made with espresso, steamed milk, and a layer of frothed milk on top. It's usually served in a glass and has a smooth texture and balanced flavor."},
];

// Home screen data
export const BottomTabsData = [
        { icon: require("../assets/home.png"), route: "Home", filledIcon: require("../assets/filledHome.png")},
        { icon: require("../assets/heartGray.png"), route: "Favourites", filledIcon: require("../assets/filledHeart.png") },
        { icon: require("../assets/shoppingBag.png"), route: "Cart", filledIcon: require("../assets/filledBag.png") },
        { icon: require("../assets/bell.png"), route: "Notifications", filledIcon: require("../assets/filledBell.png") },
];

// Detail screen data
export const Icons = [
    {title: 'bike', image:require('../assets/motorBike.png')},
    {title: 'coffee', image:require('../assets/icedCoffee.png')},
    {title: 'sugar', image:require('../assets/sugar.png')},
  ];