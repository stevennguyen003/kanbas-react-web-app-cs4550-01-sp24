import React, { useState } from "react";
import { Routes, Route, Navigate, useParams, Link, useLocation } from "react-router-dom";

/* 
function Abc({ d = {b: "c"}}) {
    const a = {
        b: "b",
        c: 1,
      };
      const e = {
        ...a,
        ...d,
      };
      return (
        <ul>
          <li>{e.c}</li>
          <li>{e.b}</li>
        </ul>
      );
}
export default Abc
*/

/*
export default function Abc({ d = ["c"] }) {
    const [a, b] = useState({ c: "q", d: __4__ });

    const x = (e) => b({ ...a, c: e.__6__.__7__ });
    const y = (s) => b({ ...a, d: parseInt(__8__.__6__.__7__) });

    return (
        <div>
            <input id="r" c={a.c} __10__={x} />
            <input id="t" __9__={a.d} __10__={y} />
            {JSON.stringify(a, null, 2)}
        </div>
    );
}
*/

function Abc() {
    const q = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <ul>
        {q.map((s) => (
          <li key={s}>
            2 x {s} = {2 * s}
          </li>
        ))}
      </ul>
    );
  }
  export default Abc;