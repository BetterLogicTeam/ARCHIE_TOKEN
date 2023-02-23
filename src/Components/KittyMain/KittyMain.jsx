import React from 'react'
import WeCareKitty_Sponsoring from '../WeCareKitty_Sponsoring/WeCareKitty_Sponsoring';
import WeCareKitty_Vision from '../WeCareKitty_Vision/WeCareKitty_Vision';
import WeCareKitty_Cat from '../WeCareKitty_Cat/WeCareKitty_Cat';
import WeCareKitty from '../WeCareKitty/WeCareKitty';

function KittyMain() {
  return (
    <div className='pb-5'>

<WeCareKitty />
<WeCareKitty_Cat />     
<WeCareKitty_Vision />
<WeCareKitty_Sponsoring />  

    </div>
  )
}

export default KittyMain
