// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './event-info.module.scss';

// Image imports
import DiagonalLine from './assets/diagonal-line.svg';
import EventPicOne from './assets/evebt-pic-one.jpg';
import EventPicTwo from './assets/event-pic-two.jpg';
import EventPicThree from './assets/event-pic-three.jpg';
import UnicornGif from '../../assets/gifs/unicorn.gif';

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const EventInfo = ({ title, body, children }) => (
    <section className={style.eventSection}>
        <img src={DiagonalLine} className={style.line} alt="Diagonal line" />
        <Grid fluid style={{ zIndex: 1, position: 'relative' }}>
            <Row>
                <Col lg={5} className={style.textCol}>
                    <img src={UnicornGif} className={style.unicornGif} />
                    <h2 className={style.title}>{ title }</h2>
                    <p>Usually HackTheMidlands is a 24-hour hackathon, or “creative marathon”, which was founded in 2016. We provide a unique space for hundreds of passionate technologists like you to share their experiences, meet new people and learn something new - gaining valuable skills in the process.</p>
                    <p>During the event, people aged 14+ of all skill levels (you don't have to be a professional or a student! Just be lovely, passionate and interested in tech!) will come together to share ideas, and create new and awesome projects! (Not sure what a hackathon is? MLH have a great explanation <a href="https://mlh.io/faq#what-is-a-hackathon" target="_blank">here</a>).</p>
                </Col>
                <Col lg={7} className={style.imageCol}>
                    <Row>
                        <Col md={12} lg={5} className={style.imageColOne}>
                            <img src={EventPicOne} className={style.image} alt="Pic one" />
                            <img src={EventPicThree} className={classNames([style.image, style.imageTwo])} alt="Pic two" />
                        </Col>
                        <Col md={12} lg={7}>
                            <img src={EventPicTwo} className={classNames([style.image, style.imageThree])} alt="Pic two" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
        <div className={style.content}>
            { children }
        </div>
    </section>
);

// Prop definitions
EventInfo.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    children: PropTypes.any,
};

// Default props
EventInfo.defaultProps = {
    title: 'The event',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    children: null,
};
