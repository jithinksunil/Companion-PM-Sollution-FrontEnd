import { useEffect, useState } from 'react'
import { getApi } from '../../api/axiosCalls';

function useSearchHook(setData) {
  const [search, setSearch] = useState("");
  const [allowWorking,setAllowWorking]=useState(false)
  useEffect(() => {
    if(allowWorking){
      getApi(
        `/project?search=${search}`,
        (response) => {
          const { data } = response.data;
          setData(data);
        }
      );
    }
  }, [search]);

  useEffect(()=>{
    setAllowWorking(true)
  },[])
  
  return { search, setSearch }

}

export default useSearchHook
