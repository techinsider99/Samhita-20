import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import Scroll from 'react-scroll'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { Tooltip } from 'antd'
import Navbar from '../components/Navbar'
import Event from '../components/Event'
import Hackathon from '../assets/Events/Hackathon.png'
import HelloWorld from '../assets/Events/Helloworld.png'
import PaperPresentation from '../assets/Events/Paperpresentation.png'
import OSPC from '../assets/Events/Ospc.png'
import Codegolfing from '../assets/Events/Codegolfing.png'
import CodeObfus from '../assets/Events/Codeobfus.png'
import ReverseCoding from '../assets/Events/Reversecoding.png'
import TechTravel from '../assets/Events/Techtravel.png'
import CognitiveImage from '../assets/Events/Cognitive.png'
import UnboxImage from '../assets/Events/Unbox.png'
import DcodeImage from '../assets/Events/Dcode.png'
import AcidityImage from '../assets/Events/Acidity.png'
import OLPC from '../assets/Events/Olpc.png'
import StreetCoding from '../assets/Events/Streetcoding.png'
import WebDevImage from '../assets/Events/Webdev.png'
import UIUXImage from '../assets/Events/UIUX.png'
import PythoniteImage from '../assets/Events/Pythonite.png'
import CoffeeWithJavaImage from '../assets/Events/Coffeewithjava.png'

class Technical extends Component {

    componentDidMount() {
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 100
        })
        AOS.init({
            delay: 150,
            duration: 250,
            once: true
        })
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Samhita 20 - Technical events</title>
                </Helmet>
                <Navbar name = 'event'/>
                <section className = 'section' style = {{backgroundColor: 'rgba(199, 44, 65, 0.863)', minHeight: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div className = 'container events-outer-container'>
                        <div data-aos = 'fade-up'>
                            <div className = 'title is-3 is-lato has-text-centered' style = {{marginBottom: '55px'}}>
                                Technical events
                                <Tooltip placement = 'right' title = 'Non-technical events' >
                                    <span className = 'icon event-navigation-icon-right' onClick = {() => this.props.history.replace('/events/non-technical')}>
                                        <FontAwesomeIcon icon = {faArrowAltCircleRight} />
                                    </span>
                                </Tooltip>
                            </div>
                            <LazyLoadComponent>
                                <Event 
                                    avatar = {Hackathon} 
                                    title = 'Hackathon' 
                                    size = {2} 
                                    description = "Bring your skills to the fore and build an innovative solution to a real-time problem. Show your clever skills and build your own software."
                                    contactName = 'Aswin'
                                    contactNumber = {<><a href = 'tel:+917200792223'>+91 7200792223</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• The problem will be uploaded on <a href = 'https://www.hackerearth.com' target = '_blank' rel = 'noreferrer noopener'>Hackerearth</a> platform on 25th January at 6 pm.</li>
                                            <li>• Purchase of Samhita ticket for entry is mandatory.</li>
                                            <li>• Time for solving the problem is between 25th and 28th.</li>
                                            <li>• The shortlisted teams must prepare a PPT and present it on January 31st at Samhita 20.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    avatar = {PaperPresentation} 
                                    title = 'Paper presentation' 
                                    size = {3}
                                    description = "Research is exploring the unexplored and presenting a whole phenomenal idea to the world. Come to Samhita '20 and present your innovative ideas and win prizes upto 5K!"
                                    contactName = 'Sruthi'
                                    contactNumber = {<><a href = 'tel:+919840291913'>+91 9840291913</a></>} 
                                >
                                    <div>
                                        <ul>
                                            <li>• Paper must be in IEEE format.</li>
                                            <li>• Papers must be submitted to <a href = 'mailto: papers@samhita.org.in'>papers@samhita.org.in</a> before 28/01/2020</li>
                                            <li>• Mail should contain the unique Samhita ID received on purchase of Samhita '20 ticket.</li>
                                            <li>• Plagiarism of any kind is strictly prohibited.</li>
                                            <li style = {{marginTop: '10px'}}><strong>Note: One Samhita ticket is enough for participation of a team consisting three members. But only one certificate will be issued for the person who has purchased Samhita ticket (Certificate will contain the names of all three members). Seperate tickets should be bought for individual certificates.</strong></li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    avatar = {HelloWorld} 
                                    title = '<Hello World/>' 
                                    size = {2} 
                                    onsite
                                    description = "For all the newcomers and rookies out there, Hello World is a special event for the first years. Start and build your career in programming here."
                                    contactName = 'Manoj Kumar'
                                    contactNumber = {<><a href = 'tel:+917448746107'>+91 7448746107</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Each team can comprise of maximum 2 members.</li>
                                            <li>• Preliminary round: Paper based.</li>
                                            <li>• Final round: Computer based.</li>
                                            <li>• Any programming language can be used.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {OSPC} 
                                    title = 'OSPC (OnSite Programming Contest)' 
                                    size = {2} 
                                    description = 'OSPC will test the proficiency in cracking logics, framing algorithms and data structures.'
                                    contactName = 'Durairaj'
                                    contactNumber = {<><a href = 'tel:+919487376430'>+91 9487376430</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• First round will be a pen and paper round.</li>
                                            <li>• For the second round you will be asked to code on <a href = 'https://www.hackerrank.com/' target = '_blank' rel = 'noreferrer noopener'>hackerrank</a>.</li>
                                            <li>• Every team must have an hackerrank account.</li>
                                            <li>• The time limit for both the rounds is 1 hour and 15 minutes.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {Codegolfing} 
                                    title = 'Code Golfing' 
                                    size = {2} 
                                    description = 'The code with fewest amount of characters wins. The best solution is the one that has the fewest characters or fewest lines of code.'
                                    contactName = 'Manoj'
                                    contactNumber = {<><a href = 'tel:+918680919117'>+91 8680919117</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Paper based.</li>
                                            <li>• Programming languages allowed: C, C++, C#, Java, HTML, Python, JavaScript, R, MATLAB.</li>
                                            <li>• Internet access is not allowed.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {CodeObfus} 
                                    title = 'Code Obfuscation' 
                                    size = {2}
                                    description = 'The technique of making the code extremely hard to read by others is called Code Obfuscation.'
                                    contactName = 'Abinaya'
                                    contactNumber = {<><a href = 'tel:+917358803408'>+91 7358803408</a></>} 
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• Discussion of strategies or plagiarism of any kind will lead to disqualification.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {ReverseCoding} 
                                    title = 'Reverse Coding' 
                                    size = {2} 
                                    description = 'Building the blocks backward. With the given input and the expected output, the code should be cracked. This event tests his/ her expertise in cracking patterns and rapid coding skills.'
                                    contactName = 'Ganesh Kumar'
                                    contactNumber = {<><a href = 'tel:+917845149635'>+91 7845149635</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• No use of any electronic gadgets.</li>
                                            <li>• Any programming language can be used.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {TechTravel} 
                                    title = 'Tech Travel' 
                                    size = {2} 
                                    description = 'To code a series of problems with a powerful competition. More the speed, Closer the win.'
                                    contactName = 'Mohamed Adhil'
                                    contactNumber = {<><a href = 'tel:+919952567290'>+91 9952567290</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be many connected paths of questions leading to a same destination.</li>
                                            <li>• A candidate can choose any path to reach the final destination.</li>
                                            <li>• Each node in the connected graph of questions, has a separate weightage.</li>
                                            <li>• A candidate's total points is the highest aggregate of points along any path.</li>
                                            <li>• There will be 2 rounds. First round is eliminative.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {CognitiveImage} 
                                    title = 'Cognitive Conundrum' 
                                    size = {2} 
                                    description = 'Cracking mathematical puzzles with coding skills.'
                                    contactName = 'Afreen'
                                    contactNumber = {<><a href = 'tel:+9196772 67886'>+91 9677267886</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• Usage of internet to browse for possible solutions is not allowed.</li>
                                            <li>• Any programming language can be used.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {UnboxImage} 
                                    title = 'Unbox' 
                                    size = {2} 
                                    description = 'Multiple choices to choose the problem. But with a twist of facing a penalty at the cost of the chosen problem being unsolved.'
                                    contactName = 'Sindhukavi'
                                    contactNumber = {<><a href = 'tel:+917305794164'>+91 7305794164</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• The candidate is allowed to swap upto 3 questions before answering one.</li>
                                            <li>• Both rounds are a rolling event where each candidate maximum gets to unbox for not more than given time limit.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {DcodeImage} 
                                    title = 'D-Code' 
                                    size = {2}
                                    description = 'Breaking the security. This event tests the Cryptography and Security Skills of the participants.'
                                    contactName = 'Abarna'
                                    contactNumber = {<><a href = 'tel:+918610341976'>+91 8610341976</a></>} 
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Paper based.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {AcidityImage} 
                                    title = 'Acidity' 
                                    size = {2} 
                                    description = 'SQL queries, ER Diagrams, Normalisation and so forth.'
                                    contactName = 'Sridharan'
                                    contactNumber = {<><a href = 'tel:+918939195177'>+91 8939195177</a></>} 
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• Discussion of strategies or plagiarism of any kind will lead to disqualification.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    avatar = {OLPC} 
                                    title = 'OLPC (OnLine Programming Contest)' 
                                    size = 'Solo' 
                                    description = 'OLPC will test the proficiency in cracking logics, framing algorithms and data structures.'
                                    contactName = 'Pradeep'
                                    contactNumber = {<><a href = 'tel:+919092534794'>+91 9092534794</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be a single round.</li>
                                            <li>• You will be asked to code on <a href = 'https://www.hackerrank.com/' target = '_blank' rel = 'noreferrer noopener'>hackerrank</a>.</li>
                                            <li>• Every participant must have an hackerrank account.</li>
                                            <li>• The time limit for the round is 2 hours.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite
                                    avatar = {StreetCoding} 
                                    title = 'Street Coding' 
                                    size = {2} 
                                    description = 'Street coding will test the focus of the participants as they’ll be subjected to distractions in the environment.'
                                    contactName = 'Madhan'
                                    contactNumber = {<><a href = 'tel:+919994223635'>+91 9994223635</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary round: Paper based.</li>
                                            <li>• Final round: Computer based.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    avatar = {WebDevImage} 
                                    title = 'Web Development' 
                                    size = 'Solo' 
                                    description = 'Participants will be asked to create a web app or website for a given scenario in the final round. First round will test the participants’ basic knowledge about various web development frameworks and scripting languages.'
                                    contactName = 'Meena'
                                    contactNumber = {<><a href = 'tel:+919488085260'>+91 9488085260</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Paper based (Multiple Choice Questions).</li>
                                            <li>• Final Round: Computer based.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite
                                    avatar = {UIUXImage} 
                                    title = 'UI/UX Designing' 
                                    size = 'Solo' 
                                    description = 'Participants will be asked to create UI/UX Front End Design for an app or a website for a given scenario.'
                                    contactName = 'Rajesh'
                                    contactNumber = {<><a href = 'tel:+917358345745'>+91 7358345745</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Online (Elimination).</li>
                                            <li>• Final Round: Computer based.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite
                                    avatar = {PythoniteImage} 
                                    title = 'Pythonite' 
                                    size = {2} 
                                    description = 'Pythonite will test the proficiency of the participants in the language of Python.'
                                    contactName = 'Ramya'
                                    contactNumber = {<><a href = 'tel:+919094599843'>+91 9094599843</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be a rounds.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• Discussion of strategies or plagiarism of any kind will lead to disqualification.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite
                                    avatar = {CoffeeWithJavaImage} 
                                    title = 'Coffee with Java' 
                                    size = {2} 
                                    description = 'This event will test the proficiency of the participants in the core concepts of Java and other associated frameworks.'
                                    contactName = 'Vinodhini'
                                    contactNumber = {<><a href = 'tel:+919941279491'>+91 9941279491</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• Discussion of strategies or plagiarism of any kind will lead to disqualification.</li>
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

export default withRouter(Technical)