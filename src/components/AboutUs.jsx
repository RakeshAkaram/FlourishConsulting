import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FooterComp from './FooterComp';

class AboutUs extends Component {
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
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
            <hr/>
            <section class="text-gray-700 body-font">
              <div class="container px-5 py-10 mx-auto">
                <div class="text-center mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Cache line to represent the Company</h1>
                  <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Some description about the members of the company.</p>
                  <div class="flex mt-6 justify-center">
                    <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                  </div>
                </div>
                <div class="flex flex-wrap -m-4">
                  
                  <div class="lg:w-1/3 lg:mb-0 mb-6 bg-gray-100 p-4">
                    <div class="h-full text-center shadow p-1 bg-white">
                      <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                      src="https://source.unsplash.com/1600x1600/?human,face"/>
                      <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                      <p class="text-gray-500">Senior Product Designer</p>
                    </div>
                  </div>
                  <div class="lg:w-1/3 lg:mb-0 mb-6 bg-gray-100 p-4">
                    <div class="h-full text-center shadow p-1 bg-white">
                      <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/resources/img/picsmic1.jpeg"/>
                      <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                      <p class="text-gray-500">UI Develeoper</p>
                    </div>
                  </div>
                  <div class="lg:w-1/3 lg:mb-0 mb-6 bg-gray-100 p-4">
                    <div class="h-full text-center shadow p-1 bg-white">
                      <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-4-470x470-4ef82ef45a9598d24c4c951ead4d626a.png"/>
                      <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                      <p class="text-gray-500">CTO</p>
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

AboutUs.propTypes = {

};

export default AboutUs;