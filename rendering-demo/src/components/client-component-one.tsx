/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';

export const ClientComponentOne = () => {
  const [first, setFirst] = useState('Batman');

  return <h1>Client component one</h1>;
};
