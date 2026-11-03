import React from 'react';
import Link from 'next/link';
import { septicTowns } from '@/lib/septicTowns';

/** Inline, comma-separated links to every septic town page */
export default function SepticTownLinks({ linkClassName = 'text-theme-3 hover:underline' }: { linkClassName?: string }) {
  return (
    <>
      {septicTowns.map((town, i) => (
        <React.Fragment key={town.slug}>
          {i > 0 && (i === septicTowns.length - 1 ? ', and ' : ', ')}
          <Link href={`/septic-service/${town.slug}`} className={linkClassName}>{town.name}</Link>
        </React.Fragment>
      ))}
    </>
  );
}
