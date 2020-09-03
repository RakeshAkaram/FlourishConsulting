import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FooterComp from './FooterComp';

class Project extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <React.Fragment>
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
            <hr/>
            <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="-my-8">
            <div className="py-8 flex flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col project">
                <img className="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/user/erondu/1600x900"/>
              </div>
              <div className="md:flex-grow" x-data='{show:false}'>
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a x-on="show=!show" className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div x-show="show" className="border px-4 py-3 my-2 text-gray-700">
                  This is an example of tailwind css collapse with alpine js and tailwindcss. This collapse is toggle by either the above button or a href anochor tags.
              </div>
              </div>
            </div>
            <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col project"  >
                <img className="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/user/erondu/1600x900"/>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col project"  >
                  <img className="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/user/erondu/1600x900"/>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
            <FooterComp/>
    </React.Fragment>
        );
    }
}

Project.propTypes = {

};

export default Project;