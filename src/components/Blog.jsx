import React, { useState } from 'react';

import { blogHeader, blogData } from '../data'
import { BookmarkIcon, PlusIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline';
import './styles/Blog.css'

export default function Blog (props) {
    const dataHeader = blogHeader[props.language];
    const dataBlogs = blogData[props.language];
    const [blogSelector, setBlogSelector] = useState(0);
    const handleClickBlog = (changeBlog) => {
        if (changeBlog === -1 && blogSelector === 0) {
            setBlogSelector(dataBlogs.length - 1);
        } else if (changeBlog === +1 && blogSelector === (dataBlogs.length - 1)) {
            setBlogSelector(0)
        } else {
            setBlogSelector(blogSelector + changeBlog)
        }
    };
    return (
        <section id="blog">
            <div className="Blog__left">
                <div className="Title__container">
                    <BookmarkIcon className="Icon__blog" />
                    <h1 className="Blog__title">&nbsp;{dataHeader.title}</h1>
                </div>
                <div className="Subtitle__container">
                    <p>{dataHeader.content}</p>
                </div>
            </div>
            <div className="Blog__right">
                <button onClick={() => handleClickBlog(-1)} name="leftBlog" type="submit" className="BlogButton">
                    <ChevronDoubleLeftIcon name="leftBlog" className="BlogInfo__chevron" />
                </button>
                <div className="BlogInfo__container">
                    <h2 className="BlogInfo__title">{dataBlogs[blogSelector].blogTitle}</h2>
                    <p className="BlogInfo__content">{dataBlogs[blogSelector].blogContent}</p>
                    <div className="SeeMore__container">
                        <a href={dataBlogs[blogSelector].link} target="_blank" rel="noreferrer">{dataHeader.seemore}&nbsp;</a>
                        <PlusIcon className="Icon__seemore"/>
                    </div>
                </div>
                <button onClick={() => handleClickBlog(+1)} name="rightBlog" type="submit" className="BlogButton">
                    <ChevronDoubleRightIcon name="rightBlog" className="BlogInfo__chevron" />
                </button>
            </div>
        </section>
    );
};