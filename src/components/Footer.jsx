import React from 'react'

const Footer = () => {

    return (
        <div className={`footer mt-3`}>
            <div className='footer_header'>
                This project is a frontend assignmnet for Hybr1d & The project repository can be found <span><a target='_blank' href='https://github.com/yagyesh-bobde/Hacker-News' >here</a>.</span>
            </div>
            <div className="place-center d-flex" style={{ justifyContent:'center'}}>
                <a className='space place-center' href='https://www.linkedin.com/in/bobde-yagyesh/' rel="noreferrer" target={'_blank'}>
                    <p className='space'>LinkedIn</p>
                </a>


                <a className='space place-center' href='https://github.com/yagyesh-bobde' rel="noreferrer" target={'_blank'}>
                    <p className='space'>GitHub</p>
                </a>
                <a className='space place-center' href='https://twitter.com/bobde_yagyesh' rel="noreferrer" target={'_blank'}>
                    <p className='space'>Twitter</p>
                </a>

            </div>
        </div>
    )
}

export default Footer