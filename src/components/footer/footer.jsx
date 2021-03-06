// Module Imports
import DiscordIcon from './assets/discord.inline.svg';
import FacebookIcon from './assets/facebook.inline.svg';
// Image imports
import TwitterIcon from './assets/twitter.inline.svg';
// Helper imports
// Component imports
// Style imports
import style from './footer.module.scss';
import { Link } from 'gatsby';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

const socialIcons = [
    {
        name: 'Twitter',
        icon: TwitterIcon,
        link: 'https://twitter.com/HackTheMidlands',
    },
    {
        name: 'Facebook',
        icon: FacebookIcon,
        link: 'https://www.facebook.com/hackthemidlands',
    },
    {
        name: 'Discord',
        icon: DiscordIcon,
        link: 'https://discord.gg/hackthemidlands',
    },
];

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const Footer = (props) => (
    <footer className={style.footer}>
        <Grid>
            <Row between="xs" className={style.header} middle="xs">
                <Col xs className={style.newsletter}>
                    <h4>HackTheMidlands</h4>
                </Col>
                <Col xs>
                    <ul className={style.socialIcons}>
                        {socialIcons.map(({ name, icon: Icon, link }) => (
                            <li key={name}>
                                <a href={link} target="_blank" rel="noreferrer">
                                    <Icon className={style.socialIcon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <h4 className={style.listTitle}>Company</h4>
                    <ul className={style.list}>
                        <li>
                            <Link to="/team">The Team</Link>
                        </li>
                        <li>
                            <Link to="/#mission">Mission</Link>
                        </li>
                        <li>
                            <Link to="/#sponsor-cta">Sponsor</Link>
                        </li>
                    </ul>
                </Col>
                <Col lg={3}>
                    <h4 className={style.listTitle}>Event</h4>
                    <ul className={style.list}>
                        <li>
                            <Link to="/#tickets">Tickets</Link>
                        </li>
                        <li>
                            <Link to="/#faq">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/#community">Community</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className={style.cic}>
                <span>
                    HackTheMidlands is a private limited company (company number{' '}
                    <Link to="https://beta.companieshouse.gov.uk/company/12166335">
                        12166335
                    </Link>
                    ) limited by guarantee without share capital.
                </span>
            </Row>
        </Grid>
    </footer>
);

// Prop definitions
Footer.propTypes = {};

// Default props
Footer.defaultProps = {};
