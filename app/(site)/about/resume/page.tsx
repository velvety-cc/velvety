import Link from 'next/link';

export default function Resume() {
    return (
        <div>
            <Link href='/about'>Back</Link>
            <div>Resume</div>
            <div>Education</div>
            <div>
                <span>New York University</span>
                <span>2018 - 2022</span>
            </div>
            <div>Concentration in finance, computer science, and math</div>
            <div>Research</div>
            <div>
                Chi, Y., Hao, W., & Zhang, Y. (2022). Volatility model
                applications in China’s SSE50 options market. Journal of Futures
                Markets, 42, 1704– 1720. https://doi.org/10.1002/fut.22294
            </div>
            <div>
                Zhang, Y., Junqu e de Fortuny, E. (2022). State of the DeFi
                Landscape: Charting the Global DeFi Ecosystem. Service Science,
                Under Review
            </div>
            <div> Professional Experience</div>
            <div>
                <span>Blockless Network</span>
                <span>San Francisco, CA</span>
            </div>
        </div>
    );
}
