import React, { useEffect } from 'react';

let st;
export const Page2 = () => {
  console.log(`BeforeRender, timestamp ${Date.now()}`);
  st = Date.now();

  useEffect(() => {
    console.log(`AfterRender, timestamp ${Date.now()}, diff ${st - Date.now()}`);
  }, []);

  return (
    <div>
      <div>
        Page2
      </div>
    </div>
  );
};
