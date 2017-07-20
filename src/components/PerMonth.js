import React from 'react';
import { connect } from 'react-redux';

import goalIsActive from '../store/selectors/goalIsActive';
import amountPerMonth from '../store/selectors/amountPerMonth';
import Money from '../model/money';

function PerMonth(props: { amount: Money, active: boolean }) {
  const { amount, active } = props;

  return (
    <td
      style={{
        fontWeight: active ? 'bold' : 'normal',
        color: active ? '#000' : '#aaa'
      }}
    >
      {amount ? amount.toString() : '- -'}
    </td>
  );
}

const mapStateToProps = (state, props) => ({
  amount: amountPerMonth(state, props),
  active: goalIsActive(state, props)
});

export default connect(mapStateToProps)(PerMonth);
