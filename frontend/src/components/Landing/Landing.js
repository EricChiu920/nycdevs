import React from 'react';
import classes from './Landing.css';

const landing = () => {
  const styles = {
    color: 'var(--color-primary)',
    lineHeight: 1.4
  }

  return (
    <React.Fragment>
    <section className={classes.Hero}>
      <div className="container">
        <div className={classes.Logo}>
          <span className={classes.Logo__text}>wifi<b style={styles}>.</b>pls</span>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className={classes.Hero__cta}>Fast <b style={styles}>free</b> and <b style={styles}>secure</b> wifi near you.</h1>
            <div className="input-group mb-3 input-group-lg">
              <input type="text" className="form-control " placeholder="Enter your zipcode..." style={{fontSize: '2rem'}} />
              <div className="input-group-append">
                <button className="btn btn-info" type="button"><i style={{fontSize: '2rem'}} className="fas fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>Fast, Free, and Secure.</h2>
            <p className={classes.Lead}>3.5 million+ people and counting have used LinkNYC, the world’s largest and fastest free municipal Wi-Fi network.</p>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default landing;
