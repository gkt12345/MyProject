import { Component } from "react";

class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={imageUrl ? imageUrl : "https://www.instyle.com/thmb/rYzp-erpxqD_oMIFme5sdWF3tnY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/miley-cyrus-endless-summer-vacation-soc-e99daf22c93546bcbf66c7bb36769f98.jpg"} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
