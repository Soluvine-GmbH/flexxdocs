hmLoadTopic({
hmKeywords:"",
hmTitle:"Vendor invoice validation journal",
hmDescription:"Vendor invoice validation journal is a dedicated job view that allows to review, edit and validate an invoice. A journal entry for a specific document can by accessed by...",
hmPrevLink:"ocr-invoice-processing.html",
hmNextLink:"vendor-imported-invoices.html",
hmParentLink:"ocr-invoice-processing.html",
hmBreadCrumbs:"FlexxLink &gt; <a href=\"user-manual.html\">User manual<\/a> &gt; Workspaces &gt; <a href=\"ocr-invoice-processing.html\">OCR Invoice processing<\/a>",
hmTitlePath:"FlexxLink > User manual > Workspaces > OCR Invoice processing > Vendor invoice validation journal",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Vendor invoice validation journal<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Vendor invoice validation journal is a dedicated job view that allows to review, edit and validate an invoice. A journal entry for a specific document can by accessed by clicking Edit in the OCR Invoice processing workspace list.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Vendor invoice validation journal overview:<\/p>\n\r<div class=\"p_Normal\"><img alt=\"clip0110\" style=\"width:100%;max-width:1664px;height:auto;border:none\" src=\".\/images\/clip0110.png\"\/><\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">1. <span style=\"font-weight: bold;\">Action buttons<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>General tab:<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Validate: perform validation using the assigned validation profile Id. Validation can be performed until the document has been posted.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Cancel: click to cancel the journal entry and remove the document from the workspace. NOTE: The document is permanently removed from the Workspace list.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Reject: click to reject the document and provide information to another user about the rejection reason.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Approve: click to approve the document once it has been successfully validated. The button is deactivated until the document has been successfully Validated.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Post: click to post the document and create an entry in D365 Procurement module. After posting the document is removed from the Workspace list. This button is deactivated until the document has been successfully approved.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Invoice tab:<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Hide\/View attachment: toggle to display or hide the document preview (10).<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Attachments: opens a new view with a list of the attachments related to the document entry.<\/p>\n\r<p class=\"p_Normal\">2. <span style=\"font-weight: bold;\">Show log<\/span> <\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">Click to display internal Dynamics 365 Finance &amp; SCM error thrown during posting. This is a log for errors that had not been covered by the Validation profile. A sample scenario is: Item ID validation has been disabled on the Validation profile but the Item ID does not exist in in D365. This will throw an error during posting and the error will be available in the Log but not part of the Validation results (11).<\/p>\n\r<p class=\"p_Normal\">3. <span style=\"font-weight: bold;\">Origin<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">Source of the document displayed. On the OCR Invoice processing the value is set to \'OCR Station.\'<\/p>\n\r<p class=\"p_Normal\">4. <span style=\"font-weight: bold;\">Validation profile Id<\/span> <\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">Name of the profile used to validate the contents of the invoice.<\/p>\n\r<p class=\"p_Normal\">5. <span style=\"font-weight: bold;\">Action<\/span> <\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">Last action performed on the displayed document.<\/p>\n\r<p class=\"p_Normal\">6. <span style=\"font-weight: bold;\">Status<\/span> <\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">Status of the invoice after validation.<\/p>\n\r<p class=\"p_Normal\">7. <span style=\"font-weight: bold;\">Attachments<\/span> <\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">Drop-down list including all the attachments related to the displayed invoice.<\/p>\n\r<p class=\"p_Normal\">8. Document<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Document Id: identification of the imported document.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Label Id: label number used during import of the invoice. The value is empty if no label Cover page has been used.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Company accounts ID: legal entity in Dynamics 365 Finance &amp; SCM assigned to the invoice during import.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Invoice type:<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>With purchase order.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Without purchase order. <\/p>\n\r<p class=\"p_Normal\">9. <span style=\"font-weight: bold;\">Invoice<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Number: number of the invoice.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Invoice date: date when the invoice was issued.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Invoice account: account number in Dynamics 365 Finance &amp; SCM of the party issuing the invoice.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Currency: currency used on the invoice.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Subtotal amount: invoice amount before tax amount is applied.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Sales tax: amount of sales tax on the invoice.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Invoice amount: Total amount on the invoice including tax amounts.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Tax exempt number: number identifying party subject to taxation.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span> Purchase order: purchase order number in Dynamics 365 Finance &amp; SCM used to match the invoice.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Vendor account: account number of the vendor from the purchase order.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Name: name of the vendor.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>IBAN: IBAN account number.<\/p>\n\r<p class=\"p_Normal\">10. <span style=\"font-weight: bold;\">Document preview<\/span> <\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">Preview of the processed invoice and related attachments.<\/p>\n\r<p class=\"p_Normal\">11. <span style=\"font-weight: bold;\">Related information<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">Click to expand and collapse the Validation status and Rejection status information.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Import validation status: &nbsp;list of validated elements and the status of each element validation. By default only validation errors and warnings are displayed on the list. All validation results are displayed when \'Show errors only\' box is not checked.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Rejection: rejection information:<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Rejected by: user rejecting the document.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Rejected to: user to whom the document is rejected for further action.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Rejected date time: time and date when the document has been rejected. The value is filled in automatically.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Rejection code: code selected from a predefined list of Rejection codes.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Rejection note: free text information provided when the document has been rejected.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin: 0.6250rem 0 0 0.8125rem;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Solution: free text information provided when the document has been updated for another validation.<\/p>"
})
