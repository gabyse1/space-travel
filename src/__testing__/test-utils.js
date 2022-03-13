import React from 'react';
import { PropTypes, string } from 'prop-types';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rocketsReducer from '../redux/rockets/rocketsReducer';
import dragonsReducer from '../redux/dragons/dragonsReducer';
import missionsReducer from '../redux/missions/missionsReducer';

const customRender = (ui, {
  preloadedState,
  store = configureStore({
    reducer: { rocketsReducer, dragonsReducer, missionsReducer },
    preloadedState,
  }),
  ...renderOptions
} = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      {children}
    </Provider>
  );
  Wrapper.propTypes = {
    children: PropTypes.objectOf(string).isRequired,
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
