import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-details'>
            <h2>What is context api ?</h2>
            <p className='ans-details'>The Context API is a React structure that enables you to
                exchange unique details and assists in solving prop-drilling from
                all levels of your application.The React Context API is a way for
                a React app to effectively produce global variables that can be passed around.
                This is the alternative to "prop drilling" or moving props from
                grandparent to child to parent, and so on. Context is also touted
                as an easier, lighter approach to state management using Redux.
                Context API is a (kind of) new feature added in version 16.3 of
                React that allows one to share state across the entire app (or part of it)
                lightly and with ease.
            </p>
            <h2>What is Semantic tag ?</h2>
            <p>
                A semantic element clearly describes its meaning to both the browser and the developer.
                Examples of nonsemantic elements: div and span Tells nothing about its content.
                Examples of semantic elements: form, table, and article Clearly defines
                its content. Browser Support. Yes.
            </p>
            <h2>Differences between inline block vs block elements :</h2>
            <p>
                HTML is made up of various elements that act as the building blocks of web pages.
            </p>
            <p>
                <div className='block-inline'>
                    <p> "BLOCK" <br /> <br />
                        A block element begins on a new line. <br />
                        Examples: div, p, li, main, etc. <br />
                        CSS property: display:block.
                    </p>
                    <p> "INLINE BLOCK" <br /> <br />
                        It remains inline with all the text around the element and appears the same as inline. <br />
                        It has no tag examples as it can be applied to any tag using CSS. <br />
                        CSS property: display:inline-block.
                    </p>
                </div>
            </p>
        </div>

    );
};

export default Blogs;