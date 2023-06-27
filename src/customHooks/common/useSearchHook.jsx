import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { debounce } from 'lodash';

function useSearchHook(searchApi, setData) {
  const [search, setSearch] = useState("");
  const [allowWorking, setAllowWorking] = useState(false)

  useEffect(() => {
    const request = axios.CancelToken.source()
    if (allowWorking) {

      const debounceSearch = debounce((search) => {
        searchApi(search, request.token).then((response) => {
          console.log(response);
          const { data } = response.data;
          setData(data)
        }).catch((err) => {
          console.log(err);
          if (err.name !== "CanceledError") {
            toast.error(err.response?.data?.message || err.message)
          }
        })
      }, 400)

      debounceSearch(search)
    }
    return (() => {
      request.cancel()
    })

  }, [search]);

  useEffect(() => {
    setAllowWorking(true)
  }, [])

  return { search, setSearch }

}

export default useSearchHook
