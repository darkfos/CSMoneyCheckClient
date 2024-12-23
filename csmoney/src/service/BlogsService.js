import axios from "axios";


class BlogsService {
    constructor () {
        this.url = "http://localhost:8000/api/v1/news";
        this.getAllNews = this.getAllNews.bind(this);
    }

    async getAllNews() {
        let req = await axios.get(this.url + "/all");
        return req.data
    }
}


export default BlogsService;