import  QuestionList  from '@/data';
import Link from 'next/link';
import React, { Component } from 'react'
import { Button, Menu, Pagination } from 'react-daisyui';

export default class PaginationProvider extends Component {
  constructor() {
    super();
    this.state = {
      urls: this.arrayToIndex(QuestionList),
      currentPage: 1,
      urlsPerPage: 10,
      upperPageBound: 4,
      lowerPageBound: 0,
      isPrevBtnActive: 'disabled',
      isNextBtnActive: '',
      pageBound: 3
    };
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
  }
  arrayToIndex(e) {
    let result = [];
    Object.keys(QuestionList).forEach(key => {
      result.push(key);
    });
    return result
  }
  handleClick(event) {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid
    });
    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(this.state.urls.length / this.state.urlsPerPage);
    this.setState({isNextBtnActive: 'disabled'});
    this.setState({isPrevBtnActive: 'disabled'});
    if(totalPage === listid && totalPage > 1){
        this.setState({isPrevBtnActive: ''});
    }
    else if(listid === 1 && totalPage > 1){
        this.setState({isNextBtnActive: ''});
    }
    else if(totalPage > 1){
        this.setState({isNextBtnActive: ''});
        this.setState({isPrevBtnActive: ''});
    }
  }
  btnIncrementClick() {
      this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
      this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
      let listid = this.state.upperPageBound + 1;
      this.setState({ currentPage: listid});
      this.setPrevAndNextBtnClass(listid);
}
  btnDecrementClick() {
    this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
    this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid});
    this.setPrevAndNextBtnClass(listid);
}
btnPrevClick() {
    if((this.state.currentPage -1)%this.state.pageBound === 0 ){
        this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage : listid});
    this.setPrevAndNextBtnClass(listid);
}
btnNextClick() {
    if((this.state.currentPage +1) > this.state.upperPageBound ){
        this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage : listid});
    this.setPrevAndNextBtnClass(listid);
}
  render() {
    const { urls, currentPage, urlsPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
    const indexOfLastTodo = currentPage * urlsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - urlsPerPage;
    const currenturls = urls.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderurls = currenturls.map((url, index) => {
      return (
        <Menu.Item key={index} className='bg-primary rounded-md text-primary-content font-medium'>
          <Link href={`/quiz/${url}`}> أسئلة رقم {url}</Link>
        </Menu.Item>
      );
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(urls.length / urlsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.reverse().map(number => {
        if(number === currentPage ){
            return(
                <Button active key={number} id={number} onClick={this.handleClick}>{number}</Button>
            )
        }
        else if((number < upperPageBound + 1) && number > lowerPageBound){
            return(
                <Button key={number} id={number} onClick={this.handleClick}>{number}</Button>
            )
        }
    });
    let pageIncrementBtn = null;
    if(pageNumbers.length < upperPageBound){
        pageIncrementBtn = <Button className="hidden md:inline-block" onClick={this.btnDecrementClick}> &hellip; </Button>
    }
    let pageDecrementBtn = null;
    if(lowerPageBound <= 1){
        pageDecrementBtn = <Button className="hidden md:inline-block " onClick={this.btnIncrementClick}> &hellip; </Button>
    }
    let renderNextBtn = null;
    if(isPrevBtnActive === 'disabled') {
        renderNextBtn = <Button className="px-2 md:px-3" disabled>السابق</Button>
    }
    else{
        renderNextBtn = <Button id="btnNext" className="px-2 md:px-3" onClick={this.btnPrevClick}>السابق</Button>
    }
    let renderPrevBtn = null;
    if(isNextBtnActive === 'disabled') {
        renderPrevBtn = <Button className="px-2 md:px-3"  disabled>التالي</Button>
    }
    else{
        renderPrevBtn = <Button id="btnPrev" className="px-2 md:px-3" onClick={this.btnNextClick}>التالي</Button>
    }
    return (
      <div className='space-y-5 w-full'>
        <Menu className='gap-4 w-full md:w-3/4 mx-auto grid grid-cols-2'>
          {renderurls}
        </Menu>
        <div className='w-full flex justify-center pt-5'>
          <Pagination dir='ltr'>
            {renderPrevBtn}
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            {renderNextBtn}
          </Pagination>
        </div>
      </div>
    );
  }
}