import React from 'react';

import PropTypes from 'prop-types';
import createClass from 'create-react-class';
import BemMixin from '../utils/BemMixin';
import PureRenderMixin from '../utils/PureRenderMixin';


const CalendarSelection = createClass({
  mixins: [BemMixin, PureRenderMixin],
  displayName: "CalendarSelection",

  propTypes: {
    modifier: PropTypes.string,
    pending: PropTypes.bool.isRequired,
    focused: PropTypes.bool,
  },

  render() {
    let {modifier, pending, focused} = this.props;
    let modifiers = {[modifier]: true};
    modifiers.focused = focused;
    let states = {
      pending,
    };

    return (
      <div className={this.cx({states, modifiers})} />
    );
  },
});

export default CalendarSelection;
