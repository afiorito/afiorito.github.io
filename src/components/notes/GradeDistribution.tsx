import { Bar } from '@vx/shape';
import { Group } from '@vx/group';
import { ParentSize } from '@vx/responsive';
import tw from 'twin.macro';
import { GradeData } from 'types';
import { Fragment, MouseEvent, TouchEvent, useMemo } from 'react';
import { scaleBand, scaleLinear } from '@vx/scale';
import { AxisBottom, AxisLeft } from '@vx/axis';
import { ClassNames } from '@emotion/react';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@vx/tooltip';
import { localPoint } from '@vx/event';

interface GradeDistributionProps {
  distribution: GradeData[];
  grade: string;
}

export const GradeDistribution = ({ distribution, grade }: GradeDistributionProps) => {
  return (
    <ParentSize>
      {({ width, height }) => (
        <GradeDistributionChart
          distribution={distribution}
          grade={grade}
          width={width}
          height={height}
        />
      )}
    </ParentSize>
  );
};

interface GradeDistributionChartProps {
  grade: string;
  height: number;
  width: number;
  distribution: GradeData[];
}

const GradeDistributionChart = ({
  distribution,
  grade,
  width,
  height,
}: GradeDistributionChartProps) => {
  const margin = { top: 16, left: 30, right: 0, bottom: 20 + 16 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const { backgroundColor, color, ...tooltipStyles } = defaultStyles;

  const { tooltipData, tooltipLeft, tooltipTop, tooltipOpen, showTooltip, hideTooltip } =
    useTooltip<GradeData>();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
  });

  const xScale = useMemo(
    () =>
      scaleBand({
        range: [0, xMax],
        domain: distribution.map((d) => d.letter),
        padding: Math.min(xMax / 1000, 0.5),
      }),
    [distribution, xMax],
  );

  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [0, yMax],
        domain: [Math.max(...distribution.map((d) => d.count)) + 1, 0],
      }),
    [distribution, yMax],
  );

  const handleMouseOver = (
    event: TouchEvent<SVGRectElement> | MouseEvent<SVGRectElement>,
    grade: GradeData,
  ) => {
    if (!event.currentTarget.ownerSVGElement) return;

    const coords = localPoint(event.currentTarget.ownerSVGElement, event);
    showTooltip({
      tooltipLeft: coords?.x,
      tooltipTop: coords?.y,
      tooltipData: grade,
    });
  };

  return (
    <div tw="relative">
      <ClassNames>
        {({ css }) => {
          const tickClassName = css`
            ${tw`fill-current text-gray-800 dark:text-white text-xs`}
          `;
          return (
            <Fragment>
              <svg ref={containerRef} width={width} height={height}>
                <rect
                  width={width}
                  height={height}
                  tw="fill-current text-transparent"
                  onTouchStart={hideTooltip}
                />
                <Group top={margin.top} left={margin.left}>
                  {distribution.map((d) => {
                    const barWidth = xScale.bandwidth();
                    const barHeight = yMax - (yScale(d.count) ?? 0);
                    const barX = xScale(d.letter) ?? 0;
                    const barY = yMax - barHeight;
                    const textX = barX + barWidth / 2 - 3;
                    const textY = barY + 8;

                    return (
                      <Fragment key={d.letter}>
                        <Bar
                          x={barX}
                          y={barY}
                          width={barWidth}
                          height={barHeight}
                          tw="fill-current text-blue-400"
                          onMouseOver={(e) => handleMouseOver(e, d)}
                          onTouchStart={(e) => handleMouseOver(e, d)}
                          onMouseOut={hideTooltip}
                        />
                        {grade === d.letter && (
                          <text
                            x={textX}
                            y={textY}
                            transform={`rotate(90 ${textX} ${textY})`}
                            tw="fill-current font-bold text-xs text-blue-300 pointer-events-none"
                          >
                            My grade
                          </text>
                        )}
                      </Fragment>
                    );
                  })}
                  <AxisLeft
                    left={0}
                    scale={yScale}
                    numTicks={5}
                    axisLineClassName={css`
                      ${tw`stroke-current text-gray-600 dark:text-gray-300`}
                    `}
                    tickClassName={css`
                      ${tw`text-gray-600 dark:text-gray-300`}
                    `}
                    tickStroke="currentColor"
                    tickLabelProps={() => ({
                      className: tickClassName,
                      textAnchor: 'end',
                      verticalAnchor: 'middle',
                      dx: '-0.33em',
                    })}
                  />
                  <AxisBottom
                    hideTicks={true}
                    scale={xScale}
                    top={yMax}
                    numTicks={xMax < 300 ? distribution.length / 2 : distribution.length}
                    axisLineClassName={css`
                      ${tw`stroke-current text-gray-600 dark:text-gray-300`}
                    `}
                    tickLabelProps={() => ({
                      className: tickClassName,
                      textAnchor: 'middle',
                    })}
                  />
                </Group>
              </svg>
              {tooltipOpen && (
                <TooltipInPortal
                  top={tooltipTop}
                  left={tooltipLeft}
                  style={tooltipStyles}
                  tw="h-16 w-24 bg-blue-100 dark:bg-blue-200 opacity-95 text-gray-800"
                >
                  <div tw="space-y-1">
                    <div tw="text-xl font-medium">{tooltipData?.letter}</div>
                    <div>
                      {tooltipData?.count} {tooltipData?.count == 1 ? 'Student' : 'Students'}
                    </div>
                  </div>
                </TooltipInPortal>
              )}
            </Fragment>
          );
        }}
      </ClassNames>
    </div>
  );
};
