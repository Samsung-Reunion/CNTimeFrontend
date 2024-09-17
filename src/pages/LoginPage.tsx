import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h2 className="text-4xl mb-4">순개발 타이머 뽀모뽀모</h2>
      <Link
        to="/runtimer"
        className="flex justify-center items-center gap-2 text-lg font-semibold md:text-base"
      >
        <p className="text-2xl text-indigo-700">시작하기</p>
      </Link>
    </div>
  );
};

export default LoginPage;
