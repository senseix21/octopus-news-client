import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='mt-3'>
            <h1>Welcome to our OctopusNews</h1> <br />
            <h3>By accessing or using our site, you agree to comply with and be bound by the following terms and conditions:</h3>
            <p>

                Use of Content: All content on this site, including but not limited to articles, images, videos, and audio, is owned by the newspaper site and is protected by copyright law. You may only use the content for personal, non-commercial purposes, and you must not modify, distribute, or reproduce any content without our prior written consent. <br /> <br />

                User Conduct: By using our site, you agree to abide by all applicable laws and regulations, and you must not engage in any activity that may harm, disrupt, or interfere with our site, its users, or our business. You must not use our site to post or transmit any content that is unlawful, offensive, discriminatory, or defamatory. <br /> <br />

                Registration and Account Security: You may be required to create an account to access certain content or features on our site. You must provide accurate and complete information when registering, and you are responsible for maintaining the confidentiality and security of your account information. You must not share your account information with any third party.<br /> <br />

                Links to Third-Party Sites: Our site may contain links to third-party websites or resources. We do not endorse or control these sites or resources, and we are not responsible for their content or their privacy practices. You access these sites at your own risk.<br /> <br />

                Termination: We may terminate or suspend your access to our site at any time and for any reason, including without limitation, if we believe that you have violated these terms and conditions. We reserve the right to modify or discontinue our site, or any part thereof, at any time without notice.<br /> <br />

                Disclaimer of Warranties: Our site and all content, materials, information, and services provided on our site are provided on an "as is" and "as available" basis. We make no warranties, express or implied, including without limitation, warranties of merchantability, fitness for a particular purpose, or non-infringement.<br /> <br />

                Limitation of Liability: To the extent permitted by law, we will not be liable for any damages arising out of or in connection with your use of our site, including without limitation, any direct, indirect, incidental, consequential, or punitive damages.<br /> <br />

                Indemnification: You agree to indemnify and hold us harmless from any claim, demand, or damage, including reasonable attorneys' fees, arising out of or in connection with your use of our site or any content you post or transmit through our site.<br /> <br />

                Governing Law: These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which our business is located.<br /> <br />

                Changes to these Terms: We may modify these terms and conditions at any time without notice. Your continued use of our site after any such modifications will constitute your acceptance of the modified terms.

                Thank you for using our newspaper site.</p><br />
            <h4>Go back to <Link to={'/signup'}>Registration.</Link></h4>
        </div>
    );
};

export default Terms;