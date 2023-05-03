hmLoadTopic({
hmKeywords:"",
hmTitle:"OAuth Endpoints",
hmDescription:"OAuth endpoint has to be configured before the HTTP Client configuration can be started. The OAuth endpoint will be used on HTTP Client address configuration.",
hmPrevLink:"http-server-partners.html",
hmNextLink:"http-client-connections.html",
hmParentLink:"seeburger-bis.html",
hmBreadCrumbs:"<a href=\"introduction.html\">FlexxLink<\/a> &gt; <a href=\"seeburger-bis.html\">Seeburger BIS<\/a> &gt; Configuration",
hmTitlePath:"FlexxLink > Seeburger BIS > Configuration > OAuth Endpoints",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">OAuth Endpoints<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">OAuth endpoint has to be configured before the HTTP Client configuration can be started. The OAuth endpoint will be used on HTTP Client address configuration.<\/p>\n\r<p class=\"p_Normal\">The settings for the endpoint depends on the security requirements of D365. The following configuration assumes the OAuth 2.0 Client credentials authentication method. For other types of endpoint authentication, please refer to BIS manuals.<\/p>\n\r<p class=\"p_Normal\">The following configuration steps need to be performed<span style=\"font-weight: bold;\"> for each D365 system <\/span>that BIS will connect to:<\/p>\n\r<p class=\"p_Normal\">1. Navigate to System settings -&gt; Authorization -&gt; OAuth endpoints:<\/p>\n\r<p class=\"p_Normal\"><img alt=\"clip0064\" style=\"margin:0;width:17.0000rem;height:21.5625rem;border:none\" src=\".\/images\/clip0064.png\"\/> &nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">2. Create a new OAuth endpoint with the following settings provided by the D365 administrator:<\/p>\n\r<p class=\"p_Normal\"><img alt=\"clip0065\" style=\"margin:0;width:34.7500rem;height:31.6250rem;border:none\" src=\".\/images\/clip0065.png\"\/><\/p>\n\r<p class=\"p_Normal\">- Authorization type: Client credentials<\/p>\n\r<p class=\"p_Normal\">- Client id: Id provided by D365 administrator<\/p>\n\r<p class=\"p_Normal\">- Client secret: key provided by the D365 administrator<\/p>\n\r<p class=\"p_Normal\">- Client authentication: Basic authentication<\/p>\n\r<p class=\"p_Normal\">- Token endpoint URI: URL address of the endpoint providing the authentication token<\/p>\n\r<p class=\"p_Normal\">- Use TLS: enable check box.<\/p>\n\r<p class=\"p_Normal\">Keep the remaining settings as default.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">3. Select tab Scopes and provide the following settings:<\/p>\n\r<p class=\"p_Normal\"><img alt=\"clip0066\" style=\"margin:0;width:34.7500rem;height:31.7500rem;border:none\" src=\".\/images\/clip0066.png\"\/><\/p>\n\r<p class=\"p_Normal\">- Scope: URL according to the information from the D365 administrator.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">4. Select TLS tab and provide the following:<\/p>\n\r<p class=\"p_Normal\"><img alt=\"clip0067\" style=\"margin:0;width:35.0000rem;height:31.8125rem;border:none\" src=\".\/images\/clip0067.png\"\/><\/p>\n\r<p class=\"p_Normal\">- Trust model: Certificate authority-based<\/p>\n\r<p class=\"p_Normal\">- Trusted CAs: <\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">- System default list (SYTEM-CACERTS): enable check box<\/p>\n\r<p class=\"p_Normal\" style=\"margin: 0.6250rem 0 0 0.8125rem;\">- Custom list: if you have a custom keystore holding Certificate Authorities\' certificates, select it and enable the checkbox.<\/p>\n\r<p class=\"p_Normal\">Keep the remaining settings as default.<\/p>\n\r"
})
