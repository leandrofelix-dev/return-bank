import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import '../styles/global.css';

export function SwitchDemo (){
  return(
    <div className="flex center">
      <div className="Label pr-4" >
      </div>
      <Switch.Root className="SwitchRoot" id="">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </div>
  )
};
