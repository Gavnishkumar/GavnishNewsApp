
import React, { Component } from 'react';
import imag from '../defaultNews.png';
export class NewsItem extends Component {
    
    render() {
        let { title, description, imageUrl, newsUrl,thatdate,author} = this.props;
        return (
            <div className="  my-4 mx-2">
                <div className="mycard card  bg-light">
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer"><img src={imageUrl? imageUrl: imag} className="card-img-top" alt="G-K News" /></a>
                    
              
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text "><i><small className="text-muted">By {author} <br /> On {new Date(thatdate).toGMTString()}</small></i></p>
                        <a href={newsUrl}  target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
