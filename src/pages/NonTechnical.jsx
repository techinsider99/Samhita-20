import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AOS from 'aos'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import Navbar from '../components/Navbar'
import Event from '../components/Event'
import GamingImage from '../assets/Events/Gaming.png'
import MathImage from '../assets/Events/Math.png'
import QuizImage from '../assets/Events/Quiz.png'
import BPlanImage from '../assets/Events/BPlan.png'
import IPLAuctionImage from '../assets/Events/IplAuction.png'
import TreasureHuntImage from '../assets/Events/Treasurehunt.png'

class NonTechnical extends Component {

    componentDidMount() {
        AOS.init({
            delay: 150,
            duration: 250,
            once: true
        })
    }

    render() {
        return(
            <React.Fragment>
                <Navbar name = 'event'/>
                <section className = 'section' style = {{backgroundColor: 'rgba(199, 44, 65, 0.863)', minHeight: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div className = 'container events-outer-container'>
                        <div data-aos = 'fade-up'>
                            <div className = 'title is-3 is-lato has-text-centered' style = {{marginBottom: '55px'}}>Non-technical events</div>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {GamingImage}
                                    title = 'Gaming'
                                    size = {1}
                                    description = 'Gamers don’t die. They respawn, isn’t it? Show your cool skills and win the biggest competitive gaming events.'
                                >
                                    <div>
                                        <ul>
                                            <li>• Gaming event entry fee is exclusive on purchase of Samhita '20 Ticket</li>
                                            <li>• Break the Rules.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {MathImage}
                                    title = 'Math-O-Mania'
                                    size = {2}
                                    description = 'Are you that special one who thinks why 1/0 is still infinity? This event tests the proficiency in mathematics and the tic-tac-toe tactics associated with it.'
                                >
                                    <div>
                                        <ul>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• There will be only one round.</li>
                                            <li>• The round will be a pen and paper round.</li>
                                            <li>• The time limit for both the rounds is 45 minutes.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {QuizImage}
                                    title = 'General Quiz'
                                    size = {2}
                                    description = 'The team with the most updated information on the latest happenings and events around the world wins this.'
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be only one round.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• The round will be paper based.</li>
                                            <li>• Internet access is not allowed.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {BPlanImage}
                                    title = 'B-Plan'
                                    size = {2}
                                    description = 'Can you manage to steer a ship in the correct path under the most rigorous circumstances? This event tests the management skills of a person and rewards them with the most intriguing gifts.'
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be only 2 rounds.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Paper based.</li>
                                            <li>• Discussion of strategies or plagiarism of any kind will lead to disqualification.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {IPLAuctionImage}
                                    title = 'IPL Auction'
                                    size = {2}
                                    description = 'Ever wondered of having King and Thala in the same team? Well then, this is your chance! IPL Auction gives you the chance to build the best team in the planet and smash all the teams around.'
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Auction based.</li>
                                            <li>• No use of any electronic gadgets.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event
                                    onsite
                                    avatar = {TreasureHuntImage}
                                    title = 'Treasure Hunt'
                                    size = {2}
                                    description = 'Dreamt of winning the big lottery? Thought of overcoming obstacles to win the grand prize? Show your instincts with your team and win the Treasure everyone are hunting.'
                                >
                                    <div>
                                        <ul>
                                            <li>• Will be informed on site.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(NonTechnical)