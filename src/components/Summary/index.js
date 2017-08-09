// @flow

import React from 'react';
import { connect } from 'react-redux';
import { zipWith } from 'lodash';
import {
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryBar,
  VictoryTheme,
  Line
} from 'victory';

import { monthRange, chartColors } from '../../config';
import monthlyGoalData, { type MonthlyGoalData } from '../../store/selectors/monthlyGoalData';
import Money from '../../model/money';
import './tooltip';

function Summary(props: { data: MonthlyGoalData }) {
  const bars = props.data.map((goalData, i) =>
    <VictoryBar
      key={goalData.goal.id}
      style={{ data: { fill: chartColors[i] } }}
      data={zipWith(monthRange, goalData.data, (month, amount) => {
        return {
          x: month.name,
          y: amount ? parseFloat(amount.toFixed(2)) : 0.0
        };
      })}
      events={[
        {
          target: 'data',
          eventHandlers: {
            onMouseOver() {
              window.tooltipText = goalData.goal.name;
            },
            onMouseOut() {
              window.tooltipText = '';
            }
          }
        }
      ]}
    />
  );

  const sums = monthRange.map((month, i) =>
    new Money(
      props.data
        .map(goalData => (goalData.data ? goalData.data[i] : null))
        .reduce((a, b) => a.plus(b || new Money(0)), new Money(0))
    ).toString()
  );

  return (
    <div onMouseMove={window.onSummaryMouseMove}>
      <VictoryChart
        theme={VictoryTheme.material}
        height={500}
        width={1000}
        padding={75}
        domainPadding={{ x: 30, y: 20 }}
      >
        <VictoryStack
          labels={sums}
          style={{ labels: { fontSize: '12px', fontWeight: 'bold' } }}
        >
          {bars}
        </VictoryStack>
        <VictoryAxis
          tickValues={monthRange.map(month => month.toString().substr(0, 3))}
          gridComponent={<Line style={{ display: 'none' }} />}
        />
        <VictoryAxis
          dependentAxis
          tickCount={10}
          tickFormat={tick => new Money(tick).toString()}
          gridComponent={<Line style={{ display: 'none' }} />}
        />
      </VictoryChart>
    </div>
  );
}

const mapStateToProps = state => ({
  data: monthlyGoalData(state)
});

export default connect(mapStateToProps)(Summary);
