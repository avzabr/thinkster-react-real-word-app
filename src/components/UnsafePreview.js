// TEMPORARY TEST FIXTURE for OX pipeline-scan validation (OXDEV-83358 repro).
// Deliberately vulnerable: renders an unsanitized URL parameter as raw HTML (XSS).
// Do not merge.
import React from 'react';

const UnsafePreview = () => {
  const params = new URLSearchParams(window.location.search);
  const userSuppliedHtml = params.get('preview') || '';

  // XSS: user-controlled value passed straight to dangerouslySetInnerHTML
  return <div dangerouslySetInnerHTML={{ __html: userSuppliedHtml }} />;
};

export const renderUnsafe = (untrusted) => {
  // XSS: direct DOM sink with untrusted input
  document.getElementById('root').innerHTML = untrusted;
  // Code injection: evaluating untrusted input
  return eval(untrusted);
};

export default UnsafePreview;
