import axios from "axios";


    // need to create functions to get all the characters for the spesific user
    // need to create functions to get all of the equipment
    // need to create functions to get all of the enemies
    // need to create functions to get all of the food
    // need to create functions to get all of the story
    // need to create functions to get all of the random events


const API = {
    // Gets all posts
    // getUser: function (id) {
    //     console.log(id);
    //     return axios.get("http://localhost:3001/api/user/" + id);
    // },
    getUser: function () {
        return axios.get("http://localhost:3001/api/user/all");
    },
    getCharacters: function () {
        return axios.get("http://localhost:3001/api/character/all");
    },
    getEnemies: function (id) {
        return axios.get("http://localhost:3001/api/enemies/" + id);
    },
    getEquipment: function (id) {
        return axios.get("http://localhost:3001/api/equipment/" + id);
    },
    getFood: function (id) {
        return axios.get("http://localhost:3001/api/food/" + id);
    },
    getPotion: function (id) {
        return axios.get("http://localhost:3001/api/potion/" + id);
    },
    getRandom: function (id) {
        return axios.get("http://localhost:3001/api/random/" + id);
    },
    getStory: function (id) {
        return axios.get("http://localhost:3001/api/story/" + id);

        // console.log("api")
        // return axios.get("http://localhost:3001/api/character/all");
    },

    getAllEnemies: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/enemies/all");
    },
    getAllEquipment: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/equipment/all");
    },
    getAllFood: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/food/all");
    },
    getAllPotion: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/potion/all");
    },
    getAllRandom: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/random/all");
    },
    getAllStory: function () {
        // console.log("api")
        return axios.get("http://localhost:3001/api/story/all");

    },

    deleteCharacters: function () {
        return axios.delete("http://localhost:3001/api/character/all");
    },
    deleteEnemies: function (id) {
        return axios.delete("http://localhost:3001/api/enemies/" + id);
    },
    deleteEquipment: function (id) {
        return axios.delete("http://localhost:3001/api/equipment/" + id);
    },
    deleteFood: function (id) {
        return axios.delete("http://localhost:3001/api/food/" + id);
    },
    deletePotion: function (id) {
        return axios.delete("http://localhost:3001/api/potion/" + id);
    },
    deleteRandom: function (id) {
        return axios.delete("http://localhost:3001/api/random/" + id);
    },
    deleteStory: function (id) {
        return axios.delete("http://localhost:3001/api/story/" + id);
    },

    saveCharacters: function () {
        return axios.save("http://localhost:3001/api/character/all");
    },
    saveEnemies: function (id) {
        return axios.save("http://localhost:3001/api/enemies/" + id);
    },
    saveEquipment: function (id) {
        return axios.save("http://localhost:3001/api/equipment/" + id);
    },
    saveFood: function (id) {
        return axios.save("http://localhost:3001/api/food/" + id);
    },
    savePotion: function (id) {
        return axios.save("http://localhost:3001/api/potion/" + id);
    },
    saveRandom: function (id) {
        return axios.save("http://localhost:3001/api/random/" + id);
    },
    saveStory: function (id) {
        return axios.save("http://localhost:3001/api/story/" + id);
    },


    // Gets the post with the given 
    //   getPost: function() {
    //     return axios.get("/api/posts/" + );
    //   },
    //   // Deletes the post with the given 
    //   deletePost: function() {
    //     return axios.delete("/api/posts/" + );
    //   },
    //   // Saves a post to the database
    //   savePost: function(postData) {
    //     return axios.post("/api/posts", postData);
    //   }
};


export default API;