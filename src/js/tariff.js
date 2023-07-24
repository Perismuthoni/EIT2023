import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import tariff from '../images/tariff.pdf';

const Tariff = () => {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
    //
    // const onDocumentLoadSuccess = ({ numPages }) => {
    //     setNumPages(numPages);
    //     setPageNumber(1);
    // };

    return (
        // <div>
        //     <Document file={tariff}   onLoadSuccess={onDocumentLoadSuccess} >
        //         <Page pageNumber={pageNumber} />
        //     </Document>
        //
        //     <p>
        //         Page {pageNumber} of {numPages}
        //     </p>
        //
        //     <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
        //         Previous Page
        //     </button>
        //
        //     <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
        //         Next Page
        //     </button>
        //
        // </div>
        <div>
            <iframe src={tariff} width="70%" height="600px" title="PDF Viewer" />
        </div>
    );
};

export default Tariff;
