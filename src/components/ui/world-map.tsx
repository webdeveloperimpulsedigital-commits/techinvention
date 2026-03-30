import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
    color?: string;
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(svgRef, { once: true, margin: "-100px" });
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const isDark = document.documentElement.classList.contains("dark");

  const svgMap = map.getSVG({
    radius: 0.22,
    color: isDark ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: isDark ? "black" : "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {isInView && dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={`url(#path-gradient-${i})`}
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          {dots.map((dot, i) => (
            <linearGradient id={`path-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%" key={`gradient-${i}`}>
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={dot.color || lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={dot.color || lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {isInView && dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            {i === 0 && (
              <g key={`start-${i}`}>
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="3.5"
                  fill={isDark ? "#ffffff" : "#000000"}
                />
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="3.5"
                  fill={isDark ? "#ffffff" : "#000000"}
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    from="3.5"
                    to="12"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.6"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x={projectPoint(dot.start.lat, dot.start.lng).x + 8}
                  y={projectPoint(dot.start.lat, dot.start.lng).y + 3}
                  fontSize="8"
                  fontWeight="bold"
                  fill={isDark ? "#ffffff" : "#000000"}
                  className="drop-shadow-md"
                >
                  TechInvention (HQ)
                </text>
              </g>
            )}
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={dot.color || lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={dot.color || lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
              {dot.end.label && (
                <text
                  x={projectPoint(dot.end.lat, dot.end.lng).x + 4}
                  y={projectPoint(dot.end.lat, dot.end.lng).y + 3}
                  fontSize="7"
                  fill={isDark ? "#ffffff" : "#000000"}
                  className="font-medium opacity-80"
                >
                  {dot.end.label}
                </text>
              )}
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
