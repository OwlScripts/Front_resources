import {About} from './About.js'
import { Blogs } from './Blogs.js'
import { Comments } from './Comments.js'
import { ContactUs } from './ContactUs.js'
import { Features } from './Features.js'
import { Footer } from './Footer.js'
import { Header } from './Header.js'
import { Home } from './Home.js'
import { OurTeam } from './OurTeam.js'
import { Resources } from './Resources.js'
import { TimeLine } from './TimeLine.js'
import { UsersChart } from './UsersChart.js'



const mainBox = document.querySelector('body');
mainBox.innerHTML += Header;
mainBox.innerHTML += Home;
mainBox.innerHTML += Resources;
mainBox.innerHTML += UsersChart;
mainBox.innerHTML += About;
mainBox.innerHTML += Features;
mainBox.innerHTML += OurTeam;
mainBox.innerHTML += TimeLine;
mainBox.innerHTML += Comments;
mainBox.innerHTML += ContactUs;
mainBox.innerHTML += Blogs;
mainBox.innerHTML += Footer;
