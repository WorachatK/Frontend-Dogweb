import React from 'react'
import { HelpUsContainer,HelpUsWrap,HelpUsHead,HelpUsHeadText,HelpUsIconContainer,HelpUsParent,HelpUsGrid,IconText,LogoIcon } from './HelpElement'
import {logo} from '../data'

const HelpUs = () => {
  return (
    <HelpUsContainer id='help'>
        <HelpUsWrap>
            <HelpUsHead>
                <HelpUsHeadText>Than you can help our shelter</HelpUsHeadText>
            </HelpUsHead>

            <HelpUsIconContainer>
                <HelpUsParent>
                {logo.map(item=>(
                    <HelpUsGrid>
                        <LogoIcon>{item.img}</LogoIcon>
                        <IconText>{item.name}</IconText>
                    </HelpUsGrid>
                ))}
                </HelpUsParent>
            </HelpUsIconContainer>

        </HelpUsWrap>
    </HelpUsContainer>
  )
}

export default HelpUs