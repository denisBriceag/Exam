import React, { useState } from 'react';
import './About.css';
import { Card } from 'react-bootstrap';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MovingIcon from '@mui/icons-material/Moving';
import PublicIcon from '@mui/icons-material/Public';
import MissionModal from '../MissionModal/MissionModal';
import DistributionModal from '../DistributionModal/DistributionModal';
import PartnersModal from '../Partners/PartnersModal';
const About = () => {
    const [missionModalShow, setMissionModalShow] = useState(false);
    const [distributionModalShow, setDistributionModalShow] = useState(false);
    const [partnersModalShow, setPartnersModalShow] = useState(false);

    return (
        <>
            <div className='mainDiv' id="about">
                <Card className='cardMain'>
                    <Card.Body>
                        <Card.Title className='cardTitle'><h3>О КОМПАНИИ</h3></Card.Title>
                        <div className='descriptionphoto'>
                            <Card.Text className='cardText'>
                                Компания “UB FB Trade Group” SRL была основана молдавскими и украинскими предпринимателями в 1997 году как частная торговая фирма, успешно занимающаяся импортом и дистрибуцией безалкогольной и алкогольной продукции (коньяки, вина, виски, бренди, джин, абсент, водка, ликёры, ром, пиво, вода, компот, чаи, кофе и т.д.).
                            </Card.Text>
                            <img src='https://ubfb.md/wp-content/uploads/2014/05/labimg_400_155_4_FIIIINAAAL1.jpg' alt='building' height='200px'></img>
                        </div>
                        <div className='cardLinks'>
                            <div >
                                <div className='linkdescription' onClick={() => setMissionModalShow(true)}>
                                    <MovingIcon className='icondesc' />
                                    <Card.Link>Миссия Компании</Card.Link>

                                </div>
                                <MissionModal
                                    show={missionModalShow}
                                    onHide={() => setMissionModalShow(false)}
                                />
                            </div>
                            <div>
                                <div className='linkdescription' onClick={() => setDistributionModalShow(true)}>
                                    <PublicIcon className='icondesc' />
                                    <Card.Link>Дистрибуция</Card.Link>
                                </div>
                                <DistributionModal
                                    show={distributionModalShow}
                                    onHide={() => setDistributionModalShow(false)}
                                />
                            </div>
                            <div>
                                <div className='linkdescription' onClick={() => setPartnersModalShow(true)}>
                                    <PeopleAltIcon className='icondesc' />
                                    <Card.Link >Партнёры</Card.Link>
                                </div>
                                <PartnersModal
                                    show={partnersModalShow}
                                    onHide={() => setPartnersModalShow(false)}
                                />
                            </div>
                        </div>
                    </Card.Body>
                </Card >
            </div>
        </>
    );
}

export default About;   