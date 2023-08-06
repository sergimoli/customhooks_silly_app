import React, { useId } from "react";

function MyComponent() {
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();
  console.log(id1);
  console.log(id2);
  console.log(id3);
  console.log(id4);
  return (
    <div>
      <h1>hook useId</h1>
      <input id={id1} name="name" placeholder="name" />
    </div>
  );
}

export default MyComponent;
