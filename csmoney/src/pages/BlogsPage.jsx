import HeaderComponent from "../compontents/header/HeaderComponent";
import FooterComponent from "../compontents/footer/FooterComponent";
import { Component, Fragment } from "react";
import BlogsService from "../service/BlogsService";


class BlogsPage extends Component {

    constructor (props) {
        super(props);

        this.theme = localStorage.getItem("theme");
        this.blogsService = new BlogsService();
        this.blogsToPage = this.blogsToPage.bind(this);
        this.state = {
            news: null
        }
    }

    async blogsToPage() {
        let req = await this.blogsService.getAllNews();
        this.setState({news: req.news.length > 1 ? req.news: null});
    }

    render() {
        this.blogsToPage();
        localStorage.setItem("page", "blogs");
        return <Fragment>
            <HeaderComponent />
            {
            this.state.news ? 
            <div className="w-11/12 m-auto mt-40 flex flex-col gap-20">
                <div className="text-center flex flex-col gap-2">
                    <h2 className={this.theme === "primary" ? "text-primary text-3xl font-bold" : "text-secondary_h_text text-3xl font-bold"}>Our Blog</h2>
                    <p className={this.theme === "primary" ? "text-primary_text font-bold" : "text-secondary_text font-bold"}>All our blogs and news and this page...</p>
                </div>
                <div className="news flex flex-row gap-10 w-8/10 m-auto justify-center flex-wrap">
                    <div className={this.theme === "primary" ? "p-4 bg-primary rounded-md text-wrap" : "p-4 bg-secondary_h_text rounded-md text-wrap"}>
                        <h6 className={this.theme === "primary" ? "text-primary_text" : "text-primary_text"}>news</h6>
                        <br />
                        <h2 className="text-wrap">Bla bla bla</h2>
                        <p className="text-wrap max-w-xl">dsaasdasdjgdjfgdjghdjkghjdfhjkgfjdk</p>
                        <br />
                        <a href="" className={this.theme === "primary" ? "text-primary_text font-bold hover:text-primary_text_hover" : "text-secondary_text font-bold hover:text-primary_ac_text"}>Read more &#62;</a>
                    </div>
                </div>
            </div>
            :
            <div className="w-11/12 m-auto mt-40 flex flex-col gap-20 pb-20">
                <p className={this.theme === "primary"? "text-center font-bold text-2xl text-primary" : "text-center text-white font-bold text-2xl"}>News not found :[ </p>
            </div>
            }
            <FooterComponent />
        </Fragment>
    }
}


export default BlogsPage;