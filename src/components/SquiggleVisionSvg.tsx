export default function SquiggleVisionSvg() {
    return (
        <svg width={0} height={0}>
            <filter id="turbulence-1">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.001"
                    numOctaves="2"
                    data-filterid="3"
                />
                <feDisplacementMap
                    xChannelSelector="R"
                    yChannelSelector="G"
                    in="SourceGraphic"
                    scale="25"
                />
            </filter>

            <filter id="turbulence-2">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.0015"
                    numOctaves="2"
                    data-filterid="3"
                />
                <feDisplacementMap
                    xChannelSelector="R"
                    yChannelSelector="G"
                    in="SourceGraphic"
                    scale="25"
                />
            </filter>

            <filter id="turbulence-3">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.002"
                    numOctaves="2"
                    data-filterid="3"
                />
                <feDisplacementMap
                    xChannelSelector="R"
                    yChannelSelector="G"
                    in="SourceGraphic"
                    scale="25"
                />
            </filter>

            <filter id="turbulence-4">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.0025"
                    numOctaves="2"
                    data-filterid="3"
                />
                <feDisplacementMap
                    xChannelSelector="R"
                    yChannelSelector="G"
                    in="SourceGraphic"
                    scale="25"
                />
            </filter>

            <filter id="turbulence-5">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.003"
                    numOctaves="2"
                    data-filterid="3"
                />
                <feDisplacementMap
                    xChannelSelector="R"
                    yChannelSelector="G"
                    in="SourceGraphic"
                    scale="25"
                />
            </filter>
        </svg>
    );
}
