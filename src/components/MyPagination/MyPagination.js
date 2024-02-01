import React, { useState } from 'react';

import { Pagination, ConfigProvider } from 'antd';

const MyPagination = ({total=50, pageSize=5})=> {
    const [current, setCurrent] = useState(1);

    const onChange = (page) => {
      console.log(page);
      setCurrent(page);
    };
    
return(
    <ConfigProvider
    theme={{
      components: {
        Pagination: {
            itemActiveBg: '#1890FF',
            colorPrimary: '#fff',
            colorPrimaryHover: '#fff',
            itemSize: 22,
            

        },
      },
    }}
  >
 <Pagination current={current} onChange={onChange} total={total} pageSize={pageSize} />
  </ConfigProvider>
)
}

export default MyPagination