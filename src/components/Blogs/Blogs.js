import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-details'>
            <h2 className='question'>What is context api ?</h2>
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
            <h2 className='question'>What is Semantic tag ?</h2>
            <p>
                A semantic element clearly describes its meaning to both the browser and the developer.
                Examples of nonsemantic elements: div and span Tells nothing about its content.
                Examples of semantic elements: form, table, and article Clearly defines
                its content. Browser Support. Yes.
            </p>
            <h2 className='question'>Differences between inline block vs block elements :</h2>
            <p>
                HTML is made up of various elements that act as the building blocks of web pages.
            </p>
            <p>
                <div className='block-inline'>
                    <p> "Inline Elements" <br /> <br />
                        Respect left and right margins and padding, but not top and bottom. <br />
                        Cannot have a width and height set. <br />
                        Allow other elements to sit to their left and right.
                    </p>
                    <p> "Inline Block Elements" <br /> <br />
                        Allow other elements to sit to their left and right. <br />
                        Respect top and bottom margins and padding. <br />
                        Respect height and width.
                    </p>
                </div>
            </p>
        </div>

    );
};

export default Blogs;