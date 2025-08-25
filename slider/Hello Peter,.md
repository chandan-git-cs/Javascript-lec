Hello Peter,

Hope you are doing good.

I have added the hamburger menu with compound structures on the prediction listing page including two options:

1. Copy SMILES to clipboard
2. Send to SynRoute

Please review the latest changes and let me know if any changes are required.

Additionally, I noticed that the current implementation of the SynRoute frontend does not handle SMILES strings passed through the URL. As a result, the “Send to SynRoute” option currently only navigates the user to the SynRoute page without passing any SMILES data. Please let me know if you would like me to implement the functionality to handle the SMILES string on SynRoute. If so, kindly create an Azure task for it.

Ramin, I have created two pull requests for this task: one for core-frontend and another for syndesign-frontend. Kindly review them and merge them into the main branch when you have a chance.


Hello Ramin,

Hope you are doing good.

I have added an error dialog box to handle Auth0 login failures with a 401 (Unauthorized) status and created a PR for it. Please review the changes and merge them into the main branch if everything looks good.

Let me know if any updates or adjustments are needed.

Also, I noticed that dev.synfini.com and test.synfini.com are not accessible on my end, so I will not be able to verify the changes once deployed. Could you please provide me with access to these domains so I can test the changes there?



