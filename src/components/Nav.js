import './Nav.scss';
import Logo from '../assets/images/logo-light.svg'
import Hero from '../assets/images/image-hero.webp'

function Nav() {
	return (
		<>
			<header className='header'>
				<nav className='nav'>
					<div>
						<a><img className='nav__logo' src={Logo}></img></a>
					</div>
					<div className='nav__link'>
						<p>Apply for access</p>
					</div>
				</nav>
					<div className='nav-info'>
						<h1 className='nav-info__text'>
							Data tailored to<br></br> your needs.
						</h1>
						<button className='nav-info__button'>Learn more</button>
					</div>
					<div>
						<a className='nav-hero' src={Hero}><img></img>
						</a>
					</div>
			</header>


		</>
	);
}

export default Nav;
