// @flow

import React from 'react';
import linkState from 'linkstate';

import Money from '../model/money';
import Month from '../model/month';

type Props = {
  value: string | Money | Month,
  width: string,
  onChange: any
};

function editableValue(value: Money | Month | string) {
  if (value instanceof Money) {
    return value.valueOf();
  } else if (value instanceof Month) {
    return value.toString();
  } else {
    return value;
  }
}

export default class EditableBalance extends React.Component {
  props: Props;
  state = {
    editing: false,
    tempValue: editableValue(this.props.value)
  };

  editField: HTMLInputElement;
  cell: HTMLElement;

  submit = () => {
    let newValue = this.state.tempValue;

    if (this.props.value instanceof Money) {
      newValue = new Money((this.state.tempValue: any));
    } else if (this.props.value instanceof Month) {
      newValue = Month.fromMonthYearString((this.state.tempValue: any));
    }

    console.log('setting state');
    this.setState({ editing: false }, () => {
      console.log('calling onChange with', newValue);
      this.props.onChange(newValue);
    });
  };

  saveValue = (e: Event) => {
    if (
      (this.props.value instanceof Money &&
        Money.isValid((this.state.tempValue: any))) ||
      (this.props.value instanceof Month &&
        Month.isValidMonthYearString((this.state.tempValue: any))) ||
      typeof this.props.value === 'string'
    ) {
      this.submit();
    }
  };

  handleKeyDown = (e: Event) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.submit();
    }
  };

  startEditing = (e: Event) => {
    this.setState({ editing: true });
  };

  moveCursorToEnd = (e: Event) => {
    if (this.editField) {
      this.editField.value = '';
      this.editField.value = this.state.tempValue;
    }
  };

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ tempValue: editableValue(nextProps.value) });
  }

  render() {
    if (this.state.editing) {
      return (
        <td>
          <input
            ref={el => {
              if (el) {
                this.editField = el;
                el.focus();
              }
            }}
            type="text"
            value={this.state.tempValue}
            onChange={linkState(this, 'tempValue')}
            onKeyDown={this.handleKeyDown}
            onBlur={this.saveValue}
            style={{ width: `calc(${this.props.width} - 20px)` }}
            onFocus={this.moveCursorToEnd}
          />
        </td>
      );
    }

    return (
      <td style={{ width: this.props.width }}>
        <span onClick={this.startEditing}>
          {this.props.value.toString()}
        </span>
      </td>
    );
  }
}
