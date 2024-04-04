import React, { Component } from 'react'

export default class NewsItem extends Component {

    formatDate = (taarik)=> {
        const abc = new Date(taarik);
        return abc.toLocaleString();
    }

    render() {
        let {title, description, imageUrl, newsUrl, date, author} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl!=null? imageUrl: "https://imgs.search.brave.com/Bya-CXoyqwywMfJyG25GoiqGCPxwxjwXlM1JKb3v6AM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzUxLzk1LzUz/LzM2MF9GXzI1MTk1/NTM1Nl9GQVFIMFUx/eTFUWnczWmNkUEd5/YndVa0g5MGEzVkFo/Yi5qcGc"} alt='image not found' />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <label htmlFor="publishedDate" className='my-2'>{this.formatDate(date)}</label>
                        <span className="badge text-bg-danger">{author}</span>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-info text-light">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
