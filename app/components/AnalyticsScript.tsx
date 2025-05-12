import React from 'react';

const AnalyticsScript = () => (
	<script
		dangerouslySetInnerHTML={{
			__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-DBX3VB3DGJ');
      `
		}}
	/>
);

export default AnalyticsScript;
