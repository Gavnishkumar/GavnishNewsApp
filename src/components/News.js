import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem';
// import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class news extends Component {
  static defaultProps={
        country: 'in',
        category:'sports',
        pagesize: 8,
        author: "Unknown",
        totalresults: 0,
  }
  // static propTypes={
  //   country: PropTypes.string,
  //   category: PropTypes.string,
  //   apiKey: PropTypes.string,
  //   pagesize: PropTypes.number
  // }
    articles=[]
    capitalize=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props){
        super(props);
        this.state={
            articles: this.articles,
            page: 1,
            loading : false,
            totalresult: this.totalResults,
        }
        document.title=`G.K News - ${this.capitalize(this.props.category)}`;
    }
    async componentDidMount(){
      this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        this.props.setProgress(30);
        let parseddata=await data.json();
        this.setState({articles:parseddata.articles,totalresult: parseddata.totalResults,loading: false});
        this.props.setProgress(100);
    }
    // async update(){
     
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=007df34eb9cb47c8b5afdb06357effbc&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    //   this.setState({loading:true});
      
      
    //   let data= await fetch(url);
    //   let parseddata=await data.json();
    //   this.setState({
    //     page: this.state.page ,
    //     articles:parseddata.articles,
    //     loading: false
    //   });
     
    // }

    handleNextClick = async ()=>{
 

        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=007df34eb9cb47c8b5afdb06357effbc&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
        // this.setState({loading:true});
        // let data= await fetch(url);
        // let parseddata=await data.json();
        // this.setState({
        //   page: this.state.page +1,
        //   articles:parseddata.articles,
        //   loading: false
        // });
        this.setState({page: this.state.page+1});
          this.update();
      
    }
    handlePrevClick = async()=>{
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=007df34eb9cb47c8b5afdb06357effbc&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
      // this.setState({loading:true});
      // let data= await fetch(url);
      // let parseddata=await data.json();
      // this.setState({
      //   page: this.state.page -1,
      //   articles:parseddata.articles,
      //   loading: false
      // });
      this.setState({page: this.articles.state.page-1});
        this.update();
    }
     fetchMoreData = async () => {
      this.setState({page: this.state.page+1});
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    
      let data= await fetch(url);
      let parseddata=await data.json();
      this.setState({
        page: this.state.page ,
        articles:this.state.articles.concat(parseddata.articles),

    });
    };
   key=0;
  render() {
    return (
      <div className="bg-light">
     
        <h2 className='text-center' style={{marginTop: "90px"}}>  Top - {this.capitalize(this.props.category)} - headlines</h2>
        {/* {this.state.loading && <Loading/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalresult}
          loader={<Loading/>}
        >
          <div className="container">
        <div className="row">
        
        { this.state.articles.map((element)=>{
            return <div className="col-md-4" key={this.key++}>
             
            <NewsItem title={(element.title)?element.title.slice(0,45): element.title} description={element.description?element.description.slice(0,88):element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author:"G-K News"} thatdate={element.publishedAt}/>
              </div>
        })}
         </div>
         </div>
         </InfiniteScroll>
         
        
      </div>
    )
  }
}
