import Api from "../api/api.js";
import PhotographerMedia from "../templates/photographerMedia.js";
import Photographer from "../models/photographer.js";
import MediaFactory from "../factory/MediaFactory.js";

const photographer_gallery = document.querySelector('.gallery')
const photographer_api = new Api("./data/photographers.json");
const photographer_id = new URLSearchParams(window.location.search).get("id");