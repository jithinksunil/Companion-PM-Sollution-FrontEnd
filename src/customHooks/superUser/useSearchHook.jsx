import { useEffect, useState } from 'react'
import { getApi } from '../../api/axiosCalls';

function useSearchHook(setData) {
  const [search, setSearch] = useState("");
    useEffect(() => {
        getApi(
          `/project?search=${search}`,
          (response) => {
            const {  data } = response.data;
            setData(data);
          }
        );
      }, [search]);
      return {search,setSearch}
      
}

export default useSearchHook
