<div class="contactform">

[[!FormIt?
&hooks=`spam,email,redirect`
&emailTpl=`core.ContactFormEmailMessageTpl`
&emailUseFieldForSubject=`1`
&emailTo=`[[getResources? &resources =`[[++custom.site_settings]]` &tpl=`core.ContactFormEmailAddressTpl` &includeTVs=`1` &processTVs=`1` &limit=`1` &tvPrefix=`` ]]`
&redirectTo=`[[++custom.thank_you]]`
&validate=`name:required,email:email:required,subject:required,message:required:stripTags`
]]
[[!+fi.error_message:notempty=`<p>[[!+fi.error_message]]</p>`]]
<form action="[[~[[*id]]]]" method="post" class="form">
  <fieldset>
    <h2>[[%custom.label_send_us_a_note]]</h2>
    <input type="hidden" name="nospam:blank" value="" />

    <label for="name">[[%custom.label_name]]:
        <span class="error">[[!+fi.error.name]]</span>
    </label>
    <input type="text" name="name" id="name" value="[[!+fi.name]]" />

    <label for="email">[[%custom.label_email]]:
        <span class="error">[[!+fi.error.email]]</span>
    </label>
    <input type="email" name="email" id="email" value="[[!+fi.email]]" />

    <label for="subject">[[%custom.label_subject]]:
        <span class="error">[[!+fi.error.subject]]</span>
    </label>
    <input type="text" name="subject" id="subject" value="[[!+fi.subject]]" />

    <label for="text">[[%custom.label_message]]:
        <span class="error">[[!+fi.error.text]]</span>
    </label>
    <textarea name="message" id="message" cols="55" rows="7" value="[[!+fi.text]]">[[!+fi.text]]</textarea>

    <br class="clear" />
 
    <div class="form-buttons">
        <input type="submit" id="send" value="[[%custom.label_send]]" class="button small" />
    </div>

  </fieldset>
</form>
</div><!-- contactform -->