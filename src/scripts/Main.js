import AboutUs from '../Components/About.js'
import Blogs from '../Components/Blogs.js'
import Comments from '../Components/Comments.js'
import ContactUs from '../Components/ContactUs.js'
import Features from '../Components/Features.js'
import Footer from '../Components/Footer.js'
import Header from '../Components/Header.js'
import Home from '../Components/Home.js'
import OurTeam from '../Components/OurTeam.js'
import Resources from '../Components/Resources.js'
import TimeLine from '../Components/TimeLine.js'
import UsersChart from '../Components/UsersChart.js'



const mainBox = document.querySelector('body');
mainBox.innerHTML += Header;
mainBox.innerHTML += Home;
mainBox.innerHTML += Resources;
mainBox.innerHTML += UsersChart;
mainBox.innerHTML += AboutUs;
mainBox.innerHTML += Features;
mainBox.innerHTML += OurTeam;
mainBox.innerHTML += TimeLine;
mainBox.innerHTML += Comments;
mainBox.innerHTML += ContactUs;
mainBox.innerHTML += Blogs;
mainBox.innerHTML += Footer;
