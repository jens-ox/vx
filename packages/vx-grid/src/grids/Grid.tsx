import React from 'react';
import cx from 'classnames';
import { Group } from '@vx/group';
import GridRows, { GridRowsProps } from './GridRows';
import GridColumns, { GridColumnProps } from './GridColumns';
import { Scale, CommonGridProps } from '../types';

type CommonPropsToOmit = 'scale' | 'offset' | 'numTicks' | 'lineStyle' | 'tickValues';

export type GridProps<ScaleInput> = {
  xScale: Scale<ScaleInput, number>;
  yScale: Scale<ScaleInput, number>;
  xOffset: CommonGridProps['offset'];
  yOffset: CommonGridProps['offset'];
  numTicksRows: CommonGridProps['numTicks'];
  numTicksColumns: CommonGridProps['numTicks'];
  rowLineStyle: CommonGridProps['lineStyle'];
  columnLineStyle: CommonGridProps['lineStyle'];
  rowTickValues: CommonGridProps['tickValues'];
  columnTickValues: CommonGridProps['tickValues'];
} & Omit<GridRowsProps<ScaleInput>, CommonPropsToOmit> &
  Omit<GridColumnProps<ScaleInput>, CommonPropsToOmit>;

export default function Grid<ScaleInput>({
  top,
  left,
  xScale,
  yScale,
  width,
  height,
  className,
  stroke,
  strokeWidth,
  strokeDasharray,
  numTicksRows,
  numTicksColumns,
  rowLineStyle,
  columnLineStyle,
  xOffset,
  yOffset,
  rowTickValues,
  columnTickValues,
  ...restProps
}: GridProps<ScaleInput>) {
  return (
    <Group className={cx('vx-grid', className)} top={top} left={left}>
      <GridRows
        className={className}
        scale={yScale}
        width={width}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        numTicks={numTicksRows}
        lineStyle={rowLineStyle}
        offset={yOffset}
        tickValues={rowTickValues}
        {...restProps}
      />
      <GridColumns
        className={className}
        scale={xScale}
        height={height}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        numTicks={numTicksColumns}
        lineStyle={columnLineStyle}
        offset={xOffset}
        tickValues={columnTickValues}
        {...restProps}
      />
    </Group>
  );
}
