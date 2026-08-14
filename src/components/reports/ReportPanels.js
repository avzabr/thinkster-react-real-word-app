import React from 'react';

export const ReportPanels = ({ data }) => {
  return (
    <div>
      <section id="panel1" dangerouslySetInnerHTML={{ __html: data.panel1Html }} />
      <section id="panel2" dangerouslySetInnerHTML={{ __html: data.panel2Html }} />
      <section id="panel3" dangerouslySetInnerHTML={{ __html: data.panel3Html }} />
      <section id="panel4" dangerouslySetInnerHTML={{ __html: data.panel4Html }} />
      <section id="panel5" dangerouslySetInnerHTML={{ __html: data.panel5Html }} />
      <section id="panel6" dangerouslySetInnerHTML={{ __html: data.panel6Html }} />
      <section id="panel7" dangerouslySetInnerHTML={{ __html: data.panel7Html }} />
      <section id="panel8" dangerouslySetInnerHTML={{ __html: data.panel8Html }} />
      <section id="panel9" dangerouslySetInnerHTML={{ __html: data.panel9Html }} />
      <section id="panel10" dangerouslySetInnerHTML={{ __html: data.panel10Html }} />
    </div>
  );
};
