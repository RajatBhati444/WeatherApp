import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store';

export const useAppSelector = useSelector.withTypes<RootState>();
