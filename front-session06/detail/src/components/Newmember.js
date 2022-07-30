import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Newmember = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(nicknameRef.current.value);
    console.log(nameRef.current.value);
    fetch("https://16b9534b-1b6f-4e0a-bd63-b966d5d571f7.mock.pstmn.io/list/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        nickname: nicknameRef.current.value,
        role: roleRef.current.value,
        memId: memIdRef.current.value,
        description: descriptionRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("추가완료!");
      }
    });
  };
  const nameRef = useRef(null);
  const nicknameRef = useRef(null);
  const memIdRef = useRef(null);
  const roleRef = useRef(null);
  const descriptionRef = useRef(null);

  return (
    <>
      {/* {members.map(member=>(<option key={member.id}></option>))} */}
      <form>
        <input type="text" placeholder="name" ref={nameRef} />
        <input type="text" placeholder="nickname" ref={nicknameRef} />
        <input type="text" placeholder="memId" ref={memIdRef} />
        <input type="text" placeholder="role" ref={roleRef} />
        <input type="text" placeholder="description" ref={descriptionRef} />

        <button onClick={onSubmit}>멤버추가</button>
      </form>
    </>
  );
};

export default Newmember;
