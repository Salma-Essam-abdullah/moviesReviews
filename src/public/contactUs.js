/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Head_section from "./shared/Head_section";
import Footer_section from "./shared/Footer_section";

function contactUs() {
        
    return (
    <>
     <Head_section/>
    <Footer_section/>
    <main class="main-content">
    <div class="container">
					<div class="page">
						<div class="breadcrumbs">
							<a href="index.html">Home</a>
							<span>Contact</span>
                            </div>
				     </div>
                     <div class="content">
							<div class="row">
								<div class="col-md-4">
									<h2>Contact</h2>
									<ul class="contact-detail">
										<li>
											<img src="images/icon-contact-map.png" alt="#" />
											<address><span>Company name. INC</span> <br/>550 Avenue Street, New york</address>
										</li>
										<li>
											<img src="images/icon-contact-phone.png" alt="" />
											<a href="tel:1590912831">+1 590 912 831</a>
										</li>
										<li>
											<img src="images/icon-contact-message.png" alt="" />
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
    </>
    )

}
export default contactUs;