import { useEffect, useState } from 'react';
import { getApi } from '../../api/axiosCalls';


function SearchHook(setData) {
    const [search, setSearch] = useState("");
    useEffect(() => {
        getApi(
            `/admin/superusermanagement?search=${search}`,
          (response) => {
            const {  superUsersData } = response.data;
            setData(superUsersData);
          }
        );
      }, [search]);
      return {search,setSearch}
}

export default SearchHook
