import {useState, useEffect} from 'react';

function useDebounce(value: string, delay: number) {
  const [debouncedvalue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedvalue;
}

export default useDebounce;
