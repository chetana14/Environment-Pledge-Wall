import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from "react-redux";
import { getPosts } from '../../actions/posts';
import useStyles from '../../styles';
import Header from '../Header/Header';
import "./home.css";
import circle1 from "../../images/circle1.jpg";
import circle2 from "../../images/circle2.jpg";
import circle3 from "../../images/circle3.jpg";
import circle4 from "../../images/circle4.jpeg";

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        window.scrollTo(0, 1000);
    };

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} id="main-header" >
                        <Header className="container" />
                    </Grid>
                    <section className="call-to-action">
                        <div className="cta-container cf">
                            <p>Astounding call to action? Yeah, that's right.</p>
                            <a onClick={handleClick} className='btn'>Get Started →</a>
                        </div>
                    </section>
                    <article className="row">
                        <div className="img-circle-div">
                            <img src={circle1} alt="Energy Conservation"/>
                            <h3 className="headerListItem">Energy Conservation</h3>
                        </div>
                        <div className="img-circle-div">
                            <img src={circle2} alt="Waste Reduction"/>
                            <h3 className="headerListItem">Waste Reduction</h3>
                        </div>
                        <div className="img-circle-div">
                            <img src={circle4} alt="Sustainable Transportation"/>
                            <h3 className="headerListItem">Sustainable Transportation</h3>
                        </div>
                        <div className="img-circle-div">
                            <img src={circle3} alt="Water Conservation"/>
                            <h3 className="headerListItem">Water Conservation</h3>
                        </div>
                    </article>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;