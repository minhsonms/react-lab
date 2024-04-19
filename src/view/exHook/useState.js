import React, { useState } from "react";
export function UseState() {
  const [count, setCount] = useState(0);
  const [student, setStudent] = useState({
    name: "Luan",
    age: 18,
    address: {
      province: "HCM",
      district: "Binh thanh",
    },
  });

  return (
    <div>
      <div>
        <h1>UseState</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>

      <div>
        <h1>Student</h1>
        <p>address: {student.address.province}</p>
        <button
          onClick={() => setStudent({ address: { province: "Binh phuoc" } })}
        >
          change province
        </button>
      </div>
    </div>
  );
}
