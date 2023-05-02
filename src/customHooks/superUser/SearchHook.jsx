import { useEffect } from 'react'
import { getApi } from '../../api/axiosCalls';

function SearchHook({search,setData}) {
    useEffect(() => {
        getApi(
          `/project?search=${search}`,
          (response) => {
            const {  data } = response.data;
            setData(data);
          }
        );
      }, [search]);
      
}

export default SearchHook
