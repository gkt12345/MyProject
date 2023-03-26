import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b3546f2053f24e2b930ca07105f7f0c5&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData.articles);
    this.setState({ articles: parsedData.articles, totalResults : parsedData.totalResults});
  }

  onNextHandler = async () => {
    if( this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b3546f2053f24e2b930ca07105f7f0c5&page=${this.state.count + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
        page: this.state.page + 1,
        articles : parsedData.articles });
    };
    }
    

  onPrevHandler = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b3546f2053f24e2b930ca07105f7f0c5&page=${this.state.count + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      page: this.state.page - 1,
      articles : parsedData.articles
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>News Monkey - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((elmnt) => {
              return (
                <div className="col-md-4" key={elmnt.url}>
                  <NewsItem
                    title={elmnt.title ? elmnt.title : ""}
                    description={elmnt.description ? elmnt.description : ""}
                    imageUrl={elmnt.urlToImage}
                    newsUrl={elmnt.url}
                  />
                </div>
              );
            })}
            <div className="container d-flex justify-content-between">
              <button
                onClick={this.onPrevHandler}
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-primary btn-sm"
              >
                &larr; Prev
              </button>
              <p>{this.state.page}</p>
              <button
                onClick={this.onNextHandler}
                disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
                type="button"
                className="btn btn-primary btn-sm"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
