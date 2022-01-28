import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LinkItem } from '../Footer/FooterStyles';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I have an excellent background as a Web Developer along with my academic
        education in Computer Science and Technology. The experience and my
        academic education have provided me with some outstanding and technical
        skills. Furthermore, I have the excellence of creating upstanding
        designs of novelty. I firmly believe that these qualities make me
        different from the rest of the contestants I would like to inform you
        also that I am highly skilled with HTML, CSS, JavaScrip, ReactJS, React
        Native and Python Django as I have handsome experience with them. Still,
        I am always eager to learn anew and make my skill sharper whenever I get
        any chance. Above the beyond, I have a great passion for mobile and
        software technology as well. I have worked with some mobile companies
        and enjoyed the work a lot. My recruiters are always delighted with my
        creativity, hard-working and stamina. For why I believe myself to be the
        best candidate and a great asset to your project. My profile, portfolio,
        and work history are also attached herewith for your kind consideration
        that will help you recognize my skill. Thank you for taking the time to
        review the portfolio
        
        
      </SectionText>

      <LinkItem href="mailto:rubelrana.h83@gmail.com">
        <Button>Hire Me </Button>
      </LinkItem>
    </LeftSection>
  </Section>
);

export default Hero;