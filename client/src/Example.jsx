import React from 'react';
import styled, { keyframes } from 'styled-components';

const marqueeWidth = 300; // Adjust this value as needed
const speed = 1; // Adjust this value to control the speed of the animation

const DualMarqueeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 400px; /* Adjust the height as needed */
  background-color: #f0f0f0; /* Background color for the container */
`;

const MarqueeContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  height: 50%;
`;

const MarqueeDiv = styled.div`
  flex: 1;
  animation: ${props => props.reverse ? reverseMarquee : marquee} 5s linear infinite; /* Adjust the duration */
`;

const marquee = keyframes`
  0% { transform: translateX(10%); }
  100% { transform: translateX(-100%); }
`;

const reverseMarquee = keyframes`
  0% { transform: translateX(-10%); }
  100% { transform: translateX(100%); }
`;

const RedMarquee = styled(MarqueeContainer)`
  display: flex;
  gap: 1rem;
  background-color: #ff5733;
`;

const GreenMarquee = styled(MarqueeContainer)`
  display: flex;
  gap: 1rem;
  background-color: #33ff57;
  animation-delay: 2.5s; /* Half the duration of the other marquee */
`;

const Example = () => {

    return (
        <DualMarqueeWrapper>
            <RedMarquee>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
                <MarqueeDiv>This is the red marquee</MarqueeDiv>
            </RedMarquee>
            <GreenMarquee>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
                <MarqueeDiv reverse>This is the green marquee</MarqueeDiv>
            </GreenMarquee>
        </DualMarqueeWrapper>
    )
}

export default Example;
