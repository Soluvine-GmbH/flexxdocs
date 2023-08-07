hmLoadTopic({
hmKeywords:"",
hmTitle:"Validation profile",
hmDescription:"In order to attach rules to import process it is necessary to create and setup a validation profile. A validation profile contains all the rules required to validate a message...",
hmPrevLink:"validation-rules2.html",
hmNextLink:"interfaces2.html",
hmParentLink:"user-manual.html",
hmBreadCrumbs:"FlexxLink &gt; <a href=\"user-manual.html\">User manual<\/a> &gt; Setup &gt; Validation",
hmTitlePath:"FlexxLink > User manual > Setup > Validation > Validation profile",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Validation profile<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">In order to attach rules to import process it is necessary to create and setup a validation profile. A validation profile contains all the rules required to validate a message from a specific source integrated through an interface. The profile allows for an additional customization of how and which validation rules will be applied when importing a message.<\/p>\n\r<p class=\"p_Normal\">FlexxLink allows to add multiple Validation profiles to handle diverse integration and import scenarios, message formats and their contents as well as specific business requirements. A validation profile can be applied to one interface and can have multiple rules.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Validation profile overview:<\/p>\n\r<p class=\"p_Normal\"><img alt=\"clip-Marcin@DESKTOP-Q2CMVB8-0012\" style=\"margin:0;width:84.2500rem;height:42.6875rem;border:none\" src=\".\/images\/clip-marcin@desktop-q2cmvb8-0012.png\"\/><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">1. Action buttons pane:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">- Edit: click to enter \'Edit\' mode. You can adjust rules setup when in \'Edit\' mode. Click \'Save\' to store the existing setup.<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">- New: adds a new line to the list of rules. Rule details need to be provided on the line.<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">- Delete: removes a line from the list of rules.<\/p>\n\r<p class=\"p_Normal\">2. List of Validation profiles: click on a profile to display its configuration and the set of rules associated with the profile.<\/p>\n\r<p class=\"p_Normal\">3. Validation profile: name and profile id. Name of the validation profile can be edited.<\/p>\n\r<p class=\"p_Normal\">4. Interface type: interface for which the Validation profile can be applied. The interface can be selected from the drop-down list.<\/p>\n\r<p class=\"p_Normal\">5. List of rules: detailed information which rules comprise the Validation profile. <\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">A new rule can be added by clicking \'+ New\'.<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">Rules can be deleted by clicking \'Delete\'.<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">Rules can also by added from the drop-down list of available rules by clicking \'Add\'.<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">Each rule has the following properties:<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">- Priority: <span style=\"background-color: #ffffff;\">indicates the order in which the rules are applied. The order will start from the rule with the lowest number and continue until the highest number. This value is inherited from Validation rules setup and can be edited per profile.<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\"><span style=\"background-color: #ffffff;\">- Table name: name of the staging table where the validated value is stored.<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\"><span style=\"background-color: #ffffff;\">- Validation rule:&nbsp;<\/span>name of the method that performs the validation and provides validation result.<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">- Name: <span style=\"background-color: #ffffff;\">name of the validation rule.<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\"><span style=\"background-color: #ffffff;\">- Stop on error: stops the validation if the rule check fails. Further rules in the order of priority will not be checked.<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\"><span style=\"background-color: #ffffff;\">- Validation level:select between \'None\', \'Warning\' and \' Error\'. See table below for information on each validation level.<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.38; padding: 0 0 0 0; margin: 0.6250rem 0 0 0;\"><table style=\"border:solid 0.1250rem #808080; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; background-color:#808080; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\"><span style=\"font-weight: bold; color: #ffffff;\">Validation level<\/span><\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#808080; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\"><span style=\"font-weight: bold; color: #ffffff;\">Description<\/span><\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">None<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Validation will not be performed and no feedback will be shown on the validation results.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Warning<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\"><img alt=\"clip0084\" style=\"margin:0;width:3.0625rem;height:2.6875rem;border:none\" src=\".\/images\/clip0084.png\"\/><\/p>\n\r<p class=\"p_Normal\">Validation is performed. If it fails a warning icon is displayed for the validated value in the \'Import validation status\' menu. The document is set to status \'Validated\' if there are only \'Warning\' level validation checks and no \'Error\' validation check results.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\">Error<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #808080;\"><p class=\"p_Normal\"><img alt=\"clip0085\" style=\"margin:0;width:2.3750rem;height:2.2500rem;border:none\" src=\".\/images\/clip0085.png\"\/><\/p>\n\r<p class=\"p_Normal\">Validation is performed. If it fails an error icon is displayed for the validated value in the \'Import validation status\' menu. The document is set to status \'Error\' if there is at least one \'Error\' level validation check result.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\"><span style=\"background-color: #ffffff;\">- Run on: check-box which specifies if the validation rule will be executed at a specific action done on the document.<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 1.6250rem;\"><span style=\"background-color: #ffffff;\">- Create: validation is performed when the document is created.<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 1.6250rem;\"><span style=\"background-color: #ffffff;\">- Update: validation is performed when the document is updated.<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 1.6250rem;\"><span style=\"background-color: #ffffff;\">- Confirm: validation is performed when the document is confirmed.<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 1.6250rem;\"><span style=\"background-color: #ffffff;\">- Invoice: validation is performed when the document is invoiced.<\/span><\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 1.6250rem;\">&nbsp;<\/p>\n\r"
})
