import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__container__left'>
                    <p className='footer__container__left__title'>About</p>
                    <p className='footer__container__left__text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iusto.
                    </p>
                </div>
                <div className='footer__container__right'>
                    <p className='footer__container__right__title'>Contact</p>
                    <p className='footer__container__right__text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iusto.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;