hmLoadTopic({
hmKeywords:"",
hmTitle:"Security configuration",
hmDescription:"FlexxLink is shipped with a predefined set of privileges. The following chapter describes what each privilege refers to and what level of access it grants in FlexxLink...",
hmPrevLink:"endpoint2.html",
hmNextLink:"flexxstore-overview.html",
hmParentLink:"user-manual.html",
hmBreadCrumbs:"FlexxLink &gt; <a href=\"user-manual.html\">User manual<\/a>",
hmTitlePath:"FlexxLink > User manual > Security configuration",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Security configuration<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">FlexxLink is shipped with a predefined set of privileges. The following chapter describes what each privilege refers to and what level of access it grants in FlexxLink configuration and operations. <\/p>\n\r<p class=\"p_Normal\">The privileges can be assigned to a role according to security configuration requirements established for Dynamics 365 Finance &amp; SCM environment. A role containing a set of selected FlexxLink privileges can be assigned to a user in Dynamics 365 Finance &amp; SCM.<\/p>\n\r<p class=\"p_Normal\">The following manual does not inform which privileges should be selected for which role because the segregation of duties and responsibilities as well as access levels may differ in organizations or Dynamics 365 Finance &amp; SCM environments. <\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">The following table lists and describes all privileges defined for FlexxLink grouped by area of responsibility.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">Administration<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.38; padding: 0 0 0 0; margin: 0.6250rem 0 0 0;\"><table style=\"border:solid 0.1250rem #808080; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; background-color:#808080; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\"><span style=\"font-weight: bold; color: #ffffff;\">Privilege name<\/span><\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#808080; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\"><span style=\"font-weight: bold; color: #ffffff;\">Description<\/span><\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Execute EDI periodic jobs<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to set up and execute Batch jobs in:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal posting<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration job processing<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI business configuration<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Validation rules<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Validation profiles<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration party<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Rejection code<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Document log<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI technical configuration<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Interfaces<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Endpoint<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Origin<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Parameters<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration monitor<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration jobs<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Active EDI interfaces - execute the report only.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Process EDI sales invoice export<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to resend functionality for Invoice Journal entries.<\/p>\n\r<p class=\"p_Normal\">Grants access to Document log.<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">NOTE<\/span>: Automatic sending of the document upon posting is not dependent on this privilege. The automatic sending will work regardless if this privilege is granted or not. This privilege is for resending.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Process EDI sales packing slip export<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to resend functionality for Packing Slip Journal entries.<\/p>\n\r<p class=\"p_Normal\">Grants access to Document log.<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">NOTE<\/span>: Automatic sending of the document upon posting is not dependent on this privilege. The automatic sending will work regardless if this privilege is granted or not. This privilege is for resending.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI business configuration<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Validation rules<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Validation profiles<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration party<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Rejection code<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Document log<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI technical configuration<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Interfaces<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Endpoint<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Origin<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Parameters<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration monitor (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration jobs<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Active EDI interfaces (Report) - execute report only.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">Handling inbound documents<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.38; padding: 0 0 0 0; margin: 0.6250rem 0 0 0;\"><table style=\"border:solid 0.1250rem #808080; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; background-color:#808080; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\"><span style=\"font-weight: bold; color: #ffffff;\">Privilege name<\/span><\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#808080; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\"><span style=\"font-weight: bold; color: #ffffff;\">Description<\/span><\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI collections<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Collection processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Collection validation journal<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI purchase order invoice<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Invoice processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log (Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI purchase orders<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log (Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI sales orders<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Sales processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Sales order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log (Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI business configuration<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Validation rules<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Validation profiles<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration party<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Rejection code<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Document log<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI technical configuration<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Interfaces<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Endpoint<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Origin<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Parameters<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration monitor (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration jobs<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Active EDI interfaces (Report) - execute report only.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI collections<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Collection processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Collection validation journal<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI purchase order invoice<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Invoice processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log &nbsp;(Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI purchase orders<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log &nbsp;(Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI sales orders<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Sales processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Sales order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log &nbsp;(Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">Handling outbound documents<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.38; padding: 0 0 0 0; margin: 0.6250rem 0 0 0;\"><table style=\"border:solid 0.1250rem #808080; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; background-color:#808080; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\"><span style=\"font-weight: bold; color: #ffffff;\">Privilege name<\/span><\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#808080; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\"><span style=\"font-weight: bold; color: #ffffff;\">Description<\/span><\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Execute EDI periodic jobs<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to set up and execute Batch jobs in:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal posting<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration job processing<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI business configuration<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Validation rules<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Validation profiles<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration party<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Rejection code<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Document log<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI technical configuration<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Interfaces<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Endpoint<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Origin<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Parameters<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration monitor<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration jobs<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Active EDI interfaces - execute the report only.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI collections<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Collection processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Collection validation journal<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI purchase order invoice<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Invoice processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log (Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI purchase orders<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log (Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Maintain EDI sales orders<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view, create, modify and delete entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Sales processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Sales order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log (Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Process EDI purchase confirmation export<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to resend functionality for Purchase Order Confirmation Journal entries.<\/p>\n\r<p class=\"p_Normal\">Grants access to Document log.<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">NOTE<\/span>: Automatic sending of the document upon posting is not dependent on this privilege. The automatic sending will work regardless if this privilege is granted or not. This privilege is for resending.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Process EDI sales confirmation export<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to resend functionality for Sales Order Confirmation Journal entries.<\/p>\n\r<p class=\"p_Normal\">Grants access to Document log.<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">NOTE<\/span>: Automatic sending of the document upon posting is not dependent on this privilege. The automatic sending will work regardless if this privilege is granted or not. This privilege is for resending.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Process EDI sales invoice export<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to resend functionality for Invoice Journal entries.<\/p>\n\r<p class=\"p_Normal\">Grants access to Document log.<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">NOTE<\/span>: Automatic sending of the document upon posting is not dependent on this privilege. The automatic sending will work regardless if this privilege is granted or not. This privilege is for resending.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Process EDI sales packing slip export<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to resend functionality for Packing Slip Journal entries.<\/p>\n\r<p class=\"p_Normal\">Grants access to Document log.<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">NOTE<\/span>: Automatic sending of the document upon posting is not dependent on this privilege. The automatic sending will work regardless if this privilege is granted or not. This privilege is for resending.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI business configuration<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Validation rules<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Validation profiles<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration party<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Rejection code<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Document log<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI technical configuration<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Interfaces<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Endpoint<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Origin<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Parameters<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration monitor (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Integration jobs<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Active EDI interfaces (Report) - execute report only.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI collections<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Collection processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Collection validation journal<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI purchase order invoice<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Invoice processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log &nbsp;(Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI purchase orders<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Purchase order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log &nbsp;(Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">View EDI sales orders<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Grants access to view entries in the following sections of FlexxLink:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Sales processing (Workspace)<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Import journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;Sales order validation journal<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">o &nbsp; &nbsp; &nbsp; &nbsp;EDI management Log &nbsp;(Related information side bar)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r"
})
