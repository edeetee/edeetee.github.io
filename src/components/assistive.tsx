import { PortfolioTag, RenderPortfolio } from "src/lib/Portfolio";
import { portfolioItems } from '@src/lib/PortfolioItem';

export const Assistive = () =>
    <>
        <p style={{ fontSize: 48, fontStyle: 'italic' }}>UX & Accessible technology</p>
        <div style={{ borderLeft: 'white solid', paddingLeft: 32 }} >
            <p>
                I want to use my unique position (skills, privilege, experience) to assist with the complexity and problems of the world we live in.
            </p>
            <p>
                I've had my fair share of mental difficulties and understand some of the invisible barriers the world has for differently abled people.
                I want to leverage my place in the world for positive outcomes for humans and our environment.
            </p>
        </div>
        {RenderPortfolio(portfolioItems.filter(item => item.tag == PortfolioTag.Assistive))}
    </>