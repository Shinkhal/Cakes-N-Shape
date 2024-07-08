import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src="/full_logo-removebg-preview.jpg" alt='Company Logo'/>
                    <p>We are dedicated to bringing you the best Mediterranean cuisine with a modern twist. Join us for an unforgettable dining experience.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/>123 Main Street, Towncity, USA</li>
                        <li>Phone: <br/>+1 234 567 890</li>
                        <li>Email: <br/>info@yourrestaurant.com</li>
                    </ul>
                </div>
                
                <div className="end-text">
                    <p>&copy; 2024 Feista Flavours. All Rights Reserved.</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
