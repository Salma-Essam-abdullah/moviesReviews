/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import Index from './public/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Head_section from './public/shared/Head_section';
import Footer_section from './public/shared/Footer_section';
import App2 from './public/single_movie/App2';
import contact1 from './public/assits/images/contact1.png'
import contact2 from './public/assits/images/contact2.png'
import contact3 from './public/assits/images/contact3.png'
import figure from './public/assits/images/figure.jpg'
import person1 from './public/assits/images/person1.jpg'
import person2 from './public/assits/images/person2.jpg'
import person3 from './public/assits/images/person3.jpg'
import person4 from './public/assits/images/person4.jpg'

import { createFromIconfontCN } from '@ant-design/icons';


function App() {
	
  return (
    <Router>
      <div>
        <Switch> 
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
         <Route path="/JoinUs">
          <JoinUs/> 
          </Route>
          <Route path="/About">
          <About/> 
          </Route>
          <Route  name="single" path="/single/:id">
            <App2 />
          </Route>
          <Route path="/">
          <Index/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function ContactUs() {
  return(
<>
   <Head_section/>
 
  <main class="main-content">
  <div class="container">
        <div class="page">
          <div class="breadcrumbs">
		  <a href="index.html">Movie Reviews</a>
            <span>Contact</span>
                          </div>
           </div>
                   <div class="content">
            <div class="row">
              <div class="col-md-4">
                <h2>Contact</h2>
                <ul class="contact-detail">
                  <li>
                    <img src={contact2} alt="w" />
                    <address><span>Company name. INC</span> <br/>550 Avenue Street, New york</address>
                  </li>
                  <li>
                    <img src={contact1 }alt="w" />
                    <a href="tel:1590912831">+1 590 912 831</a>
                  </li>
                  <li>
                    <img src={contact3}alt="w" />
                    <a href="mailto:contact@companyname.com">contact@companyname.com</a>
                  </li>
                </ul> 
                                  <div class="contact-form">
                  <input type="text" class="name" placeholder="name..." />
                  <input type="text" class="email" placeholder="email..." />
                  <input type="text" class="website" placeholder="website..." />
                  <textarea class="message" placeholder="message..."></textarea>
                  <input type="submit" value="Send Message "/>

                </div>
                                  <div class="col-md-7 col-md-offset-1">
                <div class="map"></div>
              </div>
                                  </div>
                                  </div>
                                  </div>
    </div>


    </main>
	<p>sss</p>
    <Footer_section/>

  </>
  )
  
}

function JoinUs() {
  return(
<>
<Head_section/>
<div id="site-content">
			<main class="main-content">
				<div class="container">
					<div class="page">
						<div class="breadcrumbs">
								<a href="index.html">Movie Reviews</a>
							<span>Join Us</span>
						</div>

						<div class="content">
							<h2 class="section-title">Consectetur adipiscing elit sed eiusmod tempor</h2>
							<p>Aenean vehicula eget risus sit amet posuere. Maecenas id risus maximus, malesuada leo eget, pellentesque arcu. Phasellus vitae leo rhoncus, consectetur mauris vitae, lacinia quam. Nunc turpis erat, accumsan eget justo quis, auctor ultricies magna. Mauris sodales, risus sit amet hendrerit tincidunt, erat ante facilisis sapien, sit amet maximus neque massa a felis. Nullam consectetur justo massa, vel commodo metus gravida in. Aliquam erat volutpat. Nullam a lorem sed lorem euismod gravida a eu velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis ac ligula vel pharetra. Aenean vitae nulla sed dui volutpat euismod.</p>

							<h2 class="section-title">Nemo enim ipsam voluptatem quia voluptas</h2>
							<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga et harum quidem rerum facilis est et expedita.</p>

							<p>Distinctio nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

							<div class="row">
								<div class="col-md-4">
									<div class="feature">
										<h3 class="feature-title">Exceptur cupidat</h3>
										<small class="feature-subtitle">Incididunt labore dolore</small>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aut ad optio praesentium amet, ullam vel impedit dignissimos voluptas, consequatur recusandae quo autem consectetur tempore rem quam corrupti a. Accusamus.</p>
										<a href="" class="button">Send a request</a>
									</div>
								</div>
								<div class="col-md-4">
									<div class="feature">
										<h3 class="feature-title">Neque quisquam</h3>
										<small class="feature-subtitle">Duis aute reprehenderit</small>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam quidem nobis rem exercitationem aut assumenda iure molestias eius accusantium, temporibus quis esse tempora. Laboriosam libero odio nobis, eligendi minus.</p>
										<a href="" class="button">Send a request</a>
									</div>
								</div>
								<div class="col-md-4">
									<div class="feature">
										<h3 class="feature-title">Tempor Labore</h3>
										<small class="feature-subtitle">Ratione sequi nesciunt</small>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo commodi impedit ea beatae, in ipsa doloribus consequuntur ut, quod dolor dolore unde, esse eligendi autem nobis rem tempora recusandae laborum.</p>
										<a href="" class="button">Send a request</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> 
			</main>
		
		</div>
<Footer_section/>
  </>

  )}
  function About() {
	

	const IconFont = createFromIconfontCN({
	  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
	});
    return(
  <>
  <Head_section/>
  <div id="site-content">
		
			<main class="main-content">
				<div class="container">
					<div class="page">
						<div class="breadcrumbs">
							<a href="index.html">Movie Reviews</a>
							<span>About us</span>
						</div>

						<div class="row">
							<div class="col-md-4">
								<figure><img src={figure} alt="figure image"/></figure>
							</div>
							<div class="col-md-8">
								<p class="leading">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.</p>
								<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.</p>
							</div>
						</div>

						<div class="row">
							<div class="col-md-9">
								<h2 class="section-title">Vision &amp; Misssion</h2>
								<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

								<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam dignissimos ducimus qui blanditiis praesentium voluptatum atque.</p>
							</div>
							<div class="col-md-3">
								<h2 class="section-title">Useful Links</h2>
								<ul class="arrow">
									<li><a href="#">Eiusmod tempor incididunt</a></li> 
									<li><a href="#">Tenim ad minim venia</a></li>
									<li><a href="#">Quis nostrud exercitation</a></li> 
									<li><a href="#">Ullamco laboris reprehenderit</a></li> 
									<li><a href="#">Duis aute dolor voluptat</a></li>
									<li><a href="#">Velit esse cillum dolore</a></li> 
									<li><a href="#">Excepteur sint occaeca</a></li>
								</ul>
							</div>
						</div>
						
						<h2 class="section-title">Our Team</h2>
						<div class="row">

							<div class="col-md-3">
								<div class="team">
									<figure class="team-image"><img src={person1} alt=""/></figure>
									<h2 class="team-name">Sarah Stuart</h2>
									<small class="team-title">Co-founder</small>
									<div class="social-links">
									

										<a href="" class="facebook"> <IconFont type="icon-facebook" /></a>
										<a href="" class="twitter"> <IconFont type="icon-twitter" /></a>
										<a href="" class="google-plus"><IconFont type="icon-tuichu" /></a>
								
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="team">
									<figure class="team-image"><img src={person2} alt="" /></figure>
									<h2 class="team-name">John Doe</h2>
									<small class="team-title">Managing Director</small>
									<div class="social-links">
									<a href="" class="facebook"> <IconFont type="icon-facebook" /></a>
										<a href="" class="twitter"> <IconFont type="icon-twitter" /></a>
										<a href="" class="google-plus"><IconFont type="icon-tuichu" /></a>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="team">
									<figure class="team-image"><img src={person3} alt="" /></figure>
									<h2 class="team-name">Jessica Branson</h2>
									<small class="team-title">Reviewer</small>
									<div class="social-links">
									<a href="" class="facebook"> <IconFont type="icon-facebook" /></a>
										<a href="" class="twitter"> <IconFont type="icon-twitter" /></a>
										<a href="" class="google-plus"><IconFont type="icon-tuichu" /></a>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="team">
									<figure class="team-image"><img src={person4} alt=""/></figure>
									<h2 class="team-name">Sarah Stuart</h2>
									<small class="team-title">Consultant</small>
									<div class="social-links">
									<a href="" class="facebook"> <IconFont type="icon-facebook" /></a>
										<a href="" class="twitter"> <IconFont type="icon-twitter" /></a>
										<a href="" class="google-plus"><IconFont type="icon-tuichu" /></a>
										
										
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div> 
			</main>
			
		</div>
<Footer_section/>
  </>

  )}
export default App;
