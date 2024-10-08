// data.js

import { FaLinkedin, FaInstagram, FaFacebookSquare, FaGooglePlay, FaApple } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

export const socialMediaData = {
  logo: '../../logo.png',
  socialIcons: [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/imaggar-technologies/' },
    { icon: FaInstagram, href: 'https://www.instagram.com/imaggar_technologies/' },
    { icon: FaFacebookSquare, href: 'https://www.facebook.com/profile.php?id=100092688897746&mibextid=ZbWKwL' },
    { icon: IoMdMail , href: 'support@imaggar.in' },
  ],
  otherIcons: [
   
    { icon: FaGooglePlay, href: 'https://play.google.com' },
    { icon: FaApple, href: 'https://apple.com' },
  ],
};

export const footerData = [
  {
    title: 'Services',
    links: [
      { label: 'Software Development', url: '#' },
      { label: 'Marketing', url: '#' },
      { label: 'Branding', url: '#' },
      { label: 'Vulnerability Management', url: '#' },
    ],
  },
  // {
  //   title: 'Products',
  //   links: [
  //     { label: 'C.l.a.r.i.s', url: '#' },
  //     { label: 'S.i.t.e', url: '#' },
  //     { label: 'C.o.r.e', url: '#' },
  //     { label: 'V.o.i.c.e', url: '#' },
  //     { label: 'C.a.r.e', url: '#' },
  //   ],
  // },
  {
    title: 'Company',
    links: [
      { label: 'About Us', url: '#' },
      { label: 'Our Services', url: '#' },
      { label: 'Privacy Policy', url: '#' },
      { label: 'Careers', url: '#' },
    ],
  },
];
