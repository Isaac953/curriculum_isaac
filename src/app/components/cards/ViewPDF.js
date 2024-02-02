import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './MyDocument';

export const ViewPDF = () => {
  return (
    <PDFViewer style={{ width: '100%', height: '200vh' }}>
    <MyDocument />
  </PDFViewer>
  )
}
