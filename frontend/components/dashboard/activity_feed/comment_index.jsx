import React from 'react';
import CommentContainer from './comment_container';
import CommentIndexItem from './comment_index_item';
import UserNavContainer from '../../nav/user_nav_container';
import {NavLink} from 'react-router-dom';
import Footer from '../../footer/footer';

class CommentIndex extends React.Component {

    componentDidMount() {
        this.props.fetchComments();
    }

    render () {

        return (
            <>

                <UserNavContainer />



                <div className="line"></div>
                <div id="home-page-sign">
                    <h4><i className="fas fa-running fa"></i> Changes are coming soon to this website!</h4>
                </div>
                
                <div id="dash-wrapper">
                    <div id="dash-main">
                        <div id="dash-nav">
                            {/* <button>{this.props.logout}</button> */}
                            <NavLink to="/my_home/activity_feed" activeClassName="active">
                                <div className="dash-nav-container"
                                    id="dash-nav-box">ACTIVITY FEED</div>
                            </NavLink>
                            <NavLink to="/my_home/user_dashboard" activeClassName="active">
                                <div className="dash-nav-container"
                                    id="dash-nav-dashboard">MY DASHBOARD</div>
                            </NavLink>
                            <NavLink to="/24" activeClassName="active">
                                <div className="dash-nav-container"
                                    id="dash-nav-dashfriends">MY FRIENDS</div>
                            </NavLink>
                        </div>
                    </div>
                    <div id="dash-bottom-half">
                        <div id="left-main-dash">
                            <div id="comment-items">
                                {this.props.comments.map( comment => {
                                    if(comment.statusId === this.props.parent.id) {
                                        return <CommentIndexItem
                                            comment={comment}
                                            user={this.props.currentUser}
                                            key={`cmt${comment.id}`}
                                        />
                                    }
                                })}
                            </div>
                        </div>
                        <div id="right-main-dash">
                            <div id="dash-right-section">
                                <div id="dash-profile-image">
                                    <div id="dash-profile-pic">
                                        <img src={window.avatarURL} />
                                        <div id="dash-profile-info">
                                            <div id="dash-profile-greeting">
                                                <span>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</span>
                                                <span>Location</span>
                                            </div>
                                            <br />
                                            <div id="total-distance">
                                                <div>0</div>
                                                <div id="total-miles">
                                                    <span>TOTAL</span>
                                                    <span>MILES</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="profile-edit">
                                        <span>Edit Profile</span>
                                        <span>Find Friends</span>
                                    </div>
                                </div>
                            </div>
                            <div id="dash-ua">
                                <div id="dash-ua-shop">
                                    <span id="dash-ua-shop-top">GET THE LATEST GEAR</span>
                                    <a href="https://www.underarmour.com/en-us/?cid=MMF|REF|MMRun|Site">
                                        <i className="fas fa-shopping-cart fa-4x"></i>
                                    </a>
                                    <a href="https://www.underarmour.com/en-us/?cid=MMF|REF|MMRun|Site">Shop UnderArmour.com</a>
                                </div>
                                <div id="dash-me">
                                    <span id="dash-me-github">FOLLOW ME ON GITHUB</span>
                                    <div>
                                        <a href="https://github.com/Sunghan11">
                                            <i className="fab fa-github-square fa-5x"></i>
                                        </a>
                                        <a href="https://github.com/Sunghan11">GitHub</a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Footer />
            </>
        )

        
        
        // return (
        //     <>
        //         <div className="comments-index-container">
        //             <div id="comments-index-title">
        //                 Comments
        //             </div>
        //             <div id="comments-index-items">
        //                 {/* {this.props.comments.map(comment => {
        //                     return <CommentIndexItem
        //                         comment={comment}
        //                         user={this.props.user}
        //                         deleteComment={this.props.deleteComment}
        //                         key={`comment ${comment.id}`}
        //                     />

        //                 })} */}
        //             </div>
        //             <div id="comment-index-create">
        //                 <CommentContainer />
        //             </div>
        //         </div>
        //     </>
        // )
    }
}

export default CommentIndex;