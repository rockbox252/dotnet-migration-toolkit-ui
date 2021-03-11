import axios from 'axios';
import { GENERATE_REPORT } from './types';

export const generateReport = (path, reportType) => async dispatch => {
  const { data } = await axios.post(
    `https://localhost:44302/api/v1/analyze/${reportType}`,
    {
      path,
    }
  );
  dispatch({ type: GENERATE_REPORT, payload: { data, path, reportType } });
};

// https://localhost:44302
